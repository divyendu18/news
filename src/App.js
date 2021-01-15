import React from 'react';
import './App.css';
import NewStories from './components/newStories/NewStories';
import TopStories from './components/topStories/TopStories';
import BestStories from './components/bestStories/BestStories';
import AskStories from './components/askStories/AskStories';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { BackTop } from 'antd';


const App=() =>{    
    return (
        <Router>
        <div className="App">
            <Navbar/>
            <Switch>
                <Route exact path="/"><NewStories/></Route>
                <Route exact path="/topStories"><TopStories/></Route>
                <Route exact path="/bestStories"><BestStories/></Route>
                <Route exact path="/askStories"><AskStories/></Route>
            </Switch>
            <div className="foot">
                <BackTop>
                <div className="">
                    <img src='https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png' alt='Go to top'/>
                </div></BackTop>
                <footer>DJ { new Date().getFullYear() } </footer>
            </div>
            
        </div>
        </Router>
    )
}

export default App
