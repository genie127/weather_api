import './styles/common.css'
import { Route, Routes } from "react-router-dom"; 
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import SearchResult from "./pages/SearchResult";
import Detail from './pages/Detail';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/search" element={<SearchResult/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
        <Route path="/*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
