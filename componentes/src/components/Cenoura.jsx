import boloCenoura from '../assets/bolo-cenoura.png'
import './Style.css'

export function Cenoura() {
    return (
        <section>
            <h1>Meus Bolos Favoritos</h1>
            <h2>Bolo de Cenoura</h2>
            <img src={boloCenoura} alt="Foto de Bolo de Cenoura" />
        </section>
    );
}