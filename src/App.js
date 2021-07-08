
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col}  from "react-bootstrap";
import './App.css';
import TopNav from "./components/Navbar.js"
import TopCarousel from "./components/TopCarousel"
import Contacts from "./components/Contacts";
import Services from "./components/Services";
import AppDevelopment from "./components/AppDevelopment"
import SocialMedia from "./components/SocialMedia"
import Seo from "./components/Seo"
import Footer from "./components/Footer"
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from "./components/TermsOfService"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="container-background">
      <Router>
      <Switch>
      < Route path="/" exact component ={TopCarousel}/>
      <Route path="/termsofservice" component={TermsOfService} />
      <Route path="/privacypolicy" component={PrivacyPolicy} />
      </Switch>
      </Router>
    </div>
    
  );
}

export default App;
