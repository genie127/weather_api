import './css/Header.css'
import { Link } from "react-router-dom";
import { Container } from "../styles/styledComponents";

const Header =()=>{
    return(
        <div className="Header">
            <header>
                <Container>
                <h1 className="logo"><Link to="/">날씨</Link></h1>
                <nav>
                    <ul className="gnb">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/forecast">Forecast</Link></li>
                    </ul>
                </nav>
                </Container>
            </header>
        </div>
    )
}

export default Header;