import './App.css';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Pages/Home';
import Contact_us from './components/Pages/Contact_us';
import Login from './components/Pages/Login';
import Navbar from './Layout/Navbar';
import SidebarPage from './components/Pages/SidebarPage';
import TableView from './components/Pages/TableView';
import DeshBord from './components/Pages/DeshBord';
import RegistrationForm from './components/Formik/RegistrationForm';
import ForgetPassword from './components/Pages/ForgetPassword';
import loginApi from './Redux/Action/LoginAction';
import LogOutPage from './components/Pages/LogOutPage';
// import SiteMap from './components/SiteMap';
// import RegisterPage from './components/RegisterPage';
// import Antd from './Antd'


function App() {
  // loginApi()
  return (
    <div className="App">
      {/* <Antd /> */}
      {/* <LoginPage/> */}
      {/* <SiteMap /> */}
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact_us} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/registrationForm' component={RegistrationForm} />
        <Route exact path='/forgetpassword' component={ForgetPassword} />
        <Route exact path='/userloginpage' component={SidebarPage} />
        <Route exact path='/tableview' component={TableView} />
        <Route exact path='/deshbord' component={DeshBord} />
        <Route exact path='/logoutpage' component={LogOutPage} />
      </Switch>
    </div>
  );
}

export default App;

// import React from 'react'

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isAuthenticated: false,
//       resData: ''
//     }
//   }
//   componentDidMount() {
//     const payload = {
//       email: "eve.holt@reqres.in",
//       password: "cityslicka"
//     }
//     fetch('https://reqres.in/api/login', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify(payload)
//     }).then(res => res.json())
//       .then((data) => {
//         console.log(data)
//         this.setState({ resData: data.token, isAuthenticated: true })
//       },
//         (error) => {
//           console.log(error)
//           this.setState({
//             isAuthenticated: false,
//             resData: 'No Data Found From Server'
//           })
//         })
//   }
//   render() {
//     if (this.state.isAuthenticated) {
//       return (
//         <div>
//           <h1>Request return {this.state.resData}</h1>


//         </div>
//       )
//     }
//     else {
//       return (<p>No Data Found</p>)
//     }
//   }
// }

// export default App

