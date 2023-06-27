import React from "react";
// import { icons } from "../../constants";
// import { ErrorBoundary } from "react-error-boundary";
// import ErrorFallback from "../../utils/ErrorBoundary";
import {NavLink} from "react-router-dom"
import './OneLink.styles.css'

const OneLink = ({ text, path}) => {
    console.log(path)
    const styles = {
        link:{
            width: "70%",
            margin: "0px auto",
            display: "flex",
            gap: "15px",
            color: "white",
            fontSize: "0.8em",
            fontWeight: "bold",
            height: "5vh",
            padding: "0px 10px",
            minWidth: "fit-content",
            textDecoration: "none"
        },
        linkText: {
            lineHeight: "5vh"
        },
        image: {
            margin: "auto 0",
        }
    }
    return(
        <NavLink to={path}  className={({isActive, isPending}) => {
            isActive ? "active": isPending ? "pending": ""
        }} style={styles.link} >
        {/* <img style={styles.image} src={icon}/>xxxx */}
        <span style={styles.linkText}>{text}</span>
        </NavLink>
        
    );
}

export default OneLink;