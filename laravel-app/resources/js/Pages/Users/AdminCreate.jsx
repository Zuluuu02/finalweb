import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';

export default function UploadPicture({ auth }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [style, setStyle] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleStyleChange = (event) => {
        setStyle(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            alert("Please select a file to upload.");
            return;
        }
        if (!style) {
            alert("Please select a style for the photo.");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('style', style);

        try {
            const response = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Success response:', response.data);

            // Redirect to the respective dashboard nga ga based on the selected style
            switch (style) {
                case 'casual':
                    Inertia.visit('/admin-dashboard/casual');
                    break;
                case 'semi-formal':
                    Inertia.visit('/admin-dashboard/semi-formal');
                    break;
                case 'formal':
                    Inertia.visit('/admin-dashboard/formal');
                    break;
                case 'dress':
                    Inertia.visit('/admin-dashboard/dress');
                    break;
                case 'style':
                    Inertia.visit('/admin-dashboard/style');
                    break;
                default:
                    Inertia.visit('/admin-dashboard');
            }

            alert(`File uploaded successfully with style: ${style}!`);
        } catch (error) {
            console.error('There was a problem with the upload:', error);
            alert('Failed to upload file. Please try again.');
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Upload Picture</h2>}
        >
            <Head title="Upload Picture" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="file-upload" className="block text-gray-700 font-semibold mb-2">Select a picture to upload:</label>
                                <input
                                    type="file"
                                    id="file-upload"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="w-full"
                                />
                            </div>
                            {preview && (
                                <div className="mb-4">
                                    <img src={preview} alt="Selected file" className="w-full h-48 object-contain object-center rounded" />
                                </div>
                            )}
                            <div className="mb-4">
                                <label htmlFor="style-select" className="block text-gray-700 font-semibold mb-2">Select the style of the photo:</label>
                                <select
                                    id="style-select"
                                    value={style}
                                    onChange={handleStyleChange}
                                    className="w-full bg-white border border-gray-300 rounded py-2 px-3 text-gray-700"
                                >
                                    <option value="">-- Select Style --</option>
                                    <option value="casual">Casual</option>
                                    <option value="semi-formal">Semi-Formal</option>
                                    <option value="formal">Formal</option>
                                    <option value="dress">Dress</option>
                                    <option value="style">Streetwear</option>
                                </select>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                                >
                                    Upload
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
