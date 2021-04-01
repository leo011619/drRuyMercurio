import './style.css'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand mr-5" href="#"> 
            <span class="material-icons">medical_services</span> Dr. Ruy Mercurio - Ortopedia e Traumatologia </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Carreira</a>
                    </li>
                    <li class="nav-item active dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Cirurgias e Procedimentos
        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Exemplo 1</a>
                            <a class="dropdown-item" href="#">Exemplo 2</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Exemplo 3</a>
                        </div>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#"> Livros <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#"> Contato e Agendamento <span class="sr-only">(current)</span></a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Header