import "./style.css";
import drRuyFoto from "../../../assets/drRuyFoto.jfif";

const MainCarreira = () => {
  return (
    <>
      <section className="sectionMain">
        <div className="container">
          <div className="content">
            <div className="contentTitle">
              <h3>Dr. Ruy Mercúrio</h3>
            </div>
            <div className="contentText">
              <span>
                Dr. Ruy Mercúrio, CRM 014.075, médico, graduado pela UNIFESP-
                Escola Paulista de Medicina – Universidade Federal de São Paulo,
                Brasil. Mestre, com título pela UNIFESP/ Escola Paulista de
                Medicina / São Paulo / Brasil, Dr. Ruy Mercúrio tem o título de
                especialista em Ortopedia e Traumatologia, pela SBOT- Sociedade
                Brasileira de Ortopedia e Traumatologia e é cirurgião de coluna
                vertebral ... ... Membro da Sociedade Brasileira de Patologia de
                Coluna Vertebral, exerce Clínica de dor, do sistema
                músculo-esquelético, em São Paulo, Capital, onde já atendeu
                48.000 pacientes com dores crônicas. Autor dos livros: - O que
                você deve saber sobre coluna vertebral; - Dor nas costas nunca
                mais; - A Arte de curar, a Ciência e a Fé, curas e milagres e; -
                Cura pela Medicina Espiritual.
              </span>
            </div>
            <div class="fotoDePerfil">
              <img src={drRuyFoto} alt="foto Dr Ruy"></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainCarreira;
