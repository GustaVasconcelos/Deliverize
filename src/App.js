import logo from './logo.svg';
import './App.css';
import Action from './components/ActionBar/ActionBar';
import Product from './components/ProductView/ProductView'
import Menu from './components/MenuView/MenuView'









function App() {
  return (

    <div>
      <Action></Action>
      <div className="Pedido"> 
        <Product></Product>
        <Menu></Menu>
      </div>







    </div>
  )
}

export default App;
