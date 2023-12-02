import React, { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";

function ApiTest() {
    const [data, setData] = useState(null);
    const { response, isLoading, error, fetchData } = useAxios(
        `search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );

    console.log("6_7fKsJ8eQWOf5YxmrwFswwpOwaI75HWv3_qb2BCLf0", process.env.REACT_APP_ACCESS_KEY);


    // useEffect to fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Update the local state when the response changes
    useEffect(() => {
        if (response) {
            setData(response.data); // Assuming the response contains a 'data' property
        }
    }, [response]);

    return (
        <div>
            <h2>API Test</h2>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && (
                <div>
                    <p>Data from API:</p>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default ApiTest;
