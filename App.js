import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; // Home 컴포넌트 파일 이름에 맞게 변경하세요.
import Contact from './Contact';
import Mypage from "./Mypage";
import Download from "./Download";
import axios from "axios";
import StopQuiz from "./StopQuiz";
const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Mypage" component={Mypage} />
                <Route path="/Download" component={Download} />
                <Route path="/stop" component={StopQuiz} />
            </Switch>
        </Router>
    );
};

export default App;
