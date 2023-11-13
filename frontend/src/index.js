import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import {Provider} from 'react-redux'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import store from './store';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import ShippingScreen from './screen/ShippingScreen';
import PaymentScreen from './screen/PaymentScreen';
import PlaceOrderScreen from './screen/PlaceOrderScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute'
import OrderScreen from './screen/OrderScreen';
import ProfileScreen from './screen/ProfileScreen';
import OrderListScreen from './screen/admin/OrderListScreen';
import ProductListScreen from './screen/admin/ProductListScreen';
import ProductEditScreen from './screen/admin/ProductEditScreen';
import UserListScreen from './screen/admin/UserListScreen';
import UserEditScreen from './screen/admin/UserEditScreen';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>}/>
      <Route path='/search/:keyword' element={<HomeScreen/>}/>
      <Route path='/page/:pageNumber' element={<HomeScreen/>}/>
      <Route path='/search/:keyword/page/:pageNumber' element={<HomeScreen/>}/>
      <Route path='/product/:id' element={<ProductScreen/>}/>
      <Route path='/cart' element={<CartScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingScreen/>}/>
        <Route path='/payment' element={<PaymentScreen/>}/>
        <Route path='/order' element={<PlaceOrderScreen/>}/>
        <Route path='/order/:id' element={<OrderScreen/>}/>
        <Route path='/profile' element={<ProfileScreen/>}/>
      </Route>
      <Route path='' element={<AdminRoute/>}>
        <Route path='/admin/orderlist' element={<OrderListScreen/>}/>
        <Route path='/admin/productlist' element={<ProductListScreen/>}/>
        <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen/>}/>
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>}/>
        <Route path='/admin/userlist' element={<UserListScreen/>}/>
        <Route path='/admin/user/:id/edit' element={<UserEditScreen/>}/>
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router}/>
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
