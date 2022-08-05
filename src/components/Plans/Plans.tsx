import { Buttonbasic, Buttonpremium, Buttonprojector } from "../../assets/Buttons/Button";
import './Planstyles.css'

export function Plan1 () {
    return (
        <>
            <div className="plan1">
                <h1>Plano Básico</h1>
                <ul>
                
                    <li>Duração: 12 horas</li>
                    <li>Projetor + Tela</li>
                    <li>Taxa de entrega e retirada: <span>R$19,90</span></li>
                    <li>Sem taxa de comissão por indicação</li>
                    <li className="price">R$229,<span>90</span></li>
                </ul>
                <Buttonbasic />
            </div>
    </>
    )
}

export function Plan2 () {
    return (
        <div className="plan2">
            <h1>Plano Premium</h1>
            <ul>
                <li>Duração: 24 horas</li>
                <li>Projetor + Tela</li>
                <li>Sem taxa de entrega e retirada: <span>R$00,00</span></li>
                <li>Comissão de <span>10%</span> por indicação</li>
                <li className="price">R$299,<span>90</span></li>
            </ul>
            <Buttonpremium />
        </div>
    )
}

export function Plan3 () {
    return (
        <div className="plan3">
        <h1>Projetor</h1>
            <ul>
                <li>BlitzWolf BW-VP8 + Tripé</li>
                <li>Tela incluso</li>
                <li>Taxa de entrega e retirada: <span className='tax'>R$19,90</span></li>
                <li className="price">R$39,<span>90</span><p>por hora</p></li>
            </ul>
        <Buttonprojector />
        </div>
    )
}