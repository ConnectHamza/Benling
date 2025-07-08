'use client';

import { useEffect, useRef, useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import CrownLogo from '../../public/assets/Dealer/Crown-Logo.svg';
import StoreIcon from '../../public/assets/Dealer/Crown-Shop-icon.svg';
import PhoneIcon from '../../public/assets/Dealer/Call.svg';
import GoogleMapIcon from '../../public/assets/Dealer/Google-Map.svg';
import { Phone } from 'lucide-react';
import { OverlayView } from "@react-google-maps/api";
import Lottie from "lottie-react";
import CrownAnimation from "../../public/assets/Dealer/Crown-Marker-Animation.json";
import { cities } from '@/app/find-a-dealer/data';
import type { FC } from 'react';
import Image from 'next/image';

type Dealer = {
    id: number;
    name: string;
    address: string;
    phone: string[];
    location: string;
};

type City = keyof typeof cities;

const containerStyle = {
    width: '100%',
    height: '100vh',
};

const defaultCenter = {
    lat: 24.8607,
    lng: 67.0011,
};

const extractLatLng = (url: string) => {
    let match = url.match(/@([0-9\.\-]+),([0-9\.\-]+)/);
    if (!match) {
        match = url.match(/q=([0-9\.\-]+),([0-9\.\-]+)/);
    }
    if (!match) return null;
    return {
        lat: parseFloat(match[1]),
        lng: parseFloat(match[2]),
    };
};

function getDistanceKm(lat1: number, lng1: number, lat2: number, lng2: number) {
    const toRad = (x: number) => x * Math.PI / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

const StoreLocator: FC = () => {
    const [selectedCity, setSelectedCity] = useState<City>('Karachi');
    const [activeDealer, setActiveDealer] = useState<Dealer | null>(null);
    const [userLocated, setUserLocated] = useState(false);
    const sheetRef = useRef<HTMLDivElement>(null);
    const startY = useRef(0);
    const [sheetPosition, setSheetPosition] = useState<'bottom' | 'middle' | 'top'>('middle');

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyC0rPbtTAfl8iG6RW1HlitkjtGUsYZnf7g',
    });

    const mapRef = useRef<google.maps.Map | null>(null);

    // Extract dealers for the currently selected city
    const dealers: Dealer[] = cities[selectedCity]?.data ?? [];

    const onMapLoad = (map: google.maps.Map) => {
        mapRef.current = map;
    };

    // --- CHANGED: Always fit map bounds when selectedCity changes ---
    useEffect(() => {
        if (!mapRef.current || !isLoaded) return;

        const cityDealers = cities[selectedCity]?.data ?? [];
        if (!cityDealers.length && selectedCity !== 'Karachi') {
            // Fallback to Karachi if current city has no dealers
            setSelectedCity('Karachi');
            return;
        }

        // Fit bounds to all dealers in the selected city
        const bounds = new window.google.maps.LatLngBounds();
        cityDealers.forEach((dealer) => {
            const pos = extractLatLng(dealer.location);
            if (pos) bounds.extend(pos);
        });
        // Only fit if we have at least one dealer
        if (cityDealers.length > 0) {
            mapRef.current.fitBounds(bounds);
        } else {
            // Optionally, center to Karachi default if nothing found
            mapRef.current.setCenter(defaultCenter);
            mapRef.current.setZoom(11);
        }
    }, [selectedCity, isLoaded]);
    // ---

    // --- User geolocation: Select the closest city and set bounding ---
    useEffect(() => {
        if (userLocated) return; 

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;

                    let bestCity: City | null = null;
                    let minDistance = Infinity;

                    (Object.keys(cities) as City[]).forEach((city) => {
                        const cityDealers: Dealer[] = cities[city].data;
                        cityDealers.forEach((dealer) => {
                            const pos = extractLatLng(dealer.location);
                            if (pos) {
                                const dist = getDistanceKm(userLat, userLng, pos.lat, pos.lng);
                                if (dist < minDistance) {
                                    minDistance = dist;
                                    bestCity = city;
                                }
                            }
                        });
                    });

                    if (bestCity) setSelectedCity(bestCity);
                    else setSelectedCity('Karachi');
                    setUserLocated(true);
                },
                (error) => {
                    setSelectedCity('Karachi');
                    setUserLocated(true);
                }
            );
        }
    }, [userLocated]);

    // Remove old fitBounds useEffect for dealers/isLoaded (now handled above)

    const handleTouchStart = (e: React.TouchEvent) => {
        startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!sheetRef.current) return;
        const currentY = e.touches[0].clientY;
        const diff = startY.current - currentY;
        sheetRef.current.style.transform = `translateY(${-diff}px)`;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!sheetRef.current) return;
        const currentY = e.changedTouches[0].clientY;
        const diff = startY.current - currentY;
        const threshold = 50;

        if (diff > threshold) {
            setSheetPosition('top');
        } else if (diff < -threshold) {
            setSheetPosition('bottom');
        } else {
            setSheetPosition('middle');
        }
    };

    const positions = {
        bottom: 'translateY(calc(100% - 100px))',
        middle: 'translateY(calc(50% - 100px))',
        top: 'translateY(0)'
    };

    return (
        <div className="w-full h-screen relative">
            {/* DESKTOP VERSION - COMPLETELY UNCHANGED */}
            <div className="hidden md:flex w-full h-screen relative">
                <div className="p-6 pt-20 overflow-y-auto bg-black-30 text-white shadow z-20 md:w-[25%] h-[70vh] md:h-full absolute bottom-0">
                    <h2 className="text-2xl font-semibold my-4">Find a Dealer</h2>

                    <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value as City)}
                        className="w-full border rounded p-2 mb-4 text-black-30"
                    >
                        {Object.keys(cities).map((city) => (
                            <option key={city}>{city}</option>
                        ))}
                    </select>

                    <p className="text-sm text-[#dedede] mb-2">
                        {dealers.length} Search Results
                    </p>

                    {dealers.map((dealer) => (
                        <div
                            key={dealer.id}
                            className="bg-[#454545] flex flex-col gap-4 hover:border-red-200 text-white border p-4 rounded-lg mb-3 shadow-sm hover:shadow transition"
                        >
                            <div className='flex gap-2 '>
                                <Image alt='Crown Electric Mobility' src={StoreIcon} className='w-8' />
                                <h3 className="font-semibold text-lg capitalize">{dealer.name}</h3>
                            </div>
                            <p className="text-sm">{dealer.address}</p>
                            <div className='flex S justify-between'>
                                
                                <p className="text-sm flex gap-2 items-center underline">                                    
                                    <Image alt='Dealer Contact' src={PhoneIcon} width={15} height={15}/> {dealer.phone.join(', ')}
                                </p>
                                <div className='flex gap-2 items-center'>
                                    <Image width={20} alt='Google Map Icon' src={GoogleMapIcon} />
                                    <a
                                        href={dealer.location}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-white font-bold text-sm inline-block"
                                    >
                                        Get Direction
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="md:w-full h-full order-first">
                    {isLoaded && (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={defaultCenter}
                            zoom={11}
                            onLoad={onMapLoad}
                        >
                            {dealers.map((dealer) => {
                                const pos = extractLatLng(dealer.location);
                                if (!pos) return null;
                                return (
                                    <OverlayView
                                        key={dealer.id}
                                        position={pos}
                                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                    >
                                        <div
                                            onClick={() => setActiveDealer(dealer)}
                                            style={{
                                                width: 60,
                                                height: 60,
                                                cursor: "pointer",
                                                transform: "translate(-50%, -50%)",
                                            }}
                                        >
                                         <Lottie
                                                animationData={CrownAnimation}
                                                loop
                                                autoplay
                                                style={{ width: "100%", height: "100%" }}
                                            />
                                        </div>
                                    </OverlayView>
                                );
                            })}

                            {activeDealer && (() => {
                                const pos = extractLatLng(activeDealer.location);
                                if (!pos) return null;
                                return (
                                    <InfoWindow
                                        position={pos}
                                        onCloseClick={() => setActiveDealer(null)}                                
                                    >
                                        <div className="rounded-xl shadow-lg tetx-black-30 p-4 min-w-[320px] max-w-[350px] relative">
                                            <div className="flex flex-row items-center mb-2">
                                                <img src={CrownLogo.src} alt="Crown Logo" className="h-8 mr-2" />
                                                <span className="text-lg font-semibold">{activeDealer.name}</span>
                                            </div>
                                            <div className="text-sm  mb-2">{activeDealer.address}</div>
                                            <div className="flex items-center text-sm mb-2">
                                                <span className="font-medium mr-2">📞</span>
                                                <span>{activeDealer.phone.join(', ')}</span>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <Image width={20} alt='Google Map Icon' src={GoogleMapIcon} />
                                                <a
                                                    href={activeDealer.location}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className=" font-bold text-sm inline-block"
                                                >
                                                    Get Direction
                                                </a>
                                            </div>
                                        </div>
                                    </InfoWindow>
                                );
                            })()}
                        </GoogleMap>
                    )}
                </div>
            </div>

            {/* MOBILE VERSION - NEW IMPLEMENTATION */}
            <div className="md:hidden w-full h-full">
                {/* Map - Full screen */}
                <div className="w-full h-full">
                    {isLoaded && (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={defaultCenter}
                            zoom={11}
                            onLoad={onMapLoad}
                        >
                            {dealers.map((dealer) => {
                                const pos = extractLatLng(dealer.location);
                                if (!pos) return null;
                                return (
                                    <OverlayView
                                        key={dealer.id}
                                        position={pos}
                                        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                    >
                                        <div
                                            onClick={() => {
                                                setActiveDealer(dealer);
                                                setSheetPosition('middle');
                                            }}
                                            style={{
                                                width: 60,
                                                height: 60,
                                                cursor: "pointer",
                                                transform: "translate(-50%, -50%)",
                                            }}
                                        >
                                            <Lottie
                                                animationData={CrownAnimation}
                                                loop
                                                autoplay
                                                style={{ width: "100%", height: "100%" }}
                                            />
                                        </div>
                                    </OverlayView>
                                );
                            })}

                            {activeDealer && (() => {
                                const pos = extractLatLng(activeDealer.location);
                                if (!pos) return null;
                                return (
                                    <InfoWindow
                                        position={pos}
                                        onCloseClick={() => setActiveDealer(null)}                                
                                    >
                                        <div className="rounded-xl shadow-lg tetx-black-30 p-4 min-w-[320px] max-w-[350px] relative">
                                            <div className="flex flex-row items-center mb-2">
                                                <img src={CrownLogo.src} alt="Crown Logo" className="h-8 mr-2" />
                                                <span className="text-lg font-semibold">{activeDealer.name}</span>
                                            </div>
                                            <div className="text-sm  mb-2">{activeDealer.address}</div>
                                            <div className="flex items-center text-sm mb-2">
                                                <span className="font-medium mr-2">📞</span>
                                                <span>{activeDealer.phone.join(', ')}</span>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <Image width={20} alt='Google Map Icon' src={GoogleMapIcon} />
                                                <a
                                                    href={activeDealer.location}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className=" font-bold text-sm inline-block"
                                                >
                                                    Get Direction
                                                </a>
                                            </div>
                                        </div>
                                    </InfoWindow>
                                );
                            })()}
                        </GoogleMap>
                    )}
                </div>

                {/* Bottom Sheet */}
                <div 
                    ref={sheetRef}
                    className={`absolute bottom-0 left-0 right-0 bg-[#1a1a1a] text-white rounded-t-3xl shadow-2xl transition-transform duration-300 ${sheetPosition === 'top' ? 'h-[90vh]' : sheetPosition === 'middle' ? 'h-[60vh]' : 'h-[100px]'}`}
                    style={{ transform: positions[sheetPosition] }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Sheet Handle */}
                    <div className="flex justify-center pt-3 pb-2">
                        <div className="w-10 h-1 bg-gray-500 rounded-full"></div>
                    </div>

                    {/* Sheet Header */}
                    <div className="px-4 py-3 flex justify-between items-center border-b border-gray-700 z-20">
                        <div>
                            <h2 className="text-xl font-semibold">Find a Dealer</h2>
                            <p className="text-xs text-gray-400">{dealers.length} Search Results</p>
                        </div>
                        <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value as City)}
                            className="border rounded p-1 text-black-30 bg-white text-sm"
                        >
                            {Object.keys(cities).map((city) => (
                                <option key={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    {/* Sheet Content */}
                    <div className="h-[calc(100%-60px)] overflow-y-auto p-4">
                        {dealers.map((dealer) => (
                            <div
                                key={dealer.id}
                                className="bg-[#2d2d2d] p-4 rounded-lg mb-3"
                                onClick={() => {
                                    setActiveDealer(dealer);
                                    const pos = extractLatLng(dealer.location);
                                    if (pos && mapRef.current) {
                                        mapRef.current.panTo(pos);
                                        mapRef.current.setZoom(15);
                                    }
                                }}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-lg">{dealer.name}</h3>
                                    <span className="text-sm bg-[#3a3a3a] px-2 py-1 rounded">
                                        7.19m {/* You'll need to calculate this */}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-300 mb-3">{dealer.address}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <Phone color="red" size={16} className="mr-1" />
                                        <span className="text-sm">{dealer.phone[0]}</span>
                                    </div>
                                    <a
                                        href={dealer.location}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center text-sm font-medium"
                                    >
                                        <Image 
                                            width={16} 
                                            alt="Google Map Icon" 
                                            src={GoogleMapIcon} 
                                            className="mr-1"
                                        />
                                        Directions
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreLocator;