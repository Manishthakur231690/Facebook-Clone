import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/home";
import './components/style.css';
import Header from "./components/header";
import SideBar from "./components/sideBar";
import Friends from "./components/Friends";
import Videos from "./components/Videos";
import Pages from "./components/Pages";
import MyProfile from "./components/MyProfile";
import Messanger from "./components/Messanger";

function App() {
  return (
    <>
      <Router>
        <Header/>
      <div id='home_con'>
        <SideBar/>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/friends" element={<Friends/>}/>
          <Route  path="/videos" element={<Videos/>}/>
          <Route  path="/pages" element={<Pages/>}/>
          <Route  path="/Myprofile" element={<MyProfile/>}/>
          <Route  path="/Messanger" element={<Messanger/>}/>

        </Routes>

      </div>
      </Router>
    </>
  );
}

export default App;
