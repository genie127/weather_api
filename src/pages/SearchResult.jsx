import Footer from "../components/Footer";
import Header from "../components/Header";
import Today from "../components/Today";

const SearchResult =()=>{
    return(
        <div className="Main">
            <Header/>
            <main>
                <Today/>
            </main>
            <Footer/>
        </div>
    )
}

export default SearchResult;