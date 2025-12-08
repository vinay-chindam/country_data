
import './App.css'
import {useEffect, useState} from "react";
import CountryData from "./components/CountryData.jsx";



function App() {
    const [data,setData] = useState([])

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,area,flags,languages,currencies,cca3');
                const data = await res.json();
                setData(data);
                console.log(data)
            } catch (err) {
                console.error(err);
            }
        };

        loadData();
    }, []);



    if(data.length===0){
        return(
           <h1>Hello</h1>
        )



    }

    return (
        <div className="countries-container">
            {data.map(country => (
                <CountryData country={country}/>

            ))}
        </div>
    );

}

export default App
