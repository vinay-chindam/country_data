import {useNavigate} from "react-router-dom";


function CountryData({country}) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/country/${country.cca3}`);
    }

    return (
        <>
            <div className="country-card" key={country.cca3} onClick={handleClick}>
                <img src={country.flags.svg} className="flag" />

                <div>
                    <h5>{country.name.official}</h5>
                    <h5>{country.capital}</h5>
                    <h5>{country.region}</h5>
                    <h5>{country.subregion}</h5>
                    <h5>{country.area}</h5>
                    <h5>{country.population}</h5>


                </div>


            </div>
        </>
    )
}
export default CountryData;