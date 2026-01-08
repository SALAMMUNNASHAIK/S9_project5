import { Link , useLocation } from "react-router-dom"
import "../components/styles.css"
import { useState } from "react"

function Home() {
     const location = useLocation();
     
          const [message, setMessage] = useState("");
    return (
        <>
            <div className="head">
                <Link to="/" state={{ course: message }}>Main</Link>
                <Link to="/home" state={{ course: message }}>Home</Link>
                <Link to="/about" state={{ course: message }}>About</Link>
                <Link to="/contact" state={{ course: message }}>Contact</Link>
                <br></br>
                <h1>This is home page</h1>
            </div>
             <p>I'm belongs to ---{location.state?.course}</p>
        </>
    )
}

export default Home