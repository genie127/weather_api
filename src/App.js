import { Route, Routes } from "react-router-dom"; 
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Forecast from "./pages/Forecast";
import SearchResult from "./pages/SearchResult";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/search/:cityname" element={<SearchResult/>}></Route>
        <Route path="/forecast" element={<Forecast/>}></Route>
        <Route path="/*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
