import boloChocolate from '../assets/bolo-chocolate.png'
import './Style.css'

export function Chocolate() {
    return (
        <section>
            <h2>Bolo de Chocolate</h2>
            <img src={boloChocolate} alt="Foto de Bolo de Chocolate" />
        </section>
    );
}