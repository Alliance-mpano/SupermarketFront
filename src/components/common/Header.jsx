import React from "react";

const styles = {
    header: {
        width: "100%",
        margin: "0",
        height: "8vh",
        backgroundColor: "#fff",
        boxShadow: "5px 0px 8px rgba(0, 0, 0, 0.25)",
        marginLeft: "0.2%",
        textAlign: "center",
        lineHeight: "8vh"
    }
}
const Header = () => {
    return <div style={styles.header}><h2 style={{color: "#407BFF"}}>Binary Supermarket Ecommerce Platform</h2></div>
}

export default Header;