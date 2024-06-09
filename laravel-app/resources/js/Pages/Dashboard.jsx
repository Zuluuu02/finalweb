import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const { uploads } = usePage().props;

    const customizedImages = [
        'https://i.pinimg.com/736x/ea/f5/ac/eaf5ac6da2020b35553cc5c52bcf0813.jpg',
        'https://i.pinimg.com/564x/e5/0e/11/e50e1124dd447682ccb3af2cb21df125.jpg',
        'https://i.pinimg.com/564x/ad/e8/33/ade8338a666eda90997faaa9f8a43d4b.jpg',
        'https://i.pinimg.com/564x/27/a3/c9/27a3c9e418b4aab8decd9f394f18a718.jpg',
        'https://i.pinimg.com/564x/0a/c7/7d/0ac77dd09a529154dd2fbc246fd65c15.jpg',
        'https://i.pinimg.com/564x/46/97/ec/4697ec2fadee5f494e24adaf217b280f.jpg',
        'https://i.pinimg.com/564x/8b/33/6f/8b336fe625bcf96bc58af67c6db56585.jpg',
        'https://i.pinimg.com/564x/2f/3c/6a/2f3c6ac9f02dd62b58c4ef61598e9b8c.jpg',
        'https://i.pinimg.com/564x/81/88/26/81882608312d648df17695bc2aad3816.jpg',
        'https://i.pinimg.com/564x/f4/ce/9e/f4ce9ef5d7becc100238c73e14d45e73.jpg'
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const handleImageClick = (imageSrc) => {
        setModalImage(imageSrc);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalImage('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    const handleClickOutside = (e) => {
        if (e.target.id === 'modal-overlay') {
            closeModal();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >
            <Head title="Dashboard" />
            <div className="max-w-screen-lg mx-auto px-4">
                <div className="grid grid-cols-5 gap-4">
                    {customizedImages.map((imageSrc, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg cursor-pointer"
                            onClick={() => handleImageClick(imageSrc)}
                        >
                            <img
                                src={imageSrc}
                                alt={`Image ${index}`}
                                className="w-full h-full object-contain transition duration-300 transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-white font-semibold">View</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {isOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={handleClickOutside}
                >
                    <div className="bg-white p-4 rounded-lg max-w-lg mx-auto relative">
                        <button
                            className="absolute top-2 right-2 text-black"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img src={modalImage} alt="Modal" className="w-full h-auto rounded" />
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
