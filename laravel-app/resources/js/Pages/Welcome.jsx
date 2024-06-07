import React from 'react';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="LeSunshine - Discover Everything" />
            <header className="w-full bg-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center py-6 px-6">
                    <div className="flex items-center space-x-3">
                        <img src="/sunshine.v2.png" alt="LeSunshine Logo" className="h-15 w-14" /> 
                        <div className="text-3xl font-extrabold text-black">
                            LeSunshine
                        </div>
                    </div>
                    <nav className="flex items-center space-x-4">
                        <Link href="#" className="text-black hover:text-gray-500 font-bold">Explore</Link>
                        <Link href="#" className="text-black hover:text-gray-500 font-bold">About</Link>
                        <Link href="#" className="text-black hover:text-gray-500 font-bold">Blog</Link>
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="btn-primary bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100"
                            >
                                Go to Dashboard
                            </Link>
                        ) : (
                            <div className="flex space-x-2">
                                <Link
                                    href={route('login')}
                                    className="text-white hover:text-gray-900 font-bold rounded-full border bg-red-500 border-red-900 px-4 py-2"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="text-white hover:text-black font-bold rounded-full border bg-gray-500 border-gray-900 px-4 py-2"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </nav>
                </div>
            </header>
            <div className="relative bg-gradient-to-br from-white to-red-400 min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-0">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://s.hdnux.com/photos/77/77/72/16776858/6/960x0.webp")' }}></div>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="max-w-2xl text-center relative z-10">
                    <header className="py-10">
                        <h1 className="text-5xl font-extrabold mb-6">Get your next</h1>
                        <p className="text-5xl font-extrabold mb-6">new look outfit</p>
                        <p className="text-lg font-semibold text-gray-100 mb-80">Find tons of ideas in one place, like browsing through a treasure trove of inspiration.</p>
                    </header>
                </div>
            </div>
            <div className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-extrabold text-black text-center mb-8">More Inspirations</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <img src="https://source.unsplash.com/random/800x600?fashion" alt="Fashion inspiration 1" className="w-full h-auto" />
                        </div>
                        <div>
                            <img src="https://source.unsplash.com/random/800x600?style" alt="Fashion inspiration 2" className="w-full h-auto" />
                        </div>
                        <div>
                            <img src="https://source.unsplash.com/random/800x600?clothing" alt="Fashion inspiration 3" className="w-full h-auto" />
                        </div>
                        <div>
                            <img src="https://source.unsplash.com/random/800x600?outfit" alt="Fashion inspiration 4" className="w-full h-auto" />
                        </div>
                        <div>
                            <img src="https://source.unsplash.com/random/800x600?accessories" alt="Fashion inspiration 5" className="w-full h-auto" />
                        </div>
                        <div>
                            <img src="https://source.unsplash.com/random/800x600?shoes" alt="Fashion inspiration 6" className="w-full h-auto" />
                        </div>
                    </div>
                    <div className="mt-12 flex justify-center items-center">
                        <div className="text-sm text-gray-900 text-center">
                            New to Lesunshine? <Link href="#" className="underline hover:text-gray-300 ml-1">Learn more About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
