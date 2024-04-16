import { useState } from 'react'
import styles from './Formulario.module.css'
import CalculadoraIMC from '../CalculadoraIMC/CalculadoraIMC'

export default function formulario() {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [alturaInvalid, setAlturaInvalid] = useState(false)
    const [pesoInvalid, setPesoInvalid] = useState(false)

    function recebeAltura(evento) {
        console.log(evento.target.value);

        const alturaTemp = Number(evento.target.value)

        if (alturaTemp > 0 && alturaTemp <= 3) {
            console.log('Altura válida');
            setAltura(alturaTemp)
            setAlturaInvalid(false)
        } else {
            console.log('Altura inválida');
            setAlturaInvalid(true)
        }
    }

    function recebePeso(evento) {
        console.log(evento.target.value);

        const pesoTemp = Number(evento.target.value)

        if (pesoTemp > 0 && pesoTemp <= 500) {
            console.log('Altura válida');
            setPeso(pesoTemp)
            setPesoInvalid(false)
        } else {
            console.log('Altura inválida');
            setPesoInvalid(true)
        }
    }

    return (
        <form className={styles.form}>
            <fieldset className={styles.formField}>
                <legend className={styles.formLegend}>Informações do indivíduo</legend>
                <div className={styles.formItem}>
                    <label htmlFor="altura" className={styles.formLabel}>Altura:</label>
                    <input className={`${styles.formInput} ${alturaInvalid ? styles.isInavlid : ''}`} onChange={recebeAltura} type="number" id="altura" placeholder="Sua altura em metros" required max={3} min={0} step={0.01}/>
                </div>
                <div className={styles.formItem }>
                    <label htmlFor="peso" className={styles.formLabel}>Peso:</label>
                    <input className={`${styles.formInput} ${pesoInvalid ? styles.isInavlid : ''}`} onChange={recebePeso} type="number" id="peso" placeholder="Seu peso em kg" required max={500} min={0} step={5}/>
                </div>
            </fieldset>
            {!alturaInvalid && !pesoInvalid && altura !== 0 && peso !== 0 && (
                <fieldset className={styles.formField}>
                    <legend className={styles.formLegend}>Resultado do IMC</legend>
                    <div className={styles.resultado}>
                        <CalculadoraIMC altura={altura} peso={peso} />
                    </div>
                </fieldset>
            )}
        </form>
    )
}