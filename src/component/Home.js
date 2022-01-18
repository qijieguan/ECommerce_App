import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <div className="Homepage">
            <div className='overlay'/>
            <span className="Home-Intro">Welcome! Lets start customizing your items and publish them!</span>
            <Link to="/Account"><div className="Home-About">About Me</div></Link>
        </div>
    )
}