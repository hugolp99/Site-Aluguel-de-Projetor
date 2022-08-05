import "./Rentstyles.css"
import Projetor from "../../assets/Images/projetor.png"
import Tela from "../../assets/Images/tela.png"

export function BoodyHome() {
    return (
        <nav className="bodymaincontainer">
            <div>
                <h1 className="bodytitle">Equipamentos disponíveis para alocação</h1>
                <section className="productcontainer">
                        <a href="/rent">
                            <img className="product" src={Projetor} />
                        </a>   
                        <ul className="description">
                            <li className="descriptiontitle">Projetor BlitzWolf BW-VP8 + Tripé</li>
                            <li>Suporte de resolução: 720P / 1080P Full HD</li>
                            <li>Brilho: 5500 lumens</li>
                            <li>Compatível com: Celular, Computador, Notebook, PC, Tablet, Xbox</li>
                            <li>Tripé com altura de 1,00m à 1,95M</li>
                        </ul>
                </section>        
                <a href="/rent" className="button">Alugar</a>
                <section className="productcontainer">
                        <a href="/rent">
                            <img className="product" src={Tela} />
                        </a>    
                        <ul className="description">
                            <li className="descriptiontitle">Tela de Projeção + Tripé</li>
                            <li>Tamanho de tela: 70 polegadas</li>
                            <li>Tripé com altura máxima de 2,50m (fechado 0,98 cm)</li>
                        </ul>
                </section>
                <a href="/rent" className="button">Alugar</a>
                    
                
            </div>
        </nav>
    )
}