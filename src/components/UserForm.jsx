import {useState} from "react";
import '../App.css'


export default function UserForm(){

    const [initialValues, setInitialValues] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        country:""
    })

    const [formData,setFormData]=useState(initialValues)

    function handleChange(e){

        const{name,value}=e.target


        setFormData((prev)=>({
            ...prev,[name]:value
        }))
        console.log(formData)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        setFormData(initialValues)
    };



    return(

        <form className="user-form" onSubmit={handleSubmit}>
            <h2>User Form</h2>

            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <input name="phone" type="number" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            <input name="country" placeholder="Country" value={formData.country} onChange={handleChange} />

            <button>Submit</button>
        </form>


    )
}