import { Link } from "react-router-dom";

const Header =()=>{
    return(
        <div className="Header">
            <header>
                <h1 className="logo">날씨</h1>
                <nav>
                    <ul className="gnb">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/forecast">Forecast</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;