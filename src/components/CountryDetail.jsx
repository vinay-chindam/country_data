import { useParams } from "react-router-dom";

function CountryDetail({ allCountries }) {
    const { code } = useParams();

    if (!allCountries || allCountries.length === 0) {
        return <p>Loading...</p>;
    }

    const country = allCountries.find(c => c.cca3 === code);

    if (!country) {
        return <p>Country not found</p>;
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <img src={country.flags.svg} width="200" />
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
        </div>
    );
}

export default CountryDetail;
