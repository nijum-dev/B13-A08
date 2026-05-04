'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaUserCircle, FaEnvelope, FaPen } from 'react-icons/fa';
import Footer from '@/components/Footer';

const MyProfilePage = () => {
    const { user, logout, loading } = useAuth();
    const router = useRouter();

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#104216]"></div>
        </div>
    );

    if (!user) {
        router.push('/login');
        return null;
    }

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <div className="py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100">
                        <div className="bg-[#104216] h-32 relative">
                            <button 
                                onClick={logout}
                                className="absolute top-6 right-6 bg-red-500/20 text-red-100 hover:bg-red-500 hover:text-white px-4 py-2 rounded-full text-sm font-bold transition-all"
                            >
                                Logout
                            </button>
                        </div>
                        
                        <div className="px-8 pb-12 -mt-16 text-center">
                            <div className="relative inline-block">
                                <img 
                                    src={user.photo || 'https://i.pravatar.cc/150'} 
                                    alt={user.name} 
                                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover bg-gray-100"
                                />
                                <Link 
                                    href="/my-profile/update"
                                    className="absolute bottom-0 right-0 bg-[#D4924A] text-white p-2 rounded-full shadow-lg hover:scale-110 transition-all border-2 border-white"
                                >
                                    <FaPen className="text-sm" />
                                </Link>
                            </div>

                            <div className="mt-6 space-y-2">
                                <h2 className="text-3xl font-black text-[#104216]">{user.name}</h2>
                                <div className="flex items-center justify-center gap-2 text-gray-500 font-medium">
                                    <FaEnvelope className="text-gray-400" />
                                    <span>{user.email}</span>
                                </div>
                            </div>

                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Link href="/animals" className="bg-[#104216] text-white py-4 rounded-2xl font-bold hover:bg-[#0d3512] transition-all">
                                    Browse Animals
                                </Link>
                                <Link href="/my-profile/update" className="bg-white border-2 border-[#104216] text-[#104216] py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                                    Update Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyProfilePage;
