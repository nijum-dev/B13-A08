'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { authClient } from '@/app/lib/auth-client';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { data: session, isPending, error } = authClient.useSession();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isPending) {
            if (session?.user) {
                // Map better-auth user to the format expected by the app
                setUser({
                    ...session.user,
                    photo: session.user.image // app uses 'photo', better-auth uses 'image'
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        }
    }, [session, isPending]);

    const login = (userData) => {
        // better-auth handles session, but we can manually update if needed
        setUser(userData);
    };

    const logout = async () => {
        await authClient.signOut();
        setUser(null);
    };

    const updateProfile = (updatedData) => {
        setUser(prev => ({ ...prev, ...updatedData }));
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, updateProfile, loading: loading || isPending }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
