import Navbar from '../components/navbar/navbar'
import  { Switch, Route, Routes } from "react-router-dom";
import Home from '../components/home/Home'
import Contact from '../components/contact/Contact'
import About from '../components/about/About'
import Profile from '../components/user/profile'
function Main() {
    return (
        <div>

            <Navbar></Navbar>
            <div className="content">

                <Routes>
                    <Route exact path="/" component={Home}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/about" component={About}/>

                    <Route path="/profile/:username" component={Profile}/>
                </Routes>
            </div>

        </div>
    )
}

export default Main;


