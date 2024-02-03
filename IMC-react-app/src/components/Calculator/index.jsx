import FigPeople from '../../assets/peopleBike.png'
import { MainContainer, ImgDecoration, Form, InputNumber } from './styles.js'

export default function Calculator() {
    return (

        <MainContainer>
            <ImgDecoration src={FigPeople} alt='profile.img' />
            <div>
                <h1>Calculadora IMC</h1>
                <Form action="">
                    <label htmlFor="pesoUser">Peso</label>
                    <InputNumber type="number" id="pesoUser" required />
                    <label htmlFor="alturaUser">Altura</label>
                    <InputNumber type="number" id="alturaUser" required />
                    <button type='submit'>Calcular</button>
                </Form>
            </div>
        </MainContainer>

    )
}