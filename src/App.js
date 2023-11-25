import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Main/Home';
import Mypage from './components/Mypage';
import ExamOptionList from './components/ExamOptionList';
import Download from './components/Download';
import DownloadButton from "./components/DownloadButton";
import QuizComponent from "./components/QuizComponent";
import StopQuiz from "./components/StopQuiz";
import PostMain from "./post/PostMain";
import PostView from "./post/PostView";
import PostWriter from "./post/PostWriter";
import Header from "./Main/Header";
import Commentlist from "./Main/Commentlist";
import Signin from "./Main/Signin";
import Signup from "./Main/Signup";



const App = () => {
    return (
        <>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/mypage" component={Mypage} />
                    <Route path='/examoptionList' component={ExamOptionList} />
                    <Route path="/download" component={Download} />
                    <Route path="/downloadButton" component={DownloadButton} />
                    <Route path="/quiz" component={QuizComponent} />
                    <Route path="/stop" component={StopQuiz} />
                    <Route exact path='/postView/:no' component={PostView} />
                    <Route path='/Postmain' component={PostMain} />
                    <Route path="/PostWriter" component={PostWriter} />
                    <Route path="/comment" component={Commentlist} />
                    <Route path="/login" component={Signin} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </Router>
        </>

    );
};
export default App;