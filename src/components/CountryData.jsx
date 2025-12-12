

function CountryData({country}) {

    return (
        <>
            <div className="country-card" key={country.cca3}>
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