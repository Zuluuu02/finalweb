import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import SearchBar from '@/Pages/Users/SearchBar';

export default function AdminAuthLayout({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [showingOutfitDropdown, setShowingOutfitDropdown] = useState(false);

    const toggleNavigationDropdown = () => {
        setShowingNavigationDropdown((previousState) => !previousState);
    };

    const toggleOutfitDropdown = () => {
        setShowingOutfitDropdown((previousState) => !previousState);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center relative">
                            <button
                                onClick={toggleOutfitDropdown}
                                className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out ${
                                    showingOutfitDropdown ? 'active' : ''
                                }`}
                            >
                                <svg
                                    className={`h-6 w-6 transition-transform transform ${
                                        showingOutfitDropdown ? 'rotate-90' : ''
                                    }`}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-green-800" />
                            </Link>

                            {showingOutfitDropdown && (
                                <div className="absolute top-16 left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-10">
                                    <div className="py-2">
                                        <ResponsiveNavLink href="/casual" onClick={toggleOutfitDropdown}>
                                            Casual
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink href="/semi-formal" onClick={toggleOutfitDropdown}>
                                            Semi-Formal
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink href="/formal" onClick={toggleOutfitDropdown}>
                                            Formal
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink href="/dress" onClick={toggleOutfitDropdown}>
                                            Dress
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink href="/style" onClick={toggleOutfitDropdown}>
                                            Style
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink href="/manage-users" onClick={toggleOutfitDropdown}>
                                            Manage Users
                                        </ResponsiveNavLink>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex-grow mx-6">
                            <SearchBar />
                        </div>

                        <div className="hidden sm:flex sm:items-center space-x-8">
                            <NavLink href={route('admin.dashboard')} active={route().current('admin.dashboard')}>
                                Home
                            </NavLink>
                            <NavLink href={route('create')} active={route().current('create')}>
                                Create
                            </NavLink>

                            <div className="relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}
                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={toggleNavigationDropdown}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
 