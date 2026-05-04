'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { FaUser, FaImage, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const UpdateProfilePage = () => {
    const { user, updateProfile, loading } = useAuth();
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (user) {
            setName(user.name || '');
            setPhoto(user.photo || '');
        }
    }, [user]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#104216]"></div>
        </div>
    );

    if (!user) {
        router.push('/login');
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile({ name, photo });
        toast.success('Profile updated successfully! ✨');
        router.push('/my-profile');
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7] flex flex-col pt-12 px-4 pb-20">
            <div className="max-w-md w-full mx-auto space-y-8 bg-white p-10 rounded-[32px] shadow-xl border border-gray-100">
                <Link href="/my-profile" className="inline-flex items-center gap-2 text-[#104216] font-bold hover:underline mb-4">
                    <FaArrowLeft /> Back to Profile
                </Link>
                
                <div className="text-center">
                    <h2 className="text-3xl font-black text-[#104216]">Update Information</h2>
                    <p className="mt-2 text-sm text-gray-500 font-medium">Keep your profile data current</p>
                </div>
                
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-600 ml-1">Full Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-[#FAF9F6] border-none rounded-xl p-4 pl-12 focus:ring-2 focus:ring-[#104216] outline-none font-medium transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-600 ml-1">Photo URL</label>
                            <div className="relative">
                                <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    required
                                    value={photo}
                                    onChange={(e) => setPhoto(e.target.value)}
                                    className="w-full bg-[#FAF9F6] border-none rounded-xl p-4 pl-12 focus:ring-2 focus:ring-[#104216] outline-none font-medium transition-all"
                                    placeholder="https://example.com/photo.jpg"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-[#D4924A] text-white py-4 rounded-xl font-black text-lg shadow-lg hover:bg-[#b87d3a] transition-all active:scale-[0.98]"
                        >
                            Update Information
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfilePage;
