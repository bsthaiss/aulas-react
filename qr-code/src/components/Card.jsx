import qrCode from '../assets/qr-code.png'
import './Card.css'

export function Card() {
    return (
        <section>
            <img src={qrCode} alt="imagem de QR Code" />
            <strong>
                Improve your front-end skills by building projects
            </strong>
            <p>
                Scan the QR Code to visit Frontend Mentor and take your coding skills to 
                the next level
            </p>
        </section>
    );
}