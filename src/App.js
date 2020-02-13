import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './mystyle.css';
import {Productlist} from './components/productlist'
//import './components/productsgrid.css'

class App extends Component {
  constructor(){
super();
this.state={
  products:[ ],searchValue:" "

};
  }

  render(){
    const {products,searchValue}=this.state;
    const filteredProducts=products.filter(product=>product.name.toLowerCase().includes(searchValue.toLowerCase()));
  return (
    <div className="App">
    <div>
    <h1 className="shri-gopala">shri gopala</h1>
    
    <input type="search" placeholder="search products" className="search-bar" onChange={e=>
      {this.setState({searchValue:e.target.value},()=>console.log(this.state))
      }}></input> 
      
      </div>
    <Productlist products={filteredProducts}>
        </Productlist>
    </div>
  );
}
componentDidMount(){
  fetch('https://myfelight.firebaseapp.com/shriproducts.json')
  .then(response=>response.json())
  .then(item=>this.setState({products:item}))
}
}

export default App;
