import './buttonstyle.css'
import Whatsapp from '../Images/whatsapp.png'
import Instagram from '../Images/instagram.png'
import Facebook from '../Images/facebook.png'

export function Buttonbasic () {

    const Link: string = `whatsapp://send?phone=+5511982321280&text=Olá Aluga Cine %0AGostaria de adquirir um dos seus planos:%0APlano Básico: Projetor %2B Tela%0AValor: R$229,90%0ADuração: 24 horas%0ATaxa de entrega e retirada: R$19,90%0A%0ATotal: R$249,80`

    return(
        <a className='Buttonrent' href={Link}>Alugar</a>
    )
}

export function Buttonpremium () {

    const Link: string = `whatsapp://send?phone=+5511982321280&text=Olá Aluga Cine %0AGostaria de adquirir um dos seus planos:%0APlano Premum: Projetor %2B Tela%0AValor: R$289,90%0ADuração: 24 horas%0ATaxa de entrega e retirada: R$00,00%0A%0ATotal: R$289,90`

    return(
        <a className='Buttonrent' href={Link}>Alugar</a>
    )
}

export function Buttonprojector () {

    const Link: string = `whatsapp://send?phone=+5511982321280&text=Olá Aluga Cine %0AGostaria de adquirir o projetor%0ABlizWolf BW VP8 %2B Tela%0A%0AValor: R$49,90 por hora%0ATaxa de entrega e retirada: R$19,90`

    return(
        <a className='Buttonrent' href={Link}>Alugar</a>
    )
}

export function Buttonwhatsapp () {

    const Link: string = "whatsapp://send?phone=+5511982321280&text="

    return(
        <a className='whatsapp' href={Link}><img src={Whatsapp}/></a>
    )
}

export function Buttoninsta () {

    const Link: string = "https://www.instagram.com/alugacine/"

    return(
        <a className='instagram' href={Link}><img src={Instagram}/></a>
    )
}

export function Buttonface () {

    const Link: string = "https://www.facebook.com/alugacine"

    return(
        <a className='facebook' href={Link}><img src={Facebook}/></a>
    )
}
