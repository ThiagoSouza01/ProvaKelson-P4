function Pergunta3(props){
    function aumentarValores() {
        props.setPontos(props.pontos + 1);
        props.setPerguntas(props.perguntas+1);
    }
    if(props.perguntas===2){
        return (
            <div>
                <h1>Quiz de React</h1>
                <div className="container">
                <p>Com qual instrução declaramos uma constante em JavaScript? (3/3)</p>
                    <label>A.<button className="op1" onClick={() => props.setPerguntas(props.perguntas + 1)}>let</button></label> <br></br>
                    <br></br>
                    <label>B.<button className="op2" onClick={aumentarValores}>const</button></label> <br></br>
                    <br></br>
                    <label>C.<button className="op3" onClick={() => props.setPerguntas(props.perguntas + 1)}>var</button></label> <br></br>
                    <br></br>
                    <label>D.<button className="op4" onClick={() => props.setPerguntas(props.perguntas + 1)}>define</button></label>
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
                    <p>Com qual instrução declaramos uma constante em JavaScript? (3/3)</p>
                    <label>A.<button className="op1">let</button></label> <br></br>
                    <br></br>
                    <label>B.<button className="verdadeiro">const</button></label> <br></br>
                    <br></br>
                    <label>C.<button className="op3">var</button></label> <br></br>
                    <br></br>
                    <label>D.<button className="op4">define</button></label>
                </div>
                <button className="proximaparte" onClick={proxima_parte}>Continuar</button>
            </div>
        )
    }
}

export default Pergunta3;