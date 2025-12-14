import CountryData from "./CountryData.jsx";
import Header from "./Header/Header.jsx";


import useWindowSize from "../CustomHooks/UseWindowSize.jsx";

function Home({ data, setData, allCountries, setAllCountries, theme, setTheme }) {
    const { width, height } = useWindowSize();
    return (
        <>

            <div className="size-container">{width} X {height}</div>
            <div className="countries-container">
                {data.map(country => (
                    <CountryData key={country.cca3} country={country} />
                ))}
            </div>
        </>
    );
}

export default Home;
