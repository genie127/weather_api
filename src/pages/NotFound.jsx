import { Typography } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "../styles/styledComponents";

const NotFound =()=>{
    return(
        <div className="NotFound">
            <Header/>
            <main>
                <Container>
                    <Typography sx={{color:'#fff'}}>Error: 404 Not Found</Typography>
                </Container>
            </main>
            <Footer/>
        </div>
    )
}

export default NotFound;