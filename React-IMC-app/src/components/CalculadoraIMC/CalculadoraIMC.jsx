import { useEffect, useState } from "react"
import styles from './CalculadoraIMC.module.css'

export default function calculadoraIMC(props) {
    const {altura, peso} = props

    const [IMC, setIMC] = useState(0)
    const [classificacao, setClassificacao] = useState('')

    const calculaIMC = () => {
        const novoIMC = (peso / (altura * altura)).toFixed(1)
        
        setIMC(novoIMC)
        classificaIMC(novoIMC)
    }

    const classificaIMC = (IMC) => {
        if (IMC <= 18.5) {
            setClassificacao('está abaixo do peso ideal')
        } else if (IMC <= 24.9) {
            setClassificacao('está com o peso ideal')
        } else if (IMC <= 29.9) {
            setClassificacao('está acima do peso')
        } else if (IMC <= 34.9) {
            setClassificacao('tem obesidade grau I')
        } else if (IMC <= 39.9) {
            setClassificacao('tem obesidade grau II (Severa)')
        } else {
            setClassificacao('tem obesidade grau III (Mórbida)')
        }
    }

    useEffect(calculaIMC, [altura, peso])

    return (
        <p>O seu IMC é de <span className={styles.imc}>{IMC}</span>, ou seja, <span className={styles.classificacao}>{classificacao}</span> segundo a tabela de IMC.</p>
    )
}