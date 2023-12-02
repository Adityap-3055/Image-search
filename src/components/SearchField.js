import { useContext, useState } from "react";
import { ImageContext } from "../App";

const SearchField = () => {
    const [searchValue, setSearchValue] = useState("");
    const { fetchData, setSearchImage } = useContext(ImageContext);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleButtonSearch = () => {
        fetchData(`search/photos?page=3&query=${searchValue || "cats"}&client_id=${process.env.REACT_APP_ACCESS_KEY}&orientation=landscape`)
        setSearchValue("");
        setSearchImage(searchValue);
    }

    // const handleButtonSearch = () => {
    //     const randomParam = Math.random().toString(36).substring(7); // Generates a random string

    //     fetchData(`search/photos?page=1&query=${searchValue || "cats"}&client_id=${process.env.REACT_APP_ACCESS_KEY}&orientation=landscape&_=${randomParam}`);
    //     setSearchValue("");
    //     setSearchImage(searchValue);
    // }

    const handleEnterSearch = e => {
        if (e.key === 'Enter') {
            handleButtonSearch()
        }
    }

    return (
        <div className="flex">
            <input
                className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-800 focus:ring-2 rounded-tl rounded-bl"
                type="search"
                placeholder="Search Anything..."
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={handleEnterSearch}
            ></input>
            <button
                onClick={handleButtonSearch}
                disabled={!searchValue}
                className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
            >
                Search
            </button>
        </div>
    );
};

export default SearchField;
