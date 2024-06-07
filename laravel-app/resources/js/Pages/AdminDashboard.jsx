import React, { useState, useEffect } from 'react';
import AdminAuthLayout from '@/Layouts/AdminAuthLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const categories = ['casual', 'semi-formal', 'formal', 'dress', 'style'];
    const { uploads } = usePage().props;

    const [isOpen, setIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [images, setImages] = useState([]);

    useEffect(() => {
        const generatedImages = [...Array(10)].map((_, index) => {
            const category = categories[index % categories.length];
            return `https://source.unsplash.com/random/1000x${Math.floor(
                Math.random() * (1000 + 100 - 1)
            ) + 1000}?${category}`;
        });
        setImages(generatedImages);
    }, []);

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
        <AdminAuthLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin</h2>}
        >
            <Head title="Admin Dashboard" />
            <div className="max-w-screen-lg mx-auto px-4">
                <div className="grid grid-cols-5 gap-4">
                    {images.map((imageSrc, index) => (
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
        </AdminAuthLayout>
    );
}

