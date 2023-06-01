import { useState } from "react"
import cifrao from "../images/cifrao.png"
import pessoa from "../images/pessoa.png"
import "./Calculadora.css"

export function Calculadora(){
    const [conta, setConta] = useState(0)
    const  [pessoas, setPessoas] = useState(0)
    const [porcentagem, setPorcentagem] = useState(0)
    let gorjeta = 0
    let total = 0
    function handleAlterarConta(event){
        setConta(event.target.valueAsNumber)
    }

    function handleAlterarPessoas(event){
        setPessoas(event.target.valueAsNumber)
    }

    function handleAlterarPorcentagem(event, numero){
        if(event === "") {
            setPorcentagem(numero)
            return
        }

        setPorcentagem(event.target.valueAsNumber)
    }

    if(conta !== 0 && pessoas !== 0 && porcentagem !== 0){
        gorjeta = conta * porcentagem / 100 / pessoas
        total = conta / pessoas + gorjeta
    }

    function limpar (){
        setConta(0)
        setPessoas(0)
        setPorcentagem(0)
    }

    return (
        
        <main>
            <form action="">
                <div className="bill">
                    <label htmlFor="bill">Conta</label>
                    <div className="input-box">
                        <img src={cifrao} alt="imagem do cifrão" onChange={handleAlterarConta} value={conta !== 0  && conta}/>
                        <input type="number" id="bill" placeholder="0" />
                    </div>
                </div>
                <div className="tip-percentage">
                    <label htmlFor="">Selecione a Porcentagem %</label>
                    <div>
                        <input type="button" value="5%" onClick={() => handleAlterarPorcentagem("", 5)} className={porcentagem == 5 ?"selected": ""}/>
                        
                        <input type="button" value="10%" onClick={() => handleAlterarPorcentagem("", 10)} className={porcentagem == 10 ?"selected": ""}/>
                        
                        <input type="button" value="15%" onClick={() => handleAlterarPorcentagem("", 15)} className={porcentagem == 15 ?"selected": ""}/>
                        
                        <input type="button" value="25%" onClick={() => handleAlterarPorcentagem("", 25)} className={porcentagem == 25 ?"selected": ""}/>
                        
                        <input type="button" value="50%" onClick={() => handleAlterarPorcentagem("", 50)} className={porcentagem == 50 ?"selected": ""}/>
                        
                        <input type="number" placeholder="Outra" id="custom" onChange={handleAlterarPorcentagem}  value={porcentagem !== 0 && porcentagem}/>
                    </div>
                </div>
                <div className="people">
                    <label htmlFor="people-number">Número de Pessoas</label>
                    <div className="input-box">
                        <img src={pessoa} alt="imgagem de pessoas" />
                        <input type="number" id="people-number" placeholder="0" onChange={handleAlterarPessoas} value={pessoas !== 0 && pessoas}/>
                    </div>
                </div>
            </form>
            <section className="results">
                <div>
                <div className="tip-amount">
                    <p>Gorjeta <br />
                    <span>/ pessoa</span>
                    </p>
                    <p>R$ {gorjeta.toFixed(2)}</p>
                </div>
                <div className="total">
                    <p>
                        Total <br />
                        <span>/ pessoa</span>
                    </p>
                    <p>R$ {total.toFixed(2)}</p>
                </div>
                </div>

                <button onClick={limpar}>Limpar</button>
            </section>
        </main>
    )
}