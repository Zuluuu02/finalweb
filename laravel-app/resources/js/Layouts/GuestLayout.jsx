import React from 'react';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            {/* Remove or comment out this section /}
            {/ <div>
                <Link href="/">
                    <img src="/path-to-laravel-logo.png" alt="Laravel Logo" className="h-12 w-12" />
                </Link>
            </div> */}
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}