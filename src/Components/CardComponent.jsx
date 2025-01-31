

export const CardComponent = () => {
  return (
    <div className="card" style={{width: '18rem'}}>
        <img src="https://placehold.in/1920x1080.png/dark" className="card-img-top" alt="placeholder" />
        <div className="card-body">
            <h5 className="card-title">Titulo de la Tarjeta</h5>
            <p className="card-text">Un ejemplo rápido de texto para construir en la tarjeta y hacer un paquete del contenido de la tarjeta.</p>
            <a href="#" className="btn btn-primary">Ir a...</a>
        </div>
    </div>
  )
}
