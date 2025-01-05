import React, { useEffect, useState } from "react";

function Github() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Waqas-Abbasi-dev')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
                <div className="bg-gray-700 rounded-lg shadow-lg p-6 text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Github Profile</h1>
                    <div className="flex justify-center mb-4">
                        <img 
                            src={data.avatar_url} 
                            alt="Git Picture" 
                            className="rounded-full w-32 h-32 border-4 border-white" 
                        />
                    </div>
                    <p className="text-xl mb-2">Name: {data.name}</p>
                    <p className="text-lg">Followers: {data.followers}</p>
                </div>
            </div>
        </>
    );
}

export default Github;
