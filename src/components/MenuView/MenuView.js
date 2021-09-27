import React from "react";
import './style.css'
import { useState } from "react";



export default function MenuView() {
    const [numero, setNumero] = useState(0);

    function aumentar() {
        setNumero((prevState) => prevState + 1)
    }

    function diminuir() {
        setNumero((prevState) => prevState - 1)
    }
    return (
        <div className="MenuPrincipal">
            <div className="CaixaScroll">
                    <div className="AdicionarIngredientes">
                        <h3>Adicionar Ingredientes</h3>
                        <p>Até 8 ingredientes</p>
                    </div>
                    <div className="QueijoCheddar">
                        <h3>Queijo Cheddar</h3>
                        <p>+ R$4,99</p>
                    </div>

                    <div className="Linha"></div>

                    <div className="CebolaCrispy">
                        <h3>Cebola crispy</h3>
                        <p>+ R$1,50</p>
                    </div>

                    <div className="Linha2"></div>

                    <div className="MolhoCheddar">
                        <h3>Molho cheddar</h3>
                        <p>+ R$3,50</p>
                    </div>

                    <div className="Linha3"></div>

                    <div className="MolhoDePicanha">
                        <h3>Molho de picanha</h3>
                        <p>+ R$3,50</p>
                    </div>
                    <div className="Linha4"></div>
                    <div className="Talher">
                        <h3>Precisa de Talher?</h3>
                    </div>
                    <div className="Escolha">
                        <p>sim</p>
                    </div>
                    <div className="Finalizar">
                    <div className="Add">
                        <button onClick={diminuir} className="diminuir">-</button>
                        <h1 className="numero">{numero}</h1>
                        <button onClick={aumentar} className="Aumentar">+</button>
                    </div>
                    <div className="Add2">
                        <button>Adicionar</button>
                    </div>
                </div>

                </div>


        </div>
    )
}


{/* 
import React from "react";
import './style.css'
import { useState } from "react";



export default function MenuView() {
    const [numero, setNumero] = useState(0);

    function aumentar() {
        setNumero((prevState) => prevState + 1)
    }

    function diminuir() {
        setNumero((prevState) => prevState - 1)
    }
    return (
        <div className="MenuPrincipal">
            <div className="CaixaGlobal">
                <div className="CaixaScroll">
                    <div className="AdicionarIngredientes">
                        <h3>Adicionar Ingredientes</h3>
                        <p>Até 8 ingredientes</p>
                    </div>
                    <div className="QueijoCheddar">
                        <h3>Queijo Cheddar</h3>
                        <p>+ R$4,99</p>
                    </div>

                    <div className="Linha"></div>

                    <div className="CebolaCrispy">
                        <h3>Cebola crispy</h3>
                        <p>+ R$1,50</p>
                    </div>

                    <div className="Linha2"></div>

                    <div className="MolhoCheddar">
                        <h3>Molho cheddar</h3>
                        <p>+ R$3,50</p>
                    </div>

                    <div className="Linha3"></div>

                    <div className="MolhoDePicanha">
                        <h3>Molho de picanha</h3>
                        <p>+ R$3,50</p>
                    </div>
                    <div className="Linha4"></div>
                    <div className="Talher">
                        <h3>Precisa de Talher?</h3>
                    </div>
                    <div className="Escolha">
                        <p>sim</p>
                    </div>


                </div>
                <div className="Finalizar">
                    <div className="Add">
                        <button onClick={diminuir} className="diminuir">-</button>
                        <h1 className="numero">{numero}</h1>
                        <button onClick={aumentar} className="Aumentar">+</button>
                    </div>
                    <div className="Add2">
                        <button>Adicionar</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
                    */}