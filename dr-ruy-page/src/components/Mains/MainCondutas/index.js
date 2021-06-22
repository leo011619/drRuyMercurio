import "./style.css";
import consulta1 from "../../../assets/consulta_1.jpg";
import consulta2 from "../../../assets/consulta_2.jpg";
import fisio1 from "../../../assets/fisio_1.jpg";
import fisio2 from "../../../assets/fisio_2.jpg";
import aulaGym1 from "../../../assets/aulaGym_1.jpg";
import aulaGym2 from "../../../assets/aulaGym_2.jpg";
import pilates from "../../../assets/pilates.jpg";
import rolfing from "../../../assets/rolfing.jpg";
import rpg from "../../../assets/rpg.jpg";

const MainCondutas = () => {
  return (
    <>
      <b>
        <p> CONDUTAS TERAPÊUTICAS </p>
      </b>
      <div class="intro">
        As condutas terapêuticas são os meios de tratamento que podemos usar com
        os pacientes, elas variade acordo com o caso de cada paciente e seu
        histórico, podendo variar particularmente de um para o outro.
      </div>
      <div class="lista">
        <div class="coluna1">
          <ul>
            <li>
              <a href="#consulta"> Consulta </a>
            </li>
            <li>
              <a href="#fisio">Fisioterapia</a>
            </li>
            <li>
              <a href="#aulasGym">Aulas de ginástica</a>
            </li>
          </ul>
        </div>
        <div class="coluna2">
          <ul>
            <li>
              <a href="#tecdesenvolvidas">Técnicas desenvolvidas</a>
            </li>
            <li>
              <a href="#outrosProcedimentos">Outros Procedimentos</a>
            </li>
            <li>
              <a href="#coluna">Coluna vertebral</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="conduta">
        <h4>
          {" "}
          <a name="consulta"></a> <b>Consulta / Orientação</b>
        </h4>

        <div class="container_conduta_consulta">
          A <b>Consulta</b> leva cerca de 60 minutos e consiste basicamente em
          uma entrevista médica onde o paciente irá relatar o que sente, suas
          dores e seu histórico, a consulta é de extrema impotância, é através
          dela que iremos conseguir dar o primeiro passo em seu tratamento.
          <div class="imagens">
            <img
              className="imagem1"
              src={consulta1}
              alt="imagem de consulta"
            ></img>
            <img
              className="imagem2"
              src={consulta2}
              alt="imagem de consulta"
            ></img>
          </div>
        </div>

        <h4>
          {" "}
          <a name="fisio"></a> <b>Fisioterapia</b>
        </h4>

        <div class="container_conduta_fisio">
          <b> Fisioterapia </b> é uma ciência da saúde que estuda, previne e
          trata os distúrbios cinéticos funcionais intercorrentes em órgãos e
          sistemas do corpo humano, gerados por alterações genéticas, por
          traumas e por doenças adquiridas, na atenção básica, média
          complexidade e alta complexidade.
          <br></br>
          São realizadas sessões individuais com cerca de 60 á 90 minutos,com
          acompanhamento de um médico e duas fisioterapeutas.
          <div class="imagens">
            <img className="imagem1" src={fisio1} alt="imagem de fisio"></img>
            <img className="imagem2" src={fisio2} alt="imagem de fisio"></img>
          </div>
        </div>

        <h4>
          {" "}
          <a name="aulasGym"></a> <b>Aulas de ginástica</b>
        </h4>

        <div class="container_conduta_aulasGym">
          As <b>Aulas de ginástica</b> apresentam diversos benefícios quando
          tratamos de fisioterapia, através das aulas conseguimos resultados
          como aumento de flexbilidade, força corporal, coordenação motora,
          consiência corporal e etc.
          <br></br>
          São realizadas aulas de alinhamento do eixo vertebral (sentado, em pé
          e deitado), exercícios de fortalecimento musculares e exercícios
          posturais.
          <div class="imagens">
            <img
              className="imagem1"
              src={aulaGym1}
              alt="imagem de aulaGym"
            ></img>
            <img
              className="imagem2"
              src={aulaGym2}
              alt="imagem de aulaGym"
            ></img>
          </div>
        </div>

        <h4>
          {" "}
          <a name="tecdesenvolvidas"></a> <b>Técnicas desenvolvidas</b>
        </h4>

        <div class="container_conduta_tecdesenvolvidas">
          Algumas técnicas foram desenvolvidas a fim de auxiliar no tratamento
          dos pacientes:
          <ul>
            <li>
              <b> Redução Postural Global (RPG)</b>, que consiste em exercícios
              e posturas usadas dentro da fisioterapia para combater alterações
              da coluna como escoliose, corcunda e hiperlordose, além de outros
              problemas de saúde como dor de cabeça, nos joelhos, quadril, e até
              mesmo alterações como o pé chato, por exemplo.
              <div class="imagens">
                <img className="imagem1" src={rpg} alt="imagem de rpg"></img>
              </div>
            </li>
            <li>
              <b> Pilates</b>, um tipo de atividade física que busca o controle
              do músculos do corpo, fortalecendo a musculatura e melhorando seu
              tônus, além de conferir maior flexibilidade ao corpo. Hoje, alguns
              médicos a consideram uma forma de terapia, por ser um exercício
              individualizado.
              <div class="imagens">
                <img
                  className="imagem1"
                  src={pilates}
                  alt="imagem de rpg"
                ></img>
              </div>
            </li>
            <li>
              <b> Rolfing </b>, Esta técnica utiliza a manipulação física e
              sensibilização movimento para trazer cabeça, ombros, tórax, pélvis
              e pernas em alinhamento vertical. Ela permite um uso mais
              eficiente dos músculos com menos energia despendida, levantando a
              cabeça e no peito e alongamento do tronco do corpo. Quando a
              terapia Rolfing é bem sucedida, o corpo é gravitacionalmente
              reequilibrada e capaz de funcionar de forma mais suave e mais
              eficiência.
              <div class="imagens">
                <img
                  className="imagem1"
                  src={rolfing}
                  alt="imagem de rpg"
                ></img>
              </div>
            </li>
            <li>
              <b> Rumer </b>, Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Reiciendis ipsam vero facere dicta beatae
              aliquam saepe neque dignissimos natus? Sapiente culpa et assumenda
              veniam ex mollitia eius totam quibusdam sint.
            </li>
          </ul>
        </div>

        <h4>
          {" "}
          <a name="outrosProcedimentos"></a> <b>Outros procedimentos</b>
        </h4>

        <div class="container_conduta_outrosProcedimentos">
          Outros procedimentos como o uso de aplicações de medicamentos podem
          também ser utilizados como tratamento, através de injeções intra
          musculares e intra articulares.
        </div>

        <h4>
          {" "}
          <a name="coluna"></a> <b>Coluna vertebral</b>
        </h4>

        <div class="container_conduta_coluna">
          <ul>
            <li>
              {" "}
              <b> Ombros </b>{" "}
            </li>
            <li>
              {" "}
              <b> Cotovelos </b>{" "}
            </li>
            <li>
              {" "}
              <b> Punhos e mãos</b>{" "}
            </li>
            <li>
              {" "}
              <b> Quadril </b>{" "}
            </li>
            <li>
              {" "}
              <b> Joelhos </b>{" "}
            </li>
            <li>
              {" "}
              <b> Tornoelos e pé </b>{" "}
            </li>
          </ul>
        </div>
      </div>
      <b>
        <p> INFORMAÇÕES IMPORTANTES </p>
      </b>
      <div class="intro">
        Os tratamentos visam sempre a restauração das funções do sistema músculo
        esquelético, com foco principal nas dores e na incapacidade física. Em
        nossa clínica a preferencia é sempre pelo tratamento conservador{" "}
        <b>(Não o cirúrgico)</b>. Os tratamentos cirúrgico somente serão
        indicados quando estritamente necessários.
      </div>
    </>
  );
};

export default MainCondutas;
