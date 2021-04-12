import './style.css'


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand mr-5" href="/">
                <span className="material-icons">medical_services</span> Dr. Ruy Mercurio - Ortopedia e Traumatologia </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/carreira">Carreira</a>
                    </li>
                    <li class="nav-item active dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Cirurgias e procedimentos
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/cirurgiasMin">Cirugias minimamente invasivas</a>
                            <a class="dropdown-item" href="/cirurgiasConv">Cirurgias convencionais</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Espaço livre ¯\_(ツ)_/¯</a>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/livros"> Livros <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/contato"> Contato <span className="sr-only">(current)</span></a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Header