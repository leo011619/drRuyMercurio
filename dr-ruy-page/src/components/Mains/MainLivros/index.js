import "./style.css";
import livro1 from "../../../assets/l1.jfif";
import livro2 from "../../../assets/l2.jfif";
import livro3 from "../../../assets/l3.jpg";
import livro4 from "../../../assets/l4.jpg";

const MainLivros = () => {
  return (
    <>
      <div className="container_livros">
        <div className="container_livros_livro_l1">
          <img className="livroStyle" src={livro4} alt=""></img>
          <div className="container_livros_livro_l1_descricao">
            <div className="container_livros_livro_l1_descricao_titulo">
              <b>
                <p>O QUE VOCÊ DEVE SABER SOBRE SUA COLUNA VERTEBRAL</p>
              </b>
            </div>
            Breve relato da anatomia e fisiologia da coluna vertebral.
          </div>
        </div>
        <div className="container_livros_livro_l2">
          <img
            id="livroSemBorda"
            className="livroStyle"
            src={livro2}
            alt=""
          ></img>
          <div className="container_livros_livro_l2_descricao">
            <div className="container_livros_livro_l2_descricao_titulo">
              <b>
                <p>DOR NAS COSTAS NUNCA MAIS</p>
              </b>
            </div>
            Este livro aborda o tema dos problemas ortopédicos ou doenças que
            podem afetar nosso sistema musculo esquelético.
          </div>
        </div>
        <div className="container_livros_livro_l3">
          <img className="livroStyle" src={livro3} alt=""></img>
          <div className="container_livros_livro_l3_descricao">
            <div className="container_livros_livro_l3_descricao_titulo">
              <b>
                <p>A ARTE DE CURAR</p>
              </b>
            </div>
            Este livro aborda de uma forma geral os tratamentos e curas das
            doenças que podem afetar o ser humano.
          </div>
        </div>
        <div className="container_livros_livro_l4">
          <img className="livroStyle" src={livro1} alt=""></img>
          <div className="container_livros_livro_l4_descricao">
            <div className="container_livros_livro_l4_descricao_titulo">
              <b>
                <p>CURA PELA MEDICINA ESPIRITUAL</p>
              </b>
            </div>
            Este livro tenta conciliar todos os raciocinios possíveis e
            diagnósticos para as doenças: Raciocínio científicos, Raciocínio
            religioso, Raciocínio filosófico, Raciocínio do bom senso,
            Raciocínio intuitivo e Raciocínio espiritual.
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLivros;
