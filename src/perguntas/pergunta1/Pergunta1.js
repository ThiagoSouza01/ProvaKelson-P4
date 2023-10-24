import './Pergunta1.css';

function Pergunta1(props) {
    function aumentarValores() {
        props.setPontos(props.pontos + 1);
        props.setPerguntas(props.perguntas+1);
    }
    if(props.perguntas===0){
        return (
            <div>
                <h1>Quiz de React</h1>
                <div className="container">
                    <p>Qual dos tipos de dados a seguir não existe em JavaScript? (1/3)</p>
                    <label>A.<button className="op1" onClick={() => props.setPerguntas(props.perguntas + 1)}>String</button></label> <br></br>
                    <br></br>
                    <label>B.<button className="op2" onClick={() => props.setPerguntas(props.perguntas + 1)}>Number</button></label> <br></br>
                    <br></br>
                    <label>C.<button className="op3" onClick={() => props.setPerguntas(props.perguntas + 1)}>Boolean</button></label> <br></br>
                    <br></br>
                    <label>D.<button className="op4" onClick={aumentarValores}>Float</button></label>
                </div>
            </div>
        )
    }
    else{
        const proxima_parte= props.proxima_parte;
        return (
            <div>
                <h1>Quiz de React</h1>
                <div className="container">
                    <p>Qual dos tipos de dados a seguir não existe em JavaScript? (1/3)</p>
                    <label>A.<button className="op1">String</button></label> <br></br>
                    <br></br>
                    <label>B.<button className="op2">Number</button></label> <br></br>
                    <br></br>
                    <label>C.<button className="op3">Boolean</button></label> <br></br>
                    <br></br>
                    <label>D.<button className="verdadeiro">Float</button></label>
                </div>
                <button className="proximaparte" onClick={proxima_parte}>Continuar</button>
            </div>
        )
    }
}

export default Pergunta1;