import React, { useState, useEffect } from 'react';
import { useAuth } from "../contexts/auth";
import LoginForm from '@/components/LoginForm';
import Header from '@/components/Header';
import Form from '@/components/Form';
import Footer from '@/components/Footer';
import ReportTable from '@/components/Table';
import { hourlySalesData } from '@/data';

function Home() {
  const [cookieStands, setCookieStands] = useState([]);
  const { tokens, login, user } = useAuth();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (event) => {
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

  try {
    const response = await fetch(baseUrl + 'api/v1/cookiestands/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokens?.access}`,
      },
      body: JSON.stringify(entry),
    });

    // Check if the request was successful (status code 2xx)
    if (response.ok) {
      setCookieStands([...cookieStands, entry]);

      // Fetch the updated data after creating a new entry
      updateCookies();
    } else {
      console.error('Failed to create entry:', response);
    }
  } catch (error) {
    console.error('Error creating entry:', error);
  }
};


 

  const handleDelete = async (id) => {
    try {
      const response = await fetch(baseUrl + `api/v1/cookiestands/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokens?.access}`
        },
      });

      if (response.ok) {
        setCookieStands(cookieStands.filter((stand) => stand.id !== id));
        console.log(`Deleted ${id}`);
      } else {
        console.error('Failed to delete entry:', response.status);
      }
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  const numLocations = cookieStands.length;

  return (
    <div>
      {user ? (
        <>
          <Header />
          <main className="container mx-auto p-4">
            <Form onSubmit={handleSubmit} />
            <ReportTable reports={cookieStands} onDelete={handleDelete} />
          </main>
          <Footer numLocations={numLocations} />
        </>
      ) : (
        <LoginForm onLogin={login} />
      )}
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
export default Home;