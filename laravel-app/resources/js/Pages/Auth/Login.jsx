{/*import { useState, useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import backgroundImage from '/public/thrift.png';
import Logo from '/public/sunshine.v2.png';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="LeSunshine" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(8px)' }}></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-screen">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-96 max-w-full flex flex-col items-center relative">
                        <Link href={route('welcome')} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Link>
                        <img src={Logo} alt="LeSunshine Logo" className="h-24 w-auto mb-8" />
                        <h2 className="text-3xl font-bold mb-6 text-center">Welcome to LeSunshine</h2>
                        {status && <div className="font-medium text-sm text-green-600 mb-4">{status}</div>}
                        <form onSubmit={submit} className="w-full">
                            <div className="mb-6">
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div className="mb-6">
                                <InputLabel htmlFor="password" value="Password" />
                                <div className="relative">
                                    <TextInput
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={data.password}
                                        className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600 focus:outline-none"
                                    >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            <div className="mb-6 flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                {canResetPassword && (
                                    <Link href={route('password.request')} className="text-sm text-gray-600 hover:text-gray-900">
                                        Forgot your password?
                                    </Link>
                                )}
                            </div>
                            <PrimaryButton className="w-full py-3 rounded-full text-center flex items-center justify-center bg-red-600 hover:bg-red-700 text-white" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}*/}

import { useState, useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import backgroundImage from '/public/thrift.png';
import Logo from '/public/sunshine.v2.png';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="LeSunshine" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(8px)' }}></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-screen">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-96 max-w-full flex flex-col items-center relative">
                        <Link href={route('welcome')} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Link>
                        <img src={Logo} alt="LeSunshine Logo" className="h-24 w-auto mb-8" />
                        <h2 className="text-3xl font-bold mb-6 text-center">Welcome to LeSunshine</h2>
                        {status && <div className="font-medium text-sm text-green-600 mb-4">{status}</div>}
                        <form onSubmit={submit} className="w-full">
                            <div className="mb-6">
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div className="mb-6">
                                <InputLabel htmlFor="password" value="Password" />
                                <div className="relative">
                                    <TextInput
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={data.password}
                                        className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600 focus:outline-none"
                                    >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            <div className="mb-6 flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                {canResetPassword && (
                                    <Link href={route('password.request')} className="text-sm text-gray-600 hover:text-gray-900">
                                        Forgot your password?
                                    </Link>
                                )}
                            </div>
                            <PrimaryButton className="w-full py-3 rounded-full text-center flex items-center justify-center bg-red-600 hover:bg-red-700 text-white" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}

