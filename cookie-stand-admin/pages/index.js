import Head from 'next/head';
import React, { useState } from 'react';


function home() {
    //  placeholder component showing JSON string of last created Cookie Stand.
    const [lastCookieStand, setLastCookieStand] = useState(null);
    function handleSubmit(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const entry = {
            location: form.get('location'),
            minCustomers: form.get('minCustomers'),
            maxCustomers: form.get('maxCustomers'),
            avgCookies: form.get('avgCookies'),
        };
        setLastCookieStand(entry);
    }
    return (
        <div >
            <Head >
                <title>Cookie Stand Admin</title>
            </Head>
            <Header />
            <main className="container mx-auto p-4">
                <Form onSubmit={handleSubmit} />
                <Placeholder lastCookieStand={lastCookieStand} />
            </main>
            <footer className="bg-green-500 p-4 text-white ">
                &copy; 2023  Cookie Stand Admin
            </footer>
        </div>
    );
}

function Header() {
    return (
        <header className="bg-green-300 p-4 text-black">
            <h1 className="text-2xl font-semibold">Cookie Stand Admin</h1>
        </header>
    )
}

function Form({ onSubmit }) {
    return (
        <form className="flex flex-col items-center justify-center h-screen"  onSubmit={onSubmit}>
            <div className="bg-green-300 shadow-md rounded-lg p-4">
                <h2 className="text-2xl font-bold mb-4">Create Cookie Stand</h2>
                <div className="mb-4">
                    <div className="flex items-center justify-between">
                        <label className="mr-2">Location</label>
                        <input name="location" id="location" className="w-full border border-gray-300 rounded p-2" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                        <label className="block mb-1">Minimum Customers per Hour</label>
                        <input name="minCustomers" id="minCustomers" type="number" className="w-full border border-gray-300 rounded p-2" />
                    </div>
                    <div>
                        <label className="block mb-1">Maximum Customers per Hour</label>
                        <input name="maxCustomers" id="maxCustomers" type="number" className="w-full border border-gray-300 rounded p-2" />
                    </div>
                    <div>
                        <label className="block mb-1">Average Cookies per Sale</label>
                        <input name="avgCookies" id="avgCookies" type="number" className="w-full border border-gray-300 rounded p-2" />
                    </div>
                    <div className="md:col-span-1 flex items-end md:items-center">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Create</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

function Placeholder({ lastCookieStand }) {
    //  placeholder component showing JSON string of last created Cookie Stand.
    // i asked here chatgpt how to change the result to be as JSON format 
    return (
        <div className="bg-green-300 shadow-md rounded-lg p-4">
            <pre>{JSON.stringify(lastCookieStand, null, 2)}</pre>
        </div>
    );
}
export default home;