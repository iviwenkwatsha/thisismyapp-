
import './App.css';
import {Routes, Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Toaster} from "react-hot-toast";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

// <Route path ='/' element = {<ProtectedRoute><Home /></ProtectedRoute>} />
//<Route path ='/' element = {<Home/>} />

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false}/>
    <Routes> 
      <Route path ='/login' element = {<PublicRoute><Login/></PublicRoute>} />
      <Route path ='/register' element = {<PublicRoute><Register/></PublicRoute>} />
      <Route path ='/' element = {<ProtectedRoute><Home /></ProtectedRoute>} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;


