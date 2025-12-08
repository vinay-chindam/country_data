

function CountryData({country}) {
    console.log(country);
    return (
        <>
            <div className="card" key={country.cca3}>
                <img src={country.flags.svg} className="flag" />

                <div>
                    <h1>{country.name.official}</h1>
                    <h1>{country.capital}</h1>
                    <h1>{country.region}</h1>
                    <h1>{country.subregion}</h1>
                    <h1>{country.area}</h1>
                    <h1>{country.population}</h1>


                </div>


            </div>
        </>
    )
}
export default CountryData;