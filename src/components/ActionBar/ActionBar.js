import React from "react"
import './style.css'
import deliverizelogo from "../../assets/DeliverizeLogo.svg"
import deliverizelogo2 from "../../assets/DeliverizeLogo2.svg"
import TextField from '@mui/material/TextField';
import Circle from "../../assets/circle.svg"
import Button from '@mui/material/Button';
import shoppingCart from "../../assets/shoppingCart.svg"








export default function ActionBar() {
  return (
    <div className="container">
      <div className="Deliverize">
          <img className="logo1"src={deliverizelogo}></img>
          <img className="logo2" src={deliverizelogo2}></img>
      </div>
      <div className="menu">
          <TextField
          id="filled-textarea"
          label="Entrega:"
          placeholder="Placeholder"
          multiline
          variant="filled"
          className="Entrega"
        />
        <TextField
          id="filled-search"
          label="Busque por estabelecimentos ou produtos"
          type="search"
          variant="filled"
          className="Produtos"
        />
        <img className="Circle" src={Circle}></img>
        <Button>Entrar</Button>
        <img className="Carrinho" src={shoppingCart}></img>
        <Button>Carrinho</Button>
          </div>
      </div>
  )
}