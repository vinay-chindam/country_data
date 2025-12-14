import {useNavigate} from "react-router-dom";
import '../App.css'


function CountryData({country}) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/country/${country.cca3}`);
    }

    return (
        <>
            <div className="country-card" key={country.cca3} onClick={handleClick}>
                <img src={country.flags.svg} className="flag" />

                <div className='country-details'>
                    <h5>Name:{country.name.official}</h5>
                    <h5>Capital{country.capital}</h5>
                    <h5>Region:{country.region}</h5>
                    <h5>Subregion:{country.subregion}</h5>
                    <h5>Area:{country.area}</h5>
                    <h5>Population:{country.population}</h5>


                </div>


            </div>
        </>
    )
}
export default CountryData;