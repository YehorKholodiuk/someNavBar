import Navbar from '../components/navbar/navbar'
import  { HashRouter, Switch, Route, Routes } from "react-router-dom";
import Home from '../components/home/Home'
import Contact from '../components/contact/Contact'
import About from '../components/about/About'
import Profile from '../components/user/profile'
function Main() {
    return (
        <div>
            <HashRouter>
                <Navbar></Navbar>
                <div className="content">

                    <Routes>
                        <Route exact path="/Home" component={Home}/>
                        <Route path="/Contact" component={Contact}/>
                        <Route path="/About" component={About}/>

                        <Route path="/profile/:username" component={Profile}/>
                    </Routes>
                </div>
            </HashRouter>
        </div>
    )
}

export default Main;
