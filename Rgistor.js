import React, { useState } from 'react'
import '../App.css';




function Register() {
    const [formData,setFormData] = useState({
        name :"",
        age : "",
        email : "",
        password : "",
        dataSubmitted: false
    })
    const {name,age,email,password} = formData;
    const onChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email.includes('@')){
            return alert("Not a valid Email")
        }
        if(age<10){
            return alert("Add age more than 10")
        }
        
        console.log(formData);    
    }

    
    return (

        <div className="container">
        <b>
            <form onSubmit={handleSubmit}>
           <label>Name :   </label> <input className="input" type="text" name="name" value={name} onChange={onChange} required></input><br />
           <label>Age :   </label> <input className="input" type="number" name="age" value={age} onChange={onChange} required></input><br />
           <label>Email :   </label> <input className="input" type="text" name="email" value={email} onChange={onChange} required></input><br />
           <label>Passwword :   </label> <input className="input" type="password" name="password" value={password} onChange={onChange} required minLength='6'></input><br />
           <br />
            <button className="btn btn-dark" type="submit">Submit </button>
           </form>
        </b>
        </div>
    )
    }


export default Register
