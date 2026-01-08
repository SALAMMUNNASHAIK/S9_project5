import { Link , useLocation } from "react-router-dom"
import "../components/styles.css"
import { useState } from "react"


function About() {
    const location = useLocation();
    
     const [message, setMessage] = useState("");
    return (
        <>
            <div className="head">
                <Link to="/"state={{ course: message }}>Main</Link>
                <Link to="/home" state={{ course: message }}>Home</Link>
                <Link to="/about"state={{ course: message }}>About</Link>
                <Link to="/Contact"state={{ course: message }}>Contact</Link>
                <br></br></div>
                <h1>This is the about page u know!!!!</h1> 
                <p>I'm belongs to ---{location.state?.course}</p>
           
        </>
    )
}

export default About