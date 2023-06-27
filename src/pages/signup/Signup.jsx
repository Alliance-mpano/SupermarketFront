import welcome from '../../assets/welcome.png';
import logo from '../../assets/LOGO.png'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import authService from '../../auth/authService';
import './Login.css'
const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: "",
        phone: "",
        name: ""
    })

    const [err, setErr] = useState('')

    function handleChange(e) {
        e.preventDefault()

        setUser({...user, [e.target.name]: e.target.value})
    }
    function handleNavigate() {
        console.log(user)
        // axios.post("http://localhost:4000/users/authenticate", user)
        // .then((response) => {
        //     console.log(response)
        //     const token = response.data.token;
        //     console.log(token)
        //     navigate('/home')
        //     authService.storeAuthToken(token)
        // })
        // .catch(err => {
        //     console.log(err.response.data)
        //     setErr(err.response.data.error)
        // })
    }

    function navigateRegister() {
        navigate('/login')   
    }
    const styles = {
        signupContainer: {
            backgroundColor: "#fff",
            width: "45%",
            height: "70vh",
            margin: "10px auto",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "3%"

        },
        labels: {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "15px",
            lineHeight: "16px",
            diplay: "block",
            width: "100%"
        },
        inputs: {
            display: "block",
            border: "1px solid rgba(0, 0, 0, 0.03)",
            backgroundColor: "rgba(241, 241, 241, 0.51)",
            boxShadow: "0px 0.4px 1px rgba(0, 0, 0, 0.25)",
            borderRadius: "4px",
            width: "80%",
            height: "4vh",
            margin: "10px 0",
            color: "black"
        },
        submitBtn: {
            backgroundColor: "#0B7ED1",
            width:"80%",
            height: "4vh",
            border: "1px solid rgba(15, 85, 136, 0.76)",
            borderRadius: "5px",
        }
    }
    return (
        <div style={{backgroundColor: "rgba(11, 126, 209, 0.09)", width: "100%", height: "100vh"}}>
            <div style={styles.signupContainer} >
            <p style={{fontWeight: "700", fontSize: "21px", lineHeight: "4vh", marginBottom: "3vh   "}}>Join Us</p>  
            {err && <p className='error'>{err}</p>}
            <div style = {{ width: "70%"}}>
            <div className="row">
                <label style={styles.labels} htmlFor="name">Name</label>
                    <input type="email" style= {styles.inputs} name="name" id="name" placeholder='Name' value={user.name} onChange={handleChange}/>
                
                <div className="row">
                <label style={styles.labels} htmlFor="username">Email</label>
                    <input type="email" style= {styles.inputs} name="username" id="username" placeholder='Email' value={user.username} onChange={handleChange}/>
                </div>
                </div>
                    <div className="row">
                    <label style = {styles.labels } htmlFor="phone">Phone</label>
                    <input style= {styles.inputs} type="phone" name="phone" id="phone" placeholder='Phone' value={user.phone} onChange={handleChange}/>
                </div>
                    <div className="row">
                    <label style = {styles.labels } htmlFor="password">Password</label>
                    <input style= {styles.inputs} type="password" name="password" id="password" placeholder='Password' value={user.password} onChange={handleChange}/>
                    </div>
                    <input style={styles.submitBtn} type="submit" name="" id="" value="Sign In  " onClick={handleNavigate}/>
                    
                    
                    <p style={{fontWeight: "600", textAlign: "right", width: "80%", fontSize: "12px"}}>Already have an account?<span style={{color: "#0B7ED1"}} onClick={navigateRegister}>Login</span></p>
                

               
                </div> 
        </div>
            
        </div>
    )
}

export default Signup;