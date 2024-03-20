import React from "react"
import  dia from "./assets/dia.png"
import tarde from "./assets/noite.png"
import noite from "./assets/tarde.png"

import ComponenteComProps from "./components/ComponenteComProps.jsx"
import styled from "styled-components"

const Section = styled.section`
display: flex;
`

function App () { 
  return(
    <Section>
    
    <ComponenteComProps produto="Relogio Splendore."valor="R$1.900,00"imagem={dia}>
    <h2>Promoção Dia dos Namorados!</h2>
    <h6>kit Relogio e Pulseira,Amor verdadeiro,pagando com pix,R$1.800,00</h6>
    </ComponenteComProps>

    <ComponenteComProps produto="Relogio La bela."valor="R$2000,00"imagem={noite}/>

    <ComponenteComProps produto="Relogio Magnifique."valor="R$3000,00"imagem={tarde}/>
    </Section>
  )
}
 
export default App