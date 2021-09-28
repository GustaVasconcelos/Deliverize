import React from "react";
import './style.css'
import { useState } from "react";
import Vector from '../../assets/Vector.svg'
import Vector2 from '../../assets/Vector2.svg'
import Radio from '@material-ui/core/Radio';



export default function MenuView() {

    const [chedar, setChedar] = useState(0);

    const [Cebola, setCebola] = useState(0);

    const [MolhoC, setMolhoC] = useState(0);

    const [MolhoP, setMolhoP] = useState(0);

    const [numero, setNumero] = useState(0);

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }


    return (
        <div className="MenuPrincipal">
            <div className="CaixaScroll">

                <div className="addIngrediente">
                    <text className="Titulo">Adicionar Ingredientes</text>
                    <text className="Quantidade">Até 8 ingredientes</text>
                </div>
                <div className="Ingredientes">
                    <text className="QueijoC">Queijo cheddar</text>
                    <div className="ButtonC">
                        <button onClick={() => setChedar(chedar - 1)} className="diminuir"><img src={
                            Vector
                        }></img></button>

                        <h1 className="numero">{chedar}</h1>

                        <button onClick={() => setChedar(chedar + 1)} className="Aumentar"><img src={
                            Vector2
                        }></img></button>
                    </div>
                    <text class="PrecoQ">+ R$4,99</text>
                </div>
                <div className="Ingredientes">
                    <text className="Cebola">Cebola crispy</text>
                    <div className="ButtonCc">
                        <button onClick={() => setCebola(Cebola - 1)} className="diminuir"><img src={
                            Vector
                        }></img></button>

                        <h1 className="numero">{Cebola}</h1>

                        <button onClick={() => setCebola(Cebola + 1)} className="Aumentar"><img src={
                            Vector2
                        }></img></button>
                    </div>
                    <text className="PrecoC">+ R$1,50</text>
                </div>
                <div className="Ingredientes">
                    <text className="MolhoC">Molho cheddar</text>
                    <div className="ButtonMc">
                        <button onClick={() => setMolhoC(MolhoC - 1)} className="diminuir"><img src={
                            Vector
                        }></img></button>

                        <h1 className="numero">{MolhoC}</h1>

                        <button onClick={() => setMolhoC(MolhoC + 1)} className="Aumentar"><img src={
                            Vector2
                        }></img></button>
                    </div>
                    <text className="PrecoMc">+ R$3,50</text>
                </div>
                <div className="Ingredientes">
                    <text className="MolhoP">Molho de picanha</text>
                    <div className="ButtonMp">
                        <button onClick={() => setMolhoP(MolhoP - 1)} className="diminuir"><img src={
                            Vector
                        }></img></button>

                        <h1 className="numero">{MolhoP}</h1>

                        <button onClick={() => setMolhoP(MolhoP + 1)} className="Aumentar"><img src={
                            Vector2
                        }></img></button>
                    </div>
                    <text className="PrecoMp">+ R$3,50</text>
                </div>
                <div className="Talher">
                    <text className="Pergunta">Precisa de Talher?</text>
                </div>
                <div className="Resposta">
                    <div className="Sim">
                        <text> <text>Sim</text>
                            <Radio
                                placeholder="texto"
                                checked={selectedValue === 'a'}
                                onChange={handleChange}
                                value="a"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'A' }}
                            /></text>
                        <text className="Nao"><text>Não</text>
                            <Radio
                                placeholder="texto"
                                checked={selectedValue === 'b'}
                                onChange={handleChange}
                                value="b"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'B' }}
                            />

                        </text>
                    </div>
                </div>
            </div>


            <div className="Finalizar">
                <div className="Add">
                    <button onClick={() => setNumero(numero - 1)} className="diminuir2">-</button>
                    <h1 className="numero">{numero}</h1>
                    <button onClick={() => setNumero(numero + 1)} className="Aumentar2">+</button>
                </div>
                <div className="Add2">
                    <button>Adicionar</button>
                </div>
            </div>

        </div>
    )
}

