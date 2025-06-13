import { useEffect, useState } from 'react';
import AppButton from '../../components/Button/AppButton'
import { getCities, City } from '../api/citiesApi';
import { getStates, State } from '../api/stateApi';
import { postDealershipApplication } from '../api/dealershipApi';
import DatePicker from '@/components/DatePicker/DatePicker';


const initialFormData = {
    showroomState: '',
    district: '',
    city: '',
    fullName: '',
    fathersName: '',
    dob: '',
    cnic: '',
    ntn: '',
    strn: '',
    email: '',
    mobileNumber: '',
    whatsappNumber: '',
    applicantState: '',
    applicantDistrict: '',
    applicantCity: '',
    residentialAddress: '',
    presentBusiness: '',
    ownershipStatus: 'rental-space',
};

const DealershipForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [stateOptions, setStateOptions] = useState<State[]>([]);
    const [cityOptions, setCityOptions] = useState<City[]>([]);
    const [applicantCityOptions, setApplicantCityOptions] = useState<City[]>([]);
    const [stateLoading, setStateLoading] = useState(true);
    const [cityLoading, setCityLoading] = useState(false);
    const [applicantCityLoading, setApplicantCityLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        let mounted = true;
        setStateLoading(true);
        getStates().then(states => {
            if (mounted) setStateOptions(states);
        }).catch(() => {
            if (mounted) setStateOptions([]);
        }).finally(() => {
            if (mounted) setStateLoading(false);
        });
        return () => { mounted = false; }
    }, []);

    useEffect(() => {
        let mounted = true;
        if (!formData.showroomState) {
            setCityOptions([]);
            return;
        }
        const selectedState = stateOptions.find(st => st.id.toString() === formData.showroomState);
        if (!selectedState) return;
        setCityLoading(true);
        getCities(selectedState.id).then(cities => {
            if (mounted) setCityOptions(cities);
        }).catch(() => {
            if (mounted) setCityOptions([]);
        }).finally(() => {
            if (mounted) setCityLoading(false);
        });
        return () => { mounted = false; }
    }, [formData.showroomState, stateOptions]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
            ...(name === "showroomState" ? { city: "" } : {}) // reset city when state changes
        }));
    };

    function formatDate(dob: string) {
        // Accepts "YYYY-MM-DD", converts to "YYYY-MM-DDT00:00:00"
        if (/^\d{4}-\d{2}-\d{2}$/.test(dob)) return `${dob}T00:00:00`;
        return dob;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setApiError(null);
        setSuccess(false);
        setLoading(true);

        try {
            const payload = {
                showroomState: stateOptions.find(s => s.id.toString() === formData.showroomState)?.name || "",
                showroomDistrict: formData.district,
                showroomCity: formData.city,
                fullName: formData.fullName,
                fatherName: formData.fathersName,
                dateOfBirth: formatDate(formData.dob),
                cnic: formData.cnic,
                ntn: formData.ntn,
                strn: formData.strn,
                emailAddress: formData.email,
                mobileNumber: formData.mobileNumber,
                whatsAppNumber: formData.whatsappNumber,
                applicantState: stateOptions.find(s => s.id.toString() === formData.applicantState)?.name || "",
                applicantDistrict: formData.applicantDistrict,
                applicantCity: formData.applicantCity,
                residentialAddress: formData.residentialAddress,
                businessOccupation: formData.presentBusiness,
                showroomOwnershipStatus: formData.ownershipStatus,
            };


            await postDealershipApplication(payload);
            setSuccess(true);
            setFormData(initialFormData);
        } catch (err: any) {
            setApiError(
                err?.response?.data?.message ||
                err?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let mounted = true;
        if (!formData.applicantState) {
            setApplicantCityOptions([]);
            return;
        }
        const selectedState = stateOptions.find(st => st.id.toString() === formData.applicantState);
        if (!selectedState) return;
        setApplicantCityLoading(true);
        getCities(selectedState.id).then(cities => {
            if (mounted) setApplicantCityOptions(cities);
        }).catch(() => {
            if (mounted) setApplicantCityOptions([]);
        }).finally(() => {
            if (mounted) setApplicantCityLoading(false);
        });
        return () => { mounted = false; }
    }, [formData.applicantState, stateOptions]);

    const handleCityClick = () => {
        if (!formData.showroomState) {
            alert("Please select a state first.");
        }
    };

    const handleApplicantCityClick = () => {
        if (!formData.applicantState) {
            alert("Please select applicant state first.");
        }
    };

    const handleCnicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
  if (value.length > 5) value = value.slice(0, 5) + '-' + value.slice(5);
  if (value.length > 13) value = value.slice(0, 13) + '-' + value.slice(13, 14);
  value = value.slice(0, 15);
  setFormData(prev => ({ ...prev, cnic: value }));
};

    return (
        <form onSubmit={handleSubmit}>
            <div className="md:w-lg mx-auto px-4 pb-20 font-sans bg-white rounded-lg shadow-sm">
                <h1 className="text-4xl font-magistral font-bold text-gray-800 mb-2">Dealership Form</h1>
                <p className="text-gray-600 mb-8">Get started with our dealership application. Join us in electrifying Pakistan.</p>

                {/* Showroom Location Details */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Showroom Location Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                            <select
                                name="showroomState"
                                value={formData.showroomState}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                disabled={stateLoading}
                                required
                            >
                                <option value="">{stateLoading ? "Loading states..." : "Select State"}</option>
                                {stateOptions.map(state => (
                                    <option key={state.id} value={state.id}>
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                            <select
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                onClick={handleCityClick}
                                className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                disabled={!formData.showroomState || cityLoading}
                                required
                            >
                                <option value="">
                                    {!formData.showroomState
                                        ? "Select City"
                                        : cityLoading
                                            ? "Loading cities..."
                                            : "Select City"}
                                </option>
                                {cityOptions.map(city => (
                                    <option key={city.id} value={city.name}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </section>

                {/* Main Applicant's Details */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Main Applicant's Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Column 1 */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">CNIC</label>
                                <input
                                    type="text"
                                    name="cnic"
                                    value={formData.cnic}
                                    onChange={handleCnicChange}
                                    placeholder="CNIC"
                                    className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    maxLength={15}
                                    pattern="\d{5}-\d{7}-\d{1}"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        {/* Column 2 */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Father's Name</label>
                                <input
                                    type="text"
                                    name="fathersName"
                                    value={formData.fathersName}
                                    onChange={handleChange}
                                    placeholder="Father's Name"
                                    className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">NTN</label>
                                <input
                                    type="text"
                                    name="ntn"
                                    value={formData.ntn}
                                    onChange={handleChange}
                                    placeholder="NTN"
                                    className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                <input
                                    type="tel"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    maxLength={13}
                                    pattern="[0-9]*"
                                    inputMode="numeric"
                                    placeholder="Mobile Number"
                                    className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        {/* Column 3 */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                <DatePicker
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">STRN</label>
                                <input
                                    type="text"
                                    name="strn"
                                    value={formData.strn}
                                    onChange={handleChange}
                                    placeholder="STRN"
                                    className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                                <input
                                    type="tel"
                                    name="whatsappNumber"
                                    value={formData.whatsappNumber}
                                    onChange={handleChange}
                                    maxLength={13}
                                    pattern="[0-9]*"
                                    inputMode="numeric"
                                    placeholder="WhatsApp Number"
                                    className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Second Row */}


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Applicant State</label>
                            <select
                                name="applicantState"
                                value={formData.applicantState}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                disabled={stateLoading}
                                required
                            >
                                <option value="">{stateLoading ? "Loading states..." : "Select State"}</option>
                                {stateOptions.map(state => (
                                    <option key={state.id} value={state.id}>
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Applicant City</label>
                            <select
                                name="applicantCity"
                                value={formData.applicantCity}
                                onChange={handleChange}
                                onClick={handleApplicantCityClick}
                                className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                disabled={!formData.applicantState || applicantCityLoading}
                                required
                            >
                                <option value="">
                                    {!formData.applicantState
                                        ? "Select City"
                                        : applicantCityLoading
                                            ? "Loading cities..."
                                            : "Select City"}
                                </option>
                                {applicantCityOptions.map(city => (
                                    <option key={city.id} value={city.name}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Residential Address</label>
                                <input
                                    type="text"
                                    name="residentialAddress"
                                    value={formData.residentialAddress}
                                    onChange={handleChange}
                                    placeholder="Residential Address"
                                    className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Present Business / Occupation</label>
                                <input
                                    type="text"
                                    name="presentBusiness"
                                    value={formData.presentBusiness}
                                    onChange={handleChange}
                                    placeholder="Present Business / Occupation"
                                    className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </section>


                {/* Showroom Ownership Status */}
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Showroom Ownership Status</h2>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="rental-space"
                                name="ownershipStatus"
                                value="rental-space"
                                checked={formData.ownershipStatus === 'rental-space'}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-400"
                                required
                            />
                            <label htmlFor="rental-space" className="ml-2 block text-sm text-gray-700">
                                Rental Space
                            </label>
                        </div>
                        <div className="ml-6">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="pre-owned-space"
                                    name="ownershipStatus"
                                    value="pre-owned"
                                    checked={formData.ownershipStatus === 'pre-owned'}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-400"
                                    required
                                />
                                <label htmlFor="pre-owned-space" className="ml-2 block text-sm text-gray-700">
                                    Pre-owned Space
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        {apiError && <div className="text-red-500 my-2">{apiError}</div>}
                        {success && <div className="text-green-500 my-2">Application submitted successfully!</div>}
                        <AppButton
                            size="medium"
                            variant="solid"
                            label={loading ? "Submitting..." : "Submit"}
                            iconName="ArrowUpRight"
                            iconPosition="right"
                            className="w-auto"
                            textColor='text-[#000]'
                            type="submit"
                        />
                    </div>
                </section>
            </div>
        </form>
    );
};

export default DealershipForm;