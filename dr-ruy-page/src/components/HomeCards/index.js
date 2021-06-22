import "./style.css";
import carreiraMedicina from "../../assets/carreiraMedicina.jpg";
import estanteVirtual from "../../assets/estanteVirtual.jpg";
import ciruColuna from "../../assets/ciruColuna.jpg";

const HomeCards = () => {
  return (
    <>
      <div class="card-row">
        <div class="row row-cols-1 row-cols-md-3">
          <div class="col mb-4">
            <div class="card h-75">
              <img
                src={ciruColuna}
                class="card-img-top h-75 w-100"
                alt="Cirurgias e procedimentos"
              ></img>
              <div class="card-body">
                <p class="card-title">
                  <a href="/condutas">
                    <b>Conheça as principais condutas de tratamento!</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-75">
              <img
                src={carreiraMedicina}
                class="card-img-top h-75 w-100"
                alt="Carreira"
              ></img>
              <div class="card-body">
                <p class="card-title">
                  <a href="/carreira">
                    <b>Saiba mais sobre a carreira do Dr. Ruy Mercúrio!</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-75">
              <img
                src={estanteVirtual}
                class="card-img-top h-75 w-100"
                alt="Livros"
              ></img>
              <div class="card-body">
                <p class="card-title">
                  <a href="https://www.estantevirtual.com.br/livros/dr-ruy-mercurio">
                    <b>Compre os livros de autoria do Dr Ruy Mercúrio!</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
