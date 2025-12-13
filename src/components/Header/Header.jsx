
import {IoSearch} from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

export default function Header({
                                   data,
                                   setData,
                                   allCountries,
                                   setAllCountries,
                                   theme,
                                   setTheme
                               }){

    function  handleCountryChange(e){
        const text = e.target.value.toLowerCase();
        const filtered = allCountries.filter((item) =>
            item.name.common.toLowerCase().startsWith(text)
        );
        setData(filtered);

    }
    console.log(theme)



    return (

           <div className="header">
               <h1>Countries Data</h1>
               <div className="navbar">
                   <input className="input"
                       placeholder="enter country name"
                       onChange={handleCountryChange}
                   />

                   <IoSearch className="search-icon" />


                   {
                       theme === "dark" ? (<FaSun onClick={()=>setTheme('light')} />):
                           (<FaMoon onClick={()=>setTheme('dark')} />)
                   }



               </div>


           </div>

    )
}


