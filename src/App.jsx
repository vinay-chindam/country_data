
import './App.css'
import {useEffect, useState} from "react";
import CountryData from "./components/CountryData.jsx";
import Header from "./components/Header/Header.jsx";



function App() {
    const [data,setData] = useState([])
    const [allCountries, setAllCountries] = useState([]);
    const [windowSize, setWindowSize] = useState({
        width:window.innerWidth,height:window.innerHeight
    });



    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // run once on mount


    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,area,flags,languages,currencies,cca3');
                const data = await res.json();
                setData(data);
                setAllCountries(data);

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
        <>
            <Header props={{data,setData,allCountries,setAllCountries}}/>

            <div className="countries-container">
                {/*<div>Window width is {windowSize.width} X {windowSize.height}</div>*/}
                {data.map(country => (
                    <CountryData country={country}/>

                ))}
            </div>

        </>

    );

}

export default App
