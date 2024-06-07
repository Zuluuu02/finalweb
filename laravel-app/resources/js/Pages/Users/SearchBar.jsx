import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        // Handle the search action here
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto"> {/* Center the search bar */}
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search..."
                className="border rounded-full py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-red-600"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
        </div>
    );
};

export default SearchBar;
