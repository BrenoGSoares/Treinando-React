import FigPeople from '../../assets/peopleBike.png'

export default function Calculator() {
    return (
        <>
            <div className="">
                <img src={FigPeople} alt="" />
            </div>
            <div className="">
                <h1>Calculadora IMC</h1>
                <div className="">
                    <form action="">
                        <label htmlFor="pesoUser">Seu peso:</label>
                        <input type="text" id="pesoUser" required />
                        <label htmlFor="alturaUser">Sua Altura:</label>
                        <input type="text" id="alturaUser" required />
                        <button type='submit'>Calcular</button>
                    </form>
                </div>
            </div>
        </>
    )
}