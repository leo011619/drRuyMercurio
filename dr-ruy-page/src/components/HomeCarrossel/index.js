import "./style.css";
import canal from "../../assets/canalDrRuy.png";
import livros from "../../assets/livrosDrRuy.png";
import meiosDeContato from "../../assets/meiosDeContato.jpg";

const HomeCarrossel = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner h-50">
          <div class="carousel-item active">
            <img src={canal} class="d-block w-100" alt="canal do Youtube"></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>
                <a href="https://www.youtube.com/channel/UCEu8ls4dxat0XVP3wG9SHcQ/videos">
                  Dr. Ruy Mercúrio no Youtube!
                </a>
              </h5>
              <p>Acesse o canal do YouTube para mais conteúdo!</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={livros} class="d-block w-100" alt="livros Dr Ruy"></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>
                <a href="/livros">Conheça meus livros.</a>
              </h5>
              <p>Medicina e saúde da coluna em forma de livro!</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={meiosDeContato}
              class="d-block w-100"
              alt="Entre em contato conosoco"
            ></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>
                {" "}
                <a href="/contato">
                  Entre em contato com a gente agora mesmo!
                </a>{" "}
              </h5>
              <p>E marque sua consulta!</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next "
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default HomeCarrossel;
