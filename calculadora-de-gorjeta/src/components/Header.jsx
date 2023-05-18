import Logo from '../images/logo.png'
import './Header.css'

export function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo do site" />
        </header>
    );
}