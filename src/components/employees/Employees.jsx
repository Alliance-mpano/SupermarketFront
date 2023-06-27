import React, {useState} from "react";
import EmployeeList from "./EmployeeList"
import Header from "../common/Header";
import { Navigate, useNavigate } from "react-router";
import Add from "./Add";

const Employees = ()=> {
    const navigate = useNavigate();
    function navigateAdd() {
        navigate("/addEmployee")
    }
    const styles = {
        payments: {
            height: "98vh",
            width: "99%",
            margin: "0 auto",
            padding: " 0.8% 0.5%",
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
            backgroundColor: "rgba(11, 126, 209, 0.09)"

        },
        container: {
            backgroundColor: "#fff",
            padding: " 1%",
            borderRadius: "15px",
            width: "96%",
            margin: "auto"
        },
        nbr: {
            lineHeight: "4vh",
            fontSize: "0.8em",
            margin: "8px 15px 12px",
            display: "inline-block"
        },
        sideContent: {
            width: "25%",
            gap: "20px",
            display: "flex",
            flexDirection: "column",
            marginTop: "15px"
        },
        tableShuffle: {
            display: "flex",
            gap: "30px",
            height: "4vh",
            margin: "10px 0 -18px 50px"

        },
        shuffle: {
            fontSize: "12px",
            fontWeight: "bold"
        },
        searchBox: {
            border: "none",
            backgroundColor: "#e8e8e8",
            fontSize: "0.8em",
            fontWeight: "lighter",
            width: "22%",
            paddingLeft: "3em",
            borderRadius: "10px",
            height: "4vh",
            position: "relative",
            left: "150px"
        },
        submitBtn: {
            backgroundColor: "#0B7ED1",
            width:"20%",
            height: "4vh",
            border: "1px solid rgba(15, 85, 136, 0.76)",
            borderRadius: "5px",
            position: "absolute",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "600"
        }
    }

    return(
        <React.Fragment>
            <Header/>
            <div style={styles.payments}>
            
            <div style={styles.container}>
                <p style={{fontWeight: "bolder", fontSize: "1.4em", margin: "10px 15px"}}>Employees</p>
                <div style={{backgroundColor: "#f3f3f3", padding: "1%", borderRadius: "16px"}}>
                <div style={styles.tableShuffle}>
                    <button style={styles.submitBtn} onClick={navigateAdd}>Add Employee</button>                   
                </div>
                <EmployeeList/>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Employees;