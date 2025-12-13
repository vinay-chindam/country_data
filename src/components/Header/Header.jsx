
import {IoSearch} from "react-icons/io5";

export default function Header({props}){
    const {data,setData,allCountries,setAllCountries}=props

    function  handleCountryChange(e){
        const text = e.target.value.toLowerCase();
        const filtered = allCountries.filter((item) =>
            item.name.common.toLowerCase().startsWith(text)
        );
        setData(filtered);

    }



    return (

           <div className="header">
               <h1>Countries Data</h1>
               <div className="navbar">
                   <input className="input"
                       placeholder="enter country name"
                       onChange={handleCountryChange}
                   />

                   <IoSearch className="search-icon" />
               </div>


           </div>

    )
}


