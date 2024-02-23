import React,{useEffect, useState} from 'react';
import './App.css';
import Card from './Card';


function App() {
  const [data,setData]=useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://restcountries.com/v3.1/all");
        let data = await response.json();
        setData(data);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    fetchData();
  }, []);
  return (
  <div  className='container'>
    {data.map((country)=>(
      <Card key={country.cca3} imageUrl={country.flags.png} name={country.name.common} />
    ))}
  </div>
  );
}

export default App;
