import CountryData from "./CountryData.jsx";
import Header from "./Header/Header.jsx";

function Home({ data, setData, allCountries, setAllCountries, theme, setTheme }) {
    return (
        <>
            <Header
                data={data}
                setData={setData}
                allCountries={allCountries}
                setAllCountries={setAllCountries}
                theme={theme}
                setTheme={setTheme}
            />

            <div className="countries-container">
                {data.map(country => (
                    <CountryData key={country.cca3} country={country} />
                ))}
            </div>
        </>
    );
}

export default Home;
