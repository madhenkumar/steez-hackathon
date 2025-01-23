import React from 'react';
import { Navbar } from '../home/_components/Navbar'; // Reuse your Navbar component.

export const metadata = {
    title: "Admin - Vitals Dashboard",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col min-h-screen text-white">
            <Navbar />
            <div className="flex flex-grow items-center justify-center w-full h-full">
                {children}
            </div>
        </main>
    );
}
