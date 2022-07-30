import SignIn from './Components/SignIn/SignIn';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';



export const App = () => (
  <Router>
      <Routes>
        {/* <Route exact path="/" element={<Home/>} /> */}
        <Route exact path="/login" element={<SignIn />} />
      </Routes>
  </Router>
);