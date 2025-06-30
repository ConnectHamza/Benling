'use client';

import { useEffect, useRef, useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import CrownLogo from '../../public/assets/Dealer/Crown-Logo.svg';
import StoreIcon from '../../public/assets/Dealer/Crown-Shop-icon.svg';
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
    const match = url.match(/@([0-9\.\-]+),([0-9\.\-]+)/);
    if (!match) return null;
    return {
        lat: parseFloat(match[1]),
        lng: parseFloat(match[2]),
    };
};

const StoreLocator: FC = () => {
    const [selectedCity, setSelectedCity] = useState<City>('Karachi');
    const [activeDealer, setActiveDealer] = useState<Dealer | null>(null);
    const dealers: Dealer[] = cities[selectedCity].data;

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyC0rPbtTAfl8iG6RW1HlitkjtGUsYZnf7g',
    });

    const mapRef = useRef<google.maps.Map | null>(null);

    const onMapLoad = (map: google.maps.Map) => {
        mapRef.current = map;
    };

    useEffect(() => {
        if (!mapRef.current || !isLoaded) return;

        const bounds = new window.google.maps.LatLngBounds();
        dealers.forEach((dealer) => {
            const pos = extractLatLng(dealer.location);
            if (pos) bounds.extend(pos);
        });

        mapRef.current.fitBounds(bounds);
    }, [dealers, isLoaded]);

    return (
        <div className="flex w-full h-screen mt-20">

            <div className="p-6 overflow-y-auto overflow-gray bg-black-30 text-white shadow z-10 md:w-[25%]">
                <h2 className="text-2xl font-semibold mb-4">Find a Dealer</h2>

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
                                <Phone color='red' size={16} /> {dealer.phone.join(', ')}
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


            <div className="md:w-[75%] h-full">
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
                                    position={pos}
                                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                >
                                    <div
                                        onClick={() => setActiveDealer(dealer)}
                                        style={{
                                            width: 40,
                                            height: 40,
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
                                    <div className="rounded-xl shadow-lg bg-[#454545] text-white p-4 min-w-[320px] max-w-[350px] relative">
                                        <div className="flex flex-row items-center mb-2">
                                            <img src={CrownLogo.src} alt="Crown Logo" className="h-8 mr-2" />
                                            <span className="text-lg font-semibold">{activeDealer.name}</span>
                                        </div>
                                        <div className="text-sm text-white mb-2">{activeDealer.address}</div>
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
                                                className="text-white font-bold text-sm inline-block"
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
    );
};

export default StoreLocator;