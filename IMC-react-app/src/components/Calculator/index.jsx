import { useState } from 'react'
import FigPeople from '../../assets/peopleBike.png'
import { MainContainer, ImgDecoration, Form, InputNumber, TextResult } from './styles.js'



export default function Calculator() {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [imc, setImc] = useState([])

    const handleChangePeso = (e) => {
        setPeso(e.target.value)
    }

    const handleChangeAlt = (e) => {
        setAltura(e.target.value)
    }

    const calcImc = () => {
        let imcValue = peso / (altura ** 2)
        let category = '';
        if (imcValue <= 16.9) {
            category = 'Muito abaixo do peso';
        } else if (imcValue <= 18.4) {
            category = 'Abaixo do peso';
        } else if (imcValue <= 24.9) {
            category = 'Peso normal';
        } else if (imcValue <= 29.9) {
            category = 'Acima do Peso';
        } else if (imcValue <= 34.9) {
            category = 'Obesidade: Grau I';
        } else {
            category = 'Obesidade'
        }

        setImc([imcValue, category])
    }



    return (

        <MainContainer>
            <ImgDecoration src={FigPeople} alt='profile.img' />
            <div>
                <h1>Calculadora IMC</h1>
                <Form action="">
                    <label htmlFor="pesoUser">Peso (Kg)</label>
                    <InputNumber type="number" id="pesoUser" onChange={handleChangePeso} required />
                    <label htmlFor="alturaUser">Altura (M)</label>
                    <InputNumber type="number" id="alturaUser" onChange={handleChangeAlt} required />
                    <button type='button' onClick={calcImc}>Calcular</button>
                </Form>
                {
                    imc.length > 0 && (
                        <div>
                            <TextResult>Você está:  <span> {imc[1]} </span></TextResult>
                            <TextResult>{imc[0].toFixed(2)}</TextResult>
                        </div>
                    )
                }
            </div>
        </MainContainer >

    )
}