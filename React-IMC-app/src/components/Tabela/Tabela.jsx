import { useState } from "react"
import styles from './Tabela.module.css'

export default function tabela() {
    const [exibir, setExibir] = useState(false)

    return (
        <>
            <button type="button" className={styles.btn} onClick={() => exibir ? setExibir(false) : setExibir(true)}>{exibir? 'Esconder tabela' : 'Exibir tabela'}</button>
            {exibir && (
                <table className={styles.table}>
                    <caption>
                        Tabela de IMC. Fonte: <a href="https://drrogermoura.com.br/o-que-e-imc" target="_blank">Dr. Roger Moura</a>
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col">IMC</th>
                            <th scope="col">Classificação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Abaixo de 18,5</td>
                            <td>Abaixo do peso</td>
                        </tr>
                        <tr>
                            <td>Entre 18,6 e 24,9</td>
                            <td>Peso ideial</td>
                        </tr>
                        <tr>
                            <td>Entre 25,0 e 29,0</td>
                            <td>Levemente acima do peso</td>
                        </tr>
                        <tr>
                            <td>Entre 30,0 e 34,9</td>
                            <td>Obesidade grau I</td>
                        </tr>
                        <tr>
                            <td>Entre 35,0 e 39,9</td>
                            <td>Obesidade grau II (Severa)</td>
                        </tr>
                        <tr>
                            <td>Acima de 40</td>
                            <td>Obesidade III (mórbida)</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    )
}