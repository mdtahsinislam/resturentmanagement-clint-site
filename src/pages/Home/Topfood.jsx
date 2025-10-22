





import React, { useEffect, useState } from 'react';
import Topfoodcard from './Topfoodcard';
import { Link } from 'react-router';

const Topfood = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(' https://resturent-management-server-site.vercel.app/foodpurchasess')
            .then(res => res.json())
            .then(data => {
                console.log('Fetched food:', data);
                setFoods(data);
            });
    }, []);

    //  backgroundColor: '#ffffff',
    return (
        <div style={{
           
            padding: '80px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <h2  style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '48px',
              color: 'var(--b1)',
                marginBottom: '20px',
                fontWeight: 'bold'
            }}>
                Fresh Ingredient, Tasty Meals
            </h2>

            <img className='w-20' src="https://i.ibb.co.com/j93P6fQY/leaffff-removebg-preview.png" alt="" />

            <p className='text-base-content' style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '16px',
                color: 'var(--b1)',
                maxWidth: '700px',
                lineHeight: '1.6',
                
            }}>
                Everyone has taste, even if they don't realize it...
            </p>

            <h1 style={{
                fontFamily: '"My Soul", cursive',
                fontWeight: 'bold',
                fontStyle: 'normal',
                fontSize: '62px',
                color: '#b89d6e',
                marginTop: '40px'
            }}> 
                Taste the best Top Food
            </h1>

            {/* Display all cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    foods.map((food, index) => (
                        <Topfoodcard key={index} food={food}></Topfoodcard>
                    ))
                }

            </div>
           <Link to="/allfoods"><h1 className="btn btn-wide mt-5 text-black text-2xl btn-accent">See All</h1></Link>
             
        </div>
    );
};

export default Topfood;
