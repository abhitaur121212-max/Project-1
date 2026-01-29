import { useEffect, useState } from 'react';
import Login from './pages/Login.jsx';
import Registration from './pages/Registration.jsx';
import Landing from './pages/Landing.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ApiDemo from './pages/ApiDemo.jsx';


function App() {
  const [page, setPage] = useState("landing");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  //session restore on Refresh 
  useEffect(() => {
    const user=JSON.parse(localStorage.getItem("user"));
    if(user && user.isLoggedIn){
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {page === "landing" && <Landing onNavigate= {setPage} />}
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "ApiDemo" && <ApiDemo />}
      {page === "dashboard" && <Dashboard/>}
      {page === "contact" && <Contact />}
      {page === "register" && <Registration onRegisterSuccesful={() => 
        setPage("login")} />} 

      {page === "login" && <Login onLogin={() => {
        setIsLoggedIn(true);
        setPage("dashboard");
      }} />}

      // Protected Route for Dashboard
      {page === "dashboard" && ( 
        isLoggedIn ? (<Dashboard onLogout={() => {
        setIsLoggedIn(false);
        localStorage.removeItem("user");
        setPage("landing");
      }}
      />
      ) : (
      <Login onLogin={() => {
        setIsLoggedIn(true);
        setPage("dashboard");
      }} 
      />
      )
      )}
      <button onClick={() => setPage("ApiDemo")}>API Demo</button>
    </div>    
    );
  }
export default App;