import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';

export default function Casual({ auth }) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('/images/casual');
                setImages(response.data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    const handleImageClick = (image) => {
        setModalImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalImage(null);
    };

    const handleDeleteImage = async () => {
        try {
            console.log('Deleting image:', modalImage);
            await axios.delete(`/images/${modalImage.id}`);
            console.log('Image deleted successfully');
            setImages(images.filter((img) => img.id !== modalImage.id));
            closeModal();
        } catch (error) {
            console.error('Error deleting image:', error);
        }
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Casual</h2>}
        >
            <Head title="Casual" />
            <div className="max-w-screen-lg mx-auto px-4">
                <div className="grid grid-cols-5 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg cursor-pointer"
                            onClick={() => handleImageClick(image)}
                        >
                            <img
                                src={`/storage/${image.path}`}
                                alt={`Casual Image ${index}`}
                                className="w-full h-full object-contain transition duration-300 transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-white font-semibold">View Details</p>
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
                        {modalImage && (
                            <>
                                <img src={`/storage/${modalImage.path}`} alt="Modal" className="w-full h-auto rounded" />
                                <button
                                    onClick={handleDeleteImage}
                                    className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
