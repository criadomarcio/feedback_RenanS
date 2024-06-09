import { ButtonContainer, CardContainer, IconContainer, ResultContainer, } from "./Home.styles";

import IconStarImg from "../assets/icon-star.svg"
import thankYouImg  from "../assets/illustration-thank-you.svg"
import { useState } from "react";

export function Home() {
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [feedBackNote, setFeedBackNote] = useState(0)

  function handleFeedBackButtonClick (event) {
    const feedback = Number(event.target.innerText)

    setFeedBackNote(feedback)
  }

  function handleSubmit() {
    if(feedBackNote === 0) return

    setMostrarResultado(true)
  }

  return (
    mostrarResultado === false ? (
      <CardContainer>
        <IconContainer>
            <img src={IconStarImg} alt="icone de estrela" />
        </IconContainer>

        <h1>Como foi o atendimento?</h1>
        <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

        <ButtonContainer>
            <button onClick={handleFeedBackButtonClick}>1</button>
            <button onClick={handleFeedBackButtonClick}>2</button>
            <button onClick={handleFeedBackButtonClick}>3</button>
            <button onClick={handleFeedBackButtonClick}>4</button>
            <button onClick={handleFeedBackButtonClick}>5</button>
        </ButtonContainer>

        <button onClick={handleSubmit}>Enviar</button>
    </CardContainer>
    ) : (
      <CardContainer>
        <img src={thankYouImg} alt="imagem de agradecimento" />

        <ResultContainer>
          <p>Você selecionou {feedBackNote} de 5</p>
        </ResultContainer>

        <h1>Obrigado!</h1>

        <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
      </CardContainer>
  )
  )
}
