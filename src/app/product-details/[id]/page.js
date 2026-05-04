'use client';

import React, { useState, useEffect } from 'react';
import { FaStar, FaMapMarkerAlt, FaBalanceScale, FaClipboardList } from 'react-icons/fa';
import Footer from '@/components/Footer';
import { useAuth } from '@/context/AuthContext';
import { useRouter, useParams } from 'next/navigation';
import { toast } from 'react-hot-toast';

const ProductDetails = () => {
    const { id } = useParams();
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    
    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    useEffect(() => {
        if (!authLoading && !user) {
            toast.error('Please login to view details.');
            router.push('/login');
        }
    }, [user, authLoading, router]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3000/animal.json",{cache:"no-store"})
                const data = await res.json();
                const found = data.find(item => item.id.toString() === id);
                setAnimal(found);
            } catch (error) {
                console.error('Error fetching animal:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    const handleBooking = (e) => {
        e.preventDefault();
        toast.success(`Successfully booked ${animal.name}! We will contact you soon. 🐄`, {
            duration: 5000,
            icon: '🎉',
        });
        setFormData({ name: '', email: '', phone: '', address: '' });
    };

    if (authLoading || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#104216]"></div>
            </div>
        );
    }

    if (!animal) {
        return <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-gray-500">Animal not found</div>;
    }

    return (
        <div className="bg-[#FDFBF7] min-h-screen pt-8 pb-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column - Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Animal Image */}
                        <div className="relative rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
                            <img 
                                src={animal.image} 
                                alt={animal.name} 
                                className="w-full h-[400px] md:h-[500px] object-cover"
                            />
                            <div className="absolute bottom-6 left-6 flex gap-3">
                                <span className="bg-[#104216] text-[#E7F3E7] text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                    {animal.category}
                                </span>
                                <span className="bg-[#D4924A] text-[#2C1810] text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                    {animal.type}
                                </span>
                            </div>
                        </div>

                        {/* Details Card */}
                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
                            <div className="flex justify-between items-start mb-2">
                                <h1 className="text-3xl md:text-4xl font-black text-[#104216]">
                                    {animal.name}
                                </h1>
                                <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-xl border border-yellow-100">
                                    <FaStar className="text-yellow-500" />
                                    <span className="text-lg font-bold text-gray-700">{animal.rating}</span>
                                </div>
                            </div>
                            <p className="text-gray-400 font-medium mb-8">Seller: {animal.seller || "Verified Seller"}</p>

                            {/* Info Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-gray-50">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Breed</p>
                                    <p className="text-[#104216] font-bold">{animal.breed}</p>
                                </div>
                                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-gray-50">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Weight</p>
                                    <p className="text-[#104216] font-bold">{animal.weight} kg</p>
                                </div>
                                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-gray-50">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Age</p>
                                    <p className="text-[#104216] font-bold">{animal.age} yrs</p>
                                </div>
                                <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-gray-50">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                                        Location
                                    </p>
                                    <div className="flex items-center gap-1">
                                        <FaMapMarkerAlt className="text-red-400 text-xs" />
                                        <p className="text-[#104216] font-bold">{animal.location}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-4 mb-12">
                                <h3 className="text-xl font-bold text-[#104216]">Description</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    {animal.description}
                                </p>
                            </div>

                            {/* Price Section */}
                            <div className="flex justify-between items-center pt-8 border-t border-gray-50">
                                <p className="text-gray-400 font-bold">Price</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl text-[#104216] font-medium">৳</span>
                                    <span className="text-5xl font-black text-[#104216]">
                                        {animal.price.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Booking Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 sticky top-8">
                            <div className="bg-[#104216] p-6 text-white">
                                <div className="flex items-center gap-3 mb-2">
                                    <FaClipboardList className="text-xl" />
                                    <h2 className="text-2xl font-bold">Book This Animal</h2>
                                </div>
                                <p className="text-green-100/70 text-sm">Fill in your details to confirm booking</p>
                            </div>

                            <form className="p-8 space-y-6" onSubmit={handleBooking}>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-600 ml-1">Full Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        placeholder="Your full name" 
                                        className="w-full bg-[#FAF9F6] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#104216] outline-none font-medium transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-600 ml-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        placeholder="email@example.com" 
                                        className="w-full bg-[#FAF9F6] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#104216] outline-none font-medium transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-600 ml-1">Phone Number</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        placeholder="+880 1XXX-XXXXXX" 
                                        className="w-full bg-[#FAF9F6] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#104216] outline-none font-medium transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-600 ml-1">Delivery Address</label>
                                    <textarea 
                                        required
                                        value={formData.address}
                                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                                        placeholder="Your full delivery address" 
                                        rows="3"
                                        className="w-full bg-[#FAF9F6] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#104216] outline-none font-medium transition-all resize-none"
                                    ></textarea>
                                </div>

                                {/* Summary Box */}
                                <div className="bg-[#F3EAD3]/50 p-4 rounded-xl flex justify-between items-center border border-[#F3EAD3]">
                                    <span className="font-bold text-[#104216]">{animal.name}</span>
                                    <div className="flex items-center gap-1 font-bold text-[#104216]">
                                        <span className="text-xs">৳</span>
                                        <span>{animal.price.toLocaleString()}</span>
                                    </div>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-[#2C7A3F] text-white py-4 rounded-xl font-black text-lg shadow-lg hover:bg-[#236332] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                >
                                    Confirm Booking 🎉
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className="mt-20">
                <Footer />
            </div>
        </div>
    );
};

export default ProductDetails;
