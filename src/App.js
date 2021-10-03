import { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
// import axios from 'axios';

// Importing Components
import Landing from './components/Landing Page/Landing';
import ProductInfo from './components/Product Pages/ProductInfo';
import AllProducts from './components/Product Pages/AllProducts';
import Cart from './components/Cart';
import SignupForm from './components/User Auth/SignupForm';
import LoginForm from './components/User Auth/LoginForm';
import ProductInfoAll from './components/Product Pages/ProductInfo';

function App() {

  //Setting the state for the data I'm fetching through axios
  // const [results, setResults] = useState([])
  //On click we want to push add the iem to the empty array
  const [cart,setCart] = useState([])


  // useEffect(() =>{
  
  // const url ='https://sleepy-earth-86694.herokuapp.com/products/'
  // axios.get(url)
  // .then(function(response){
  // setResults(response.data);
  // })},[setResults])

  return (
    <div>
      <Switch>
      <Route exact path='/' component={() => <Landing cart={cart} setCart={setCart}/>} />
      <Route path='/allproducts' component={AllProducts}/>
      <Route exact path='/productinfo/:id' component={ProductInfo}/>
      <Route exact path='/productinfoall/:id' component={ProductInfoAll}/>
      <Route path='/cart' component={() => <Cart cart={cart} setCart={setCart}/>}></Route>
      <Route path='/signup' component={SignupForm}/>
      <Route path='/login' component={LoginForm}/>
      </Switch>
      
      
      
      
    </div>
  );
}

export default App;
