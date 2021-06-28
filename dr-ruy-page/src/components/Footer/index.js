import "./style.css";

const Footer = () => {
  return (
    <>
      <div class="mainFooter">
        <div className="bloco1">
          <h5>Ética</h5>
          <p>Responsável técnico: Dr Ruy Mercúrio CRMP:014.075</p>

          <p>
            Este site segue os
            <a
              href="http://www.cremesp.org.br/?siteAcao=PublicacoesConteudoSumario&amp;id=26"
              target="-blank"
              rel="noopener noreferrer"
            >
              {" "}
              princípios éticos estabelecidos pelo CREMESP
            </a>
            .
          </p>
        </div>
        <div className="bloco2">
          <h5>Conteúdo</h5>O conteúdo deste website tem como objetivo oferecer,
          em linguagem acessível, orientações aos pacientes sobre coluna
          vertebral, suas patologias e tratamentos. As informações
          disponibilizadas não substituem a presença médica.
        </div>
        <div className="bloco3">
          <p>Endereço do consultório:</p>
          <a href="https://www.google.com.br/maps/place/Av.+Giovanni+Gronchi,+1470+-+Morumbi,+S%C3%A3o+Paulo+-+SP,+05651-001/@-23.5964654,-46.721314,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce56e801fc00b1:0xeea1c485203dd353!8m2!3d-23.5964703!4d-46.7191253">
            Av. Giovanni Gronchi, 1470 - Morumbi - SP{" "}
          </a>
          <b> Próximo ao estádio do Morumbi! </b>
          <p>Entre em contato agora mesmo:</p>
          <div className="celfooter">
            <b>Telefones: </b>{" "}
            <a
              href="tel:+5511954563537"
              target="_blank"
              rel="noopener noreferrer"
              title="Ligar para marcar consulta?"
            >
              (11)97082-8015{" "}
            </a>{" "}
            ou{" "}
            <a
              href="tel:+5511954563537"
              target="_blank"
              rel="noopener noreferrer"
              title="Ligar para marcar consulta?"
            >
              (11)3661-4243{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
