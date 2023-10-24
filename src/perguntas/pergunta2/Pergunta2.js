function Pergunta2(props){
    function aumentarValores() {
        props.setPontos(props.pontos + 1);
        props.setPerguntas(props.perguntas+1);
    }
    if(props.perguntas===1){
        return (
            <div>
                <h1>Quiz de React</h1>
                <div className="container">
                <p>Qual dos métodos a seguir seleciona um elemento? (2/3)</p>
                    <label>A.<button className="op1" onClick={aumentarValores}>querySelector</button></label> <br></br>
                    <br></br>
                    <label>B.<button className="op2" onClick={() => props.setPerguntas(props.perguntas + 1)}>parseInt</button></label> <br></br>
                    <br></br>
                    <label>C.<button className="op3" onClick={() => props.setPerguntas(props.perguntas + 1)}>sort</button></label> <br></br>
                    <br></br>
                    <label>D.<button className="op4" onClick={() => props.setPerguntas(props.perguntas + 1)}>reduce</button></label>
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
                    <p>Qual dos métodos a seguir seleciona um elemento? (2/3)</p>
                    <label>A.<button className="verdadeiro">querySelector</button></label> <br></br>
                    <br></br>
                    <label>B.<button className="op2">parseInt</button></label> <br></br>
                    <br></br>
                    <label>C.<button className="op3">sort</button></label> <br></br>
                    <br></br>
                    <label>D.<button className="op4">reduce</button></label>
                </div>
                <button className="proximaparte" onClick={proxima_parte}>Continuar</button>
            </div>
        )
    }
}

export default Pergunta2;