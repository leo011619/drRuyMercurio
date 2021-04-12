import './style.css'

const Footer = () => {
  return (
    <>
      <div class="mainFooter">
        <div className="bloco1">
          <h5>Ética</h5>
          <p>Responsável técnico: Dr Ruy Mercúrio
          CRMP:014.075</p>

          <p>Este site segue os
        <a href="http://www.cremesp.org.br/?siteAcao=PublicacoesConteudoSumario&amp;id=26" target="-blank" rel="noopener noreferrer"> princípios éticos estabelecidos pelo CREMESP</a>.
        </p>
        </div>
        <div className="bloco2">
          <h5>Conteúdo</h5>
          O conteúdo deste website tem como objetivo oferecer, em linguagem acessível, orientações aos pacientes sobre coluna vertebral, suas patologias e tratamentos. As informações disponibilizadas não substituem a consulta médica.
        </div>
        <div className="bloco3">
        <p>Endereço do consultório</p>

        </div>
      </div>
    </>
  )
}

export default Footer