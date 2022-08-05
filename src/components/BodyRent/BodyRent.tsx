import { Plan1, Plan2, Plan3 } from "../Plans/Plans"
import "./Rentstyles.css"

export function BodyRent () {
    return (
        <>
            <nav className="rentmaincontainer">
                <section className="rentsection1">
                    <Plan1 />
                    <Plan2 />
                </section>
                <section className="rentsection2">
                    <Plan3 />
                </section>
            </nav>
        </>

    )
}