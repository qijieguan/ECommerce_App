import './styles/home.css';
import { Link } from 'react-router-dom';


export default function Home() {
    return(
        <div className="home">
            <div className="home-intro">
                <div className="intro-text">
                    <h1 className='fade-slide right'> Save Big Now</h1> 
                    <h2 className='fade-slide up'>Buy a variety of high quality furnitures to furnish your home</h2>
                </div>
                <Link to="/About"><button className="about-btn">About Me</button></Link>
            </div>
            <div className="home-background"/>
            <div className='home-slide flex'>
                <h1 className='fade-slide right'>
                    Buy Your <span>Dream</span> Furnitures to 
                    <span> Furnish</span> Your Living Space 
                </h1>
            </div>
            <div className="about-content grid">
                <div className="about-title"><h1 className="fade-slide">More About Us</h1></div>
                <div className="left-wrapper">
                    <div className='fade-slide from-left flex'>
                        <h1>Power of Furnitures</h1>
                        <span>
                            Your living space can influence your <span> emotion</span> and 
                            <span> mind</span> on a daily basis. Furnish your home to fulfill your 
                            <span> inner satisfaction</span>. Achieve your <span>ideal home </span> 
                            and give yourself a sense of <span>peace</span>.
                        </span>
                    </div>
                </div>
                <div className="right-wrapper flex"><div className='from-right-1'/></div>
                <div className="left-wrapper">
                    <div className='fade-slide from-left flex'>
                        <h1>Become a Client Today</h1>
                        <span>
                            We offer a large variety of furnitures <span> in-store and online</span>. 
                            Most of our furnitures are imported <span> from foreign companies</span>.
                            What you can find are furnitures with <span>special architectures </span>. 
                            We also have other products in-store.
                        </span>
                    </div>
                </div>
                <div className="right-wrapper flex"><div className='from-right-2'/></div>
                <div className="left-wrapper">
                    <div className='fade-slide from-left flex'>
                        <h1>Follow Us</h1>
                        <span>
                            Follow us on our social media. Enjoy <span> special deals and promotions </span>
                            valid for early buyers. Keep up with posts demoing<span> sample views </span> 
                            of home designs with our in-store furnitures.
                        </span>
                    </div>
                </div>
                <div className="right-wrapper flex"><div className='from-right-3'/></div>
            </div>
        </div>
    )
}