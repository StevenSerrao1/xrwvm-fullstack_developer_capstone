import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Dealers from './components/Dealers/Dealers';
<<<<<<< HEAD
import Dealer from "./components/Dealers/Dealer";
import PostReview from "./components/Dealers/PostReview";
=======
>>>>>>> 23971e115ca3bcc3e7f544139726be1701b74e01

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dealers" element={<Dealers/>} />
<<<<<<< HEAD
      <Route path="/dealer/:id" element={<Dealer/>} />
      <Route path="/postreview/:id" element={<PostReview/>} />
      
=======
>>>>>>> 23971e115ca3bcc3e7f544139726be1701b74e01
    </Routes>
  );
}
export default App;
