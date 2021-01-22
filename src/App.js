import React from 'react';
import './App.css';
import NewStories from './components/newStories/NewStories';
import TopStories from './components/topStories/TopStories';
import BestStories from './components/bestStories/BestStories';
import AskStories from './components/askStories/AskStories';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { BackTop } from 'antd';
import Footer from './components/footer/Footer';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DateTime from './components/date';

const App=() =>{    
    return (
        <Router>
        <div className="App">
            <div className="landing_page">
            <Navbar/>
            <div className="centered_title">
            <h1>prime<span className="tag">Time.</span></h1>
            <h5><DateTime/></h5>
            </div>
            </div>
           <Switch>
                <Route exact path="/"><NewStories/></Route>
                <Route exact path="/topStories"><TopStories/></Route>
                <Route exact path="/bestStories"><BestStories/></Route>
                <Route exact path="/askStories"><AskStories/></Route>
            </Switch>
            <div className="foot">
                <BackTop>
                <div className="backicon">
                    <ExpandLessIcon/>
                </div></BackTop>
            </div>
            <Footer/>
            
        </div>
        </Router>

    )
}

export default App
