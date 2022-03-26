import logo from './logo.svg';
import './App.css';
import Home from './compontents/Home/Home';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './compontents/login/Login';
import Resister from './compontents/Resister/Resister';
import AuthProvider from './AuthContext/AuthProvider';
import Private from './compontents/private/Private';
import Navigation from './compontents/Appbar/Navigation';
import PrivateRoute from './compontents/PrivateRoute/PrivateRoute';
import Products from './Products/Products';
import SingleProductsPage from './compontents/SingleProductsPage/SingleProductsPage';
import Dashboard from "../src/compontents/dashboard/DashBoard"
import Orders from './compontents/dashboard/Orders';
import NewProducts from './compontents/dashboard/NewProducts';
import MakeAdmin from './compontents/dashboard/MakeAdmin';
import ShoppingCartPage from './compontents/dashboard/ShoppingCartPage';
import AddressForrm from './compontents/AddressFrom/AddressForrm';
import MyClasses from './compontents/Myclasses/MyClasses';
import Profile from './compontents/NastedRoutes/Profile/Profile';
import QuizExam from './compontents/QuizExam/QuixExam';
import AddTeachers from './compontents/AddTeachers/AddTeachers';
import AddStudent from './compontents/AddStuent/AddStudent';
import AddLessons from './compontents/AddLessons/AddLessons';
import ExamQuiz from './compontents/ExanQuiz/ExamQuiz';
import AddLEQ from './compontents/AddLEQ/AddLEQ';
import PrivateAddLEQ from './SpecialPrivateRoutes/PrivateAddLEQ';
import PrivateRouteAdmin from './SpecialPrivateRoutes/PrivateRouteAdmin';
import AnnounceMent from './compontents/AnnounceMent/AnnounceMent';
import Aboutus from './compontents/AboutUs/Aboutus';
import Gallary from './compontents/Gallary/Gallary';
function App() {
  // https://html.design/preview/?theme=sunshine
  return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>

            <Route path="/" element={<Home></Home>} />
            <Route path="/about" element={<Aboutus></Aboutus>} />
            <Route path="/gallery" element={<Gallary></Gallary>} />

            <Route path="login" element={<Login></Login>} />
            <Route path="products" element={<Products></Products>} />
            <Route path="dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>} >
              <Route path="profile" element={<Profile></Profile>} />
              <Route path="MYClasses" element={<MyClasses></MyClasses>} />
              <Route path="QuizExam" element={<QuizExam></QuizExam>} />
              <Route path="AnnounceMent" element={<AnnounceMent></AnnounceMent>} />

              <Route path="AddTeachers" element={<PrivateRouteAdmin><AddTeachers></AddTeachers></PrivateRouteAdmin>} />
              <Route path="CreateAdmin" element={<PrivateRouteAdmin><AddLessons></AddLessons></PrivateRouteAdmin>} />
              <Route path="AddStudent" element={<PrivateAddLEQ><AddStudent></AddStudent></PrivateAddLEQ>} />
              <Route path="AddLEQ" element={<PrivateAddLEQ><AddLEQ></AddLEQ></PrivateAddLEQ>} />
            </Route>


            <Route path="resister" element={<Resister></Resister>} />
            <Route path="products/:id" element={<SingleProductsPage></SingleProductsPage>} />
            <Route path="private" element={<PrivateRoute><Private></Private></PrivateRoute>} />
            <Route path="address" element={<AddressForrm></AddressForrm>} />
          </Routes>





        </BrowserRouter>
      </AuthProvider>


    </div >
  );
}

export default App;
