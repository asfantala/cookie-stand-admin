import Head from 'next/head';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Form from '@/components/Form';
import Footer from '@/components/Footer';
import ReportTable from '@/components/Table';
import { hourlySalesData } from '@/data';
function home() {
  //  placeholder component showing JSON string of last created Cookie Stand.
  // const [lastCookieStand, setLastCookieStand] = useState(null);
  const [cookieStands, setCookieStands] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const entry = {
      id: cookieStands.length + 1,
      location: form.get('location'),
      minCustomers: form.get('minCustomers'),
      maxCustomers: form.get('maxCustomers'),
      avgCookies: form.get('avgCookies'),
      hourly_sales: hourlySalesData,
    };
    setCookieStands([...cookieStands, entry]);
  }

  const numLocations = cookieStands.length;

  return (
    <div >
      <Head >
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <Form onSubmit={handleSubmit} />
        {/* <Placeholder lastCookieStand={lastCookieStand} /> */}
        <ReportTable reports={cookieStands} />
      </main>
      <Footer numLocations={numLocations} />
    </div>
  );
}





function Placeholder(props) {
  //  placeholder component showing JSON string of last created Cookie Stand.
  // i asked here chatgpt how to change the result to be as JSON format 
  return (
    <div className="bg-green-300 shadow-md rounded-lg p-4">
      <pre>{JSON.stringify(props.lastCookieStand, null, 2)}</pre>
    </div>
  );
}
export default home;