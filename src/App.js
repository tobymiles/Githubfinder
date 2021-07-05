import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Layouts/Layouts/Navbar';
import User from './Components/Layouts/Users/User';
import Alert from './Components/Layouts/Layouts/Alert';
import Home from './Components/Layouts/Pages/Home';
import AboutUs from './Components/Layouts/Pages/AboutUs';
import NotFound from './Components/Layouts/Pages/NotFound';




import GithubState from './Components/Layouts/Context/Github/GithubState';
import AlertState from './Components/Layouts/Context/Alert/AlertState';
import './App.css';

const App = () => {
  // Using a lifecycle method to get our api


//   async componentDidMount(){
// // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET); test the .env.local

//     this.setState({loading: true});
//     const res = await axios.get(`https://api.github.com/users?client_id=${
//       process.env.REACT_APP_GITHUB_CLIENT_ID
//     }&clent_secret=${
//       process.env.REACT_APP_GITHUB_CLIENT_SECRET
//     }`)

//     this.setState({users:res.data, loading: false})
   
    
//     // console.log(res.data);
//   }




  return (
 <GithubState>
 <AlertState>
    <Router>
    <div className='App'>
          <Navbar/>
       <div className='container'>
          <Alert/>

<Switch>
<Route exact path='/' component={Home}/>
<Route exact path='/about' component={AboutUs} />
<Route exact path='/user/:login' component={User} />
<Route component={NotFound}/>
</Switch>
       </div> 
    </div>
</Router>
 </AlertState>
</GithubState>
  );   
  
};

export default App;
