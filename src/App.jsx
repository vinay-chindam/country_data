
import './App.css'
import { Routes, Route } from "react-router-dom";
import {useEffect, useState} from "react";

import {Atom} from "react-loading-indicators";
import Home from "./components/Home.jsx";
import CountryDetail from "./components/CountryDetail.jsx";



function App() {
    const [data,setData] = useState([])
    const [allCountries, setAllCountries] = useState([]);


    const [loading, setLoading] = useState(true);

    const [theme, setTheme] = useState("light");
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);




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
                setLoading(false);

            } catch (err) {
                console.error(err);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return(
            <Atom color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />
            )

    }





    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Home
                        data={data}
                        setData={setData}
                        allCountries={allCountries}
                        setAllCountries={setAllCountries}
                        theme={theme}
                        setTheme={setTheme}
                    />
                }
            />

            <Route
                path="/country/:code"
                element={<CountryDetail allCountries={allCountries} />}
            />
        </Routes>
    );

}

export default App
