import { useState } from 'react';
import './App.css';
import Pergunta1 from './perguntas/pergunta1/Pergunta1';
import Pergunta2 from './perguntas/pergunta2/Pergunta2';
import Pergunta3 from './perguntas/pergunta3/Pergunta3';
import Telafinal from './perguntas/telafinal/Telafinal';

function App() {
  const [parte,setParte] = useState(0);
  const [pontos,setPontos] = useState(0);
  const [perguntas, setPerguntas] = useState(0); 

  const proxima_parte = () => {
    setParte(parte + 1);
  };

  const reiniciar= () => {
    setParte(0)
    setPontos(0)
    setPerguntas(0)
  };

  if (parte===0){
    return(
      <Pergunta1 proxima_parte={proxima_parte}
      perguntas={perguntas}
      pontos={pontos}
      setPerguntas={setPerguntas}
      setPontos={setPontos}/>
    )
  }
  else if (parte===1){
    return(
      <Pergunta2 proxima_parte={proxima_parte}
      perguntas={perguntas}
      pontos={pontos}
      setPerguntas={setPerguntas}
      setPontos={setPontos}/>
    )
  }
  else if (parte===2){
    return(
      <Pergunta3 proxima_parte={proxima_parte}
      perguntas={perguntas}
      pontos={pontos}
      setPerguntas={setPerguntas}
      setPontos={setPontos}/>
    )
  }
  else if (parte===3){
    return(
      <Telafinal reiniciar={reiniciar}
      perguntas={perguntas}
      pontos={pontos}
      setPerguntas={setPerguntas}
      setPontos={setPontos}/>
    )
  }
}
export default App;