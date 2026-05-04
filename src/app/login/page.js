'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'react-hot-toast';
import { FaGoogle, FaEnvelope, FaLock, FaSpinner } from 'react-icons/fa';
import { authClient } from '@/app/lib/auth-client';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const { data, error } = await authClient.signIn.email({
                email: email,
                password: password,
                callbackURL: "/",
            });

            if (error) {
                toast.error(error.message || 'Login failed. Please check your credentials.');
                return;
            }

            if (data) {
                toast.success("Welcome back! Login Successful");
                router.push('/');
                router.refresh();
            }
        } catch (err) {
            toast.error('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (err) {
            toast.error('Google login failed.');
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100/50 backdrop-blur-sm">
                <div className="text-center">
                    <div className="inline-block p-4 rounded-2xl bg-[#104216]/5 mb-4">
                         <h1 className="text-2xl font-black text-[#104216]">Qurbani<span className='text-[#C89731]'>Hat</span></h1>
                    </div>
                    <h2 className="text-3xl font-black text-[#104216]">Welcome Back</h2>
                    <p className="mt-2 text-sm text-gray-500 font-medium italic">Your premium livestock marketplace</p>
                </div>
                
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-black text-[#104216] uppercase tracking-wider ml-1">Email Address</label>
                            <div className="relative group">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#104216] transition-colors" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#FAF9F6] border-2 border-transparent rounded-2xl p-4 pl-12 focus:border-[#104216]/20 focus:bg-white outline-none font-medium transition-all shadow-inner"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-xs font-black text-[#104216] uppercase tracking-wider">Password</label>
                                <Link href="#" className="text-xs font-bold text-[#D4924A] hover:underline">Forgot?</Link>
                            </div>
                            <div className="relative group">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#104216] transition-colors" />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[#FAF9F6] border-2 border-transparent rounded-2xl p-4 pl-12 focus:border-[#104216]/20 focus:bg-white outline-none font-medium transition-all shadow-inner"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#104216] text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-[#104216]/20 hover:bg-[#0d3512] hover:-translate-y-0.5 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                            {isSubmitting ? <FaSpinner className="animate-spin" /> : 'Sign In'}
                        </button>
                    </div>
                </form>

                <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-100"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase tracking-widest font-black text-gray-400">
                        <span className="px-4 bg-white">Secure Access</span>
                    </div>
                </div>

                <div>
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-100 text-gray-700 py-4 rounded-2xl font-bold hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-[0.98] shadow-sm"
                    >
                        <FaGoogle className="text-red-500 text-lg" />
                        <span className="text-[#104216]">Continue with Google</span>
                    </button>
                </div>

                <p className="text-center text-sm text-gray-500 font-bold">
                    New to QurbaniHat?{' '}
                    <Link href="/register" className="text-[#D4924A] hover:text-[#b07b3e] transition-colors">
                        Create Account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
