import './css/Header.css'
import { Link } from "react-router-dom";
import { Container } from "../styles/styledComponents";

const Header =()=>{
    return(
        <div className="Header">
            <header>
                <Container>
                <h1 className="logo"><Link to="/">Where Weather</Link></h1>
                <nav>
                    <ul className="gnb">
                        <li><Link to="/">지역별 날씨</Link></li>
                        
                    </ul>
                </nav>
                </Container>
            </header>
        </div>
    )
}

export default Header;