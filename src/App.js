import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import EditProfile from './Components/EditProfile';
import Header from './Components/Header';
import ViewProfile from './Components/ViewProfile';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Post from './Pages/Post';
import Profile from './Pages/Profile';

function App() {
  const [login, setLogin] = useState(false);
  // const navigate = useNavigate();
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <button onClick={() => setLogin(!login)}>{login ? "Log out" : "Log in"}</button>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='profile' element = {login? <Profile/> : <Navigate to='/'/>}>
              <Route path='viewprofile' element={<ViewProfile/>}/>
              <Route path='editprofile' element={<EditProfile/>}/>
            </Route>
            <Route exact path='post/:id' element={<Post />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
