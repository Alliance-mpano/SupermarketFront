import React from "react"
// import { icons } from "../../constants"
// import { ErrorBoundary } from "react-error-boundary"

// import ErrorFallback from "../../utils/ErrorBoundary";
import OneLink from "./OneLink";
const SideNav = () => {

    const styles = {        
        sidebar: {
            width: "20%",
            height: "100vh",
            overflowY: "auto",
            position: "fixed",
            top: 0,
            left: 0,
        },
        
        sidebarHeader:{
            display: "flex",
            flexDirection: "column",
            height: "22vh",
            backgroundColor: "#fff",
            justifyContent: "space-around",
            alignItems: "center",

            gap: "5px"
        },
        profile: {
            width: "35%",
        },
        linkContainer: {
            backgroundColor: "#356EFF",
            width: "88%",
            margin: "0px auto",
            height: "70vh",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10vh 0px"
        }
    }
    const linkData = [
        {
            text: "My Cart",
            path: '/app'
        },
        {
            // icon: icons.users,
            text: "Products",
            path: "/app/products"
        },
        {
            // icon: icons.notification,
            text: "Orders",
            path: "notifications"
        },
        {
            // icon: icons.profileIcon,
            text: "Profile"
        },
        {
            // icon: icons.logout,
            text: "Logout"
        }
    ]
    const links = linkData.map((link,index) => {
        return <OneLink key={index}  text={link.text} path={link.path} />
    })
    return (
        // <ErrorBoundary FallbackComponent={ErrorFallback}>
        <section style={ styles.sidebar} >
                <div style={styles.sidebarHeader}>
                    {/* <img src={icons.profile} style={styles.profile} alt="Admin profile picture"/> */}
                    <p>User</p>
                </div>
                <div className="linkContainer" style={styles.linkContainer}>
                    {links}
                </div>
            
        </section>
        // </ErrorBoundary>
    )
}

export default SideNav;