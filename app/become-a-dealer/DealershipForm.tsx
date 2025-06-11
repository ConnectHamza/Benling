import { useState } from 'react';
import AppButton from '../../components/Button/AppButton'

const DealershipForm = () => {
    const [formData, setFormData] = useState({
        showroomState: '',
        fullName: '',
        cnic: '',
        email: '',
        applicantState: '',
        district: '',
        fathersName: '',
        ntn: '',
        mobileNumber: '',
        applicantDistrict: '',
        city: '',
        dob: '',
        strn: '',
        whatsappNumber: '',
        applicantCity: '',
        residentialAddress: '',
        presentBusiness: '',
        ownershipStatus: 'pre-owned',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
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
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Select State</option>
                            <option value="punjab">Punjab</option>
                            <option value="sindh">Sindh</option>
                            <option value="kpk">KPK</option>
                            <option value="balochistan">Balochistan</option>
                        </select>
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <select
                            name="showroomState"
                            value={formData.showroomState}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Select State</option>
                            <option value="punjab">Punjab</option>
                            <option value="sindh">Sindh</option>
                            <option value="kpk">KPK</option>
                            <option value="balochistan">Balochistan</option>
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
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">CNIC</label>
                            <input
                                type="text"
                                name="cnic"
                                value={formData.cnic}
                                onChange={handleChange}
                                placeholder="CNIC"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                            <div className="flex">

                                <input
                                    type="tel"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    placeholder="Mobile Number"
                                    className="flex-1 min-w-0 block w-full p-2  rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Column 3 */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                            <input
                                type="text"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                placeholder="DD/MM/YYYY"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                            <div className="flex">
                                <input
                                    type="tel"
                                    name="whatsappNumber"
                                    value={formData.whatsappNumber}
                                    onChange={handleChange}
                                    placeholder="WhatsApp Number"
                                    className="flex-1 min-w-0 block w-full p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                    {/* Column 2 */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Residential Address</label>
                            <input
                                type="text"
                                name="residentialAddress"
                                value={formData.residentialAddress}
                                onChange={handleChange}
                                placeholder="Residential Address"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Showroom Ownership Status */}
            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Showroom Ownership Status</h2>
                <div className=" flex items-center">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="pre-owned"
                            name="ownershipStatus"
                            value="pre-owned"
                            checked={formData.ownershipStatus === 'pre-owned'}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor="pre-owned" className="ml-2 block text-sm text-gray-700">
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
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                            />
                            <label htmlFor="pre-owned-space" className="ml-2 block text-sm text-gray-700">
                                Pre-owned Space
                            </label>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                                                        <AppButton
                                                            size="medium"
                                                            variant="solid"
                                                            label="Send Message"
                                                            iconName="ArrowUpRight"
                                                            iconPosition="right"
                                                            className="w-auto"
                                                            textColor='text-[#000]'
                                                            type="submit"                                                            
                                                        />
                                                        </div>
            </section>
        </div>
    );
};

export default DealershipForm;