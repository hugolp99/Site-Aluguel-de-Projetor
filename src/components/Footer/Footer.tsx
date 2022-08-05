import "./Footerstyle.css"
import Logo512 from "../../assets/Images/logo512.png"
import { Buttonface, Buttoninsta } from "../../assets/Buttons/Button"

export function Footer () {
    return (
        <section className="footercontainer">
            <div>
                <a href="/">
                    <img className="logo" src={Logo512}/>
                </a>
                <p>Copyright © Aluga Cine</p>
            </div>

            <ul id="contact">
                <li className="footertitle">Contato</li>
                <li>Whatsapp / Fone (15) 981402600</li>
                <li><Buttonface /></li>
                <li><Buttoninsta /></li>
                <li>Entregas nas cidades de Cerquilho, Tietê e Boituva</li>
            </ul>
        </section>
    )
}