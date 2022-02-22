import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {

    useEffect(() => { 
        document.getElementById("header").style.background = 'transparent';
        document.getElementById("search").style.display = 'none';

        const faders = document.querySelectorAll('.fade-in');
        console.log(faders);

        const appearOptions = { threshold: 0, rootMargin: '0px 0px -100px 0px' }; 

        const appearOnScroll = new IntersectionObserver (
            function(
                entries,
                appearOnScroll
            ) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) { return; }
                    else { 
                        entry.target.classList.add('appear') 
                        appearOnScroll.unobserve(entry.target);
                    }
                });
            },
        appearOptions);  

        faders.forEach(fader => { appearOnScroll.observe(fader); });

    }, []);
       
    return(
        <div id="home">
            <div id="home-intro">
                <div id="intro">
                    <h1 className='fade-in'>Welcome To My Ecommerce App</h1> 
                    <span>Post Items Effortlessly To Be Seen On The Webpage</span>
                </div>
                <Link to="/Account"><button id="about-btn">About Me</button></Link>
            </div>
            <div id="home-background"/>
            <div id='home-content'>
                <h1 className='fade-in'>The Right Furnatures Can <span>Enrich</span> Your Living Space</h1>
            </div>
        </div>
    )
}