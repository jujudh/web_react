import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; // Home 컴포넌트 파일 이름에 맞게 변경하세요.
import Contact from './Contact';
import Mypage from "./Mypage";
import Download from "./Download";
import StopQuiz from "./StopQuiz";
import QuizComponent from "./QuizComponent";

import PostView from "./page/PostView";
import PostMain from "./page/PostMain";
const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Mypage" component={Mypage} />
                <Route path="/Dowload" component={Download} />
                <Route path="/stop" component={StopQuiz} />
                <Route path="/quizgo" component={QuizComponent} />>
                <Route exact path='/postView/:no' component={PostView} />
                <Route exact path='/Postmain' component={PostMain} />
            </Switch>
        </Router>
    );
};

export default App;
