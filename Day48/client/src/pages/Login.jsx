import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [formData,setFormData] = useState({email:"",password:"",})
    const navigate = useNavigate()


    const handleChange= (e)=>{

        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e)=>{


        e.preventDefault();

        try {


        const res = await axios.post("http://localhost:5000/api/user/login",formData)

        localStorage.setItem("jwttoken",res.data.token)
        alert(res.data.msg)

        setFormData({email:"",password:""})

        navigate("/dashboard")

        } catch (error) {
        alert(error.response.data.msg)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange}/>
            <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange}/>
            <input type="submit" value="Login" />
        </form>
        </>
    )
}

export default Login
