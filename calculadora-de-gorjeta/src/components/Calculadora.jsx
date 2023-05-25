import Cifrao from '../images/cifrao.png'
import Pessoa from '../images/pessoa.png'
import './Calculadora.css'

export function Calculadora() {
    return (
        <main>
            <form action="">
                <div className="bill">
                    <label htmlFor="bill">Conta</label>
                </div>

                <div className="input-box">
                    <img src={Cifrao} alt="Imagem do Cifrão" />
                    <input type="number" id="bill" placeholder="0"/>
                </div>

                <div className="tip-percentage">
                    <label htmlFor="custom">Selecione a Porcentagem %</label>
                    <div>
                        <input type="button" value="5%" /><input type="button" value="10%" /><input type="button" value="15%" /><input type="button" value="25%" /><input type="button" value="50%" />
                        <input type="number" id="custom" placeholder="Outra" />
                    </div>
                </div>

                <div className="people">
                    <label htmlFor="people-number">Número de Pessoas</label>
                    <div className="input-box">
                        <img src={Pessoa} alt="Imagem da Pessoa" />
                        <input type="number" id="people-number" placeholder="0" />
                    </div>
                </div>
            </form>
            <section className="results">
                <div>
                <div className="tip-amount">
                    <p>
                        Gorjeta <br />
                        <span>/ pessoa</span>
                    </p>
                    <p>R$ 0.00</p>
                </div>

                <div className="total">
                    <p>
                        Total <br />
                        <span>/ pessoa</span>
                    </p>
                    <p>R$ 0.00</p>
                </div>
                </div>

                <button>Limpar</button>               
            </section>
        </main>
    );
}