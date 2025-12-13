
import './App.css'
import {useEffect, useState} from "react";
import CountryData from "./components/CountryData.jsx";
import Header from "./components/Header/Header.jsx";
import CountrySkeleton from "./components/CountrySkeleton.jsx";
import {Atom} from "react-loading-indicators";



function App() {
    const [data,setData] = useState([])
    const [allCountries, setAllCountries] = useState([]);
    const [windowSize, setWindowSize] = useState({
        width:window.innerWidth,height:window.innerHeight
    });

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
        <>
            <Header props={{ data, setData, allCountries, setAllCountries, theme, setTheme }} />

            <div className="countries-container">
                {data.map(country => (
                    <CountryData key={country.cca3} country={country} />
                ))}
            </div>
        </>
    );

}

export default App
