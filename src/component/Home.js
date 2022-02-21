import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {

    useEffect(() => { 
        document.getElementById("header").style.background = 'transparent';
        document.getElementById("search").style.display = 'none';
    }, []);

    return(
        <div id="home">
            <div id="home-intro">
                <h1 id="intro">
                    <h1>Welcome To My Ecommerce App</h1> 
                    <span>Post Items Effortlessly To Be Seen On The Webpage</span>
                </h1>
                <Link to="/Account"><button id="about-btn">About Me</button></Link>
            </div>
            <div id="home-background"/>
            <div id='home-content'>
                <h1>The Right Furnatures Can <span>Enrich</span> Your Living Space</h1>
            </div>
        </div>
    )
}