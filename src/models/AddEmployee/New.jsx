import React, { useState } from 'react';

import './AddVehicle.css'
import axios from 'axios';
import { useNavigate } from 'react-router';
import authService from '../../auth/authService';
import Joi from 'joi'
const New = () => {
    const [err, setErr] = useState('');
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    NID: '',
    phone: '',
    email: '',
    department: '',
    position: '',
    manufacturer: '',
    model: '',
    serialNumber: '',
  });
//   const schema = Joi.object({
//     id: Joi.string().min(1).max(50).required(),
//     firstName: Joi.string().min(5).max(50).required(),
//     lastName: Joi.string().min(3).max(110).required(),
//     NID: Joi.number().required(),
//     phone: Joi.string().required(),
//     email: Joi.string().email().required(),
//     department: Joi.string().required(),
//     position: Joi.string().min(1).required(),
//     manufacturer: Joi.string().min(1).required(),
//     model: Joi.string().min(1).required(),
//     serialNumber: Joi.string().min(1).required(),
//   });
  const navigate = useNavigate()
  const styles = {
            inputs: {
                display: "block",
                border: "1px solid rgba(0, 0, 0, 0.03)",
                backgroundColor: "rgba(241, 241, 241, 0.51)",
                boxShadow: "0px 0.4px 1px rgba(0, 0, 0, 0.25)",
                borderRadius: "4px",
                width: "80%",
                minHeight: "4vh",
                margin: "2px 0",
                padding: "10px"
            },
            registerCont: {
                backgroundColor: "#fff",
                width: "50%",
                height: "70vh",
                margin: "10px auto",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "10%"
            },
            container: {
                backgroundColor: "rgba(11, 126, 209, 0.09)",
                height: "100vh"
            },
            form: {
                paddingTop: "2%",
                width: "45%",
                backgroundColor: "white",
                margin: "auto",
                borderRadius: "16px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }
        }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Here")
        // const { error } = schema.validate(formData, { abortEarly: false });
        // if(error){
        //     const validationErrors = {};
        //     error.details.forEach((detail) => {
        //         validationErrors[detail.path[0]] = detail.message;
        //     });
        //     setErr(validationErrors);
        // }else{
            axios.post('http://localhost:4000/employees/create', formData, {
                headers: {
                    token: `Bearer ${authService.getAuthToken()}`
                }
            })
            .then((response) => {
                console.log(response)
                if(response.status == 200){
                    window.alert("Employee Addedd Successfully")
                    navigate("/home")
                }
            })
            .catch((error) => {
                console.log(error)
                setErr(error.response.data.error)
            })
        // }
        
  };

  return (
    <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Add New Employee</h2>
                {err && <p className='error'>{err}</p>}
      <input
      required
       style={styles.inputs}
        type="text"
        name="id"
        placeholder="ID"
        value={formData.id}
        onChange={handleChange}
      />
      <br />
      <input
      required
       style={styles.inputs}
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <br />
      <input
      required
       style={styles.inputs}
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <br />
      <input
      required
       style={styles.inputs}
        type="number"
        name="NID"
        placeholder="NID"
        value={formData.NID}
        onChange={handleChange}
      />
      <br />
      <input
      required
       style={styles.inputs}
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <br />
      <input
      required
       style={styles.inputs}
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <input
      required style={styles.inputs}
        type="text"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
      />
      <br />
      <input
      required
       style={styles.inputs}
        type="text"
        name="position"
        placeholder="Position"
        value={formData.position}
        onChange={handleChange}
      />
      <br />
      <input
      required
       style={styles.inputs}
        type="text"
        name="manufacturer"
        placeholder="Manufacturer"
        value={formData.manufacturer}
        onChange={handleChange}
      />
      <br />
      <input
      required
       style={styles.inputs}
        type="text"
        name="model"
        placeholder="Model"
        value={formData.model}
        onChange={handleChange}
      />
      <br />
      <input
      required
       style={styles.inputs}
        type="text"
        name="serialNumber"
        placeholder="Serial Number"
        value={formData.serialNumber}
        onChange={handleChange}
      />
      <br />
      <div style={{width: "100%"}}><button style={{width:"30%", padding: '10px 30px'}}>Cancel</button>
      <button type="submit" style={{width:"30%", marginLeft: "2%", padding: '10px 30px'}}>Submit</button></div>
    </form>
    </div>
  );
};

export default New;
