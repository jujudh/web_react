import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; // Home 컴포넌트 파일 이름에 맞게 변경하세요.
import Contact from './Contact';
import Mypage from "./Mypage"; // Contact 컴포넌트 파일 이름에 맞게 변경하세요.

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Mypage" component={Mypage} />
            </Switch>
        </Router>
    );
};

export default App;
