import './styles/navbar.scss'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Nombre/Logo de la empresa</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="nosotros">Nosotros</a>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Opciones de Venta
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="productos">Productos</a></li>
                        <li><a className="dropdown-item" href="servicios">Servicios</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="otros">Otros</a></li>
                    </ul>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="Contáctanos">Contáctanos</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="Galeria">Galería</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscando..." aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            </div>
        </div>
    </nav>

  )
}
