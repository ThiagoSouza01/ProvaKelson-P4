import './Telafinal.css';

function Telafinal(props) {
    const reiniciar = props.reiniciar
    if (props.perguntas === 3) {
        return (
            <div>
                <h1>Quiz de React</h1>
                <div className="container">
                    <p className="final1">Fim do quiz!</p> <br></br>
                    <p className="final2">Sua pontuação foi: {props.pontos} de 3</p>
                </div>
                <button className="final" onClick={reiniciar}>Jogar Novamente?</button>
            </div>
        )
    }
}

export default Telafinal;