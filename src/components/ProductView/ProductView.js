import React from "react"
import './style.css'
import burguer from "../../assets/burguer.svg"

export default function ProductView() {
    return (
        <div className="Principal">
            <div className="Burguer">
                <img src={burguer}></img>
            </div>
            <div className="NomeOferta">
                <h3>Oferta Picanha Cheddar Bacon</h3>
                <p>Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim</p>
                <div className="preco">
                    <span className="num1">R$31,99</span><span className="num2">R$34,95</span>
                </div>
                
            </div>
        </div>
    )
}