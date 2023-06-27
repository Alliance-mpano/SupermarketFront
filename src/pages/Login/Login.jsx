import welcome from '../../assets/welcome.png';
import logo from '../../assets/LOGO.png'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import authService from '../../auth/authService';
import './Login.css'
const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        // username: "",
        // password: ""
    })

    const [err, setErr] = useState('')

    function handleChange(e) {
        e.preventDefault()

        setUser({...user, [e.target.name]: e.target.value})
    }
    function handleNavigate() {
        console.log(user)
        axios.post("http://localhost:4000/users/authenticate", user)
        .then((response) => {
            console.log(response)
            const token = response.data.token;
            console.log(token)
            navigate('/home')
            authService.storeAuthToken(token)
        })
        .catch(err => {
            console.log(err.response.data)
            setErr(err.response.data.error)
        })
    }

    function navigateRegister() {
        navigate('/register')   
    }
    const styles = {
        loginContainer: {
            backgroundColor: "#fff",
            width: "45%",
            height: "70vh",
            margin: "10px auto",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "10%"

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
            margin: "10px 0"
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
            <div style={styles.loginContainer} >
            <p style={{fontWeight: "700", fontSize: "21px", lineHeight: "4vh", marginBottom: "3vh   "}}>Welcome Back</p>  
            {err && <p className='error'>{err}</p>}
            <div style = {{ width: "70%"}}>
                <div className="row">
                <label style={styles.labels} htmlFor="username">Email</label>
                    <input type="email" style= {styles.inputs} name="username" id="username" placeholder='Email' value={user.username} onChange={handleChange}/>
                </div>
                    <div className="row">
                    <label style = {styles.labels } htmlFor="password">Password</label>
                    <input style= {styles.inputs} type="password" name="password" id="password" placeholder='Password' value={user.password} onChange={handleChange}/>
                    </div>
                    <input style={styles.submitBtn} type="submit" name="" id="" value="Sign In  " onClick={handleNavigate}/>
                    
                    
                    <p style={{fontWeight: "600", textAlign: "right", width: "80%", fontSize: "12px"}}>Do not have an account?<span style={{color: "#0B7ED1"}} onClick={navigateRegister}>Register</span></p>
                

               
                </div> 
        </div>
            {/* <div className="static">
                <img src={welcome} alt="Welcome image" />
                <div className="overlay"></div>
                <div className="text-holder">
                    <h1>Welcome Back</h1>
                    <p>Log in to access your account</p>
                </div>
            </div>               

            <div className="content">
                <img src={logo} alt="Logo" />
                {err && <p className='error'>{err}</p>}
                <div className="form">
                    <input type="email" name="email" id="" placeholder='Email' value={user.email} onChange={handleChange}/>
                    <input type="password" name="password" id="" placeholder='Password' value={user.password} onChange={handleChange}/>
                    <input type="submit" name="" id="" value="LOG IN " onClick={handleNavigate}/>
                </div>
                <div className="footer-text">
                    <p>OR</p>
                    <p>Do not have an account?<span onClick={navigateRegister}>Register</span></p>
                </div>
            </div> */}
        </div>
    )
}

export default Login;