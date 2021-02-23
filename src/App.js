import './App.css';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Contact_us from './components/Contact_us';
import Login from './components/Login';
import Navbar from './Layout/Navbar';
import UserLoginPage from './components/UserLoginPage';
import TableView from './components/TableView';
import DeshBord from './components/DeshBord';
import RegistrationForm from './components/components/RegistrationForm';
import ForgetPassword from './components/ForgetPassword';
// import SiteMap from './components/SiteMap';
// import RegisterPage from './components/RegisterPage';
// import Antd from './Antd'


function App() {
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
        <Route exact path='/userloginpage' component={UserLoginPage} />
        <Route exact path='/tableview' component={TableView} />
        <Route exact path='/deshbord' component={DeshBord} />
      </Switch>
    </div>
  );
}

export default App;
