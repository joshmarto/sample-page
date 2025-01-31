import { useEffect, useState } from "react";


export const CarouselComponent = () => {
    // toDo: 1. Get the size of the window 2. Evaluate and display the img based on the device it is in
    // Constants
    const windowSize = window.innerWidth;
    const timeDisplayCarousel = 5000;

    // Component State controllers
    const [imgs, setImgs] = useState('https://placehold.in/1080x1920.png/dark');

    // Component Loaded
    useEffect(() => {
        // Display based on screen size
        if (windowSize > 1500) {
            // Display for Notebook or Desktop
            setImgs('https://placehold.in/1920x1080.png/dark');
        } else if (windowSize < 1200 && windowSize > 800) {
            // Display for Tablet or iPad
            setImgs('https://placehold.in/1200x800.png/dark');
        } else if (windowSize < 800){
            // Display for Mobile
            setImgs('https://placehold.in/1080x2400.png/dark');
        }
    }, []);
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={ timeDisplayCarousel }>
                <img src={ imgs } className="d-block w-100" alt={ imgs } />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Foto 1</h5>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval={ timeDisplayCarousel }>
                <img src={ imgs } className="d-block w-100" alt={ imgs } />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Foto 2</h5>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval={ timeDisplayCarousel }>
                <img src={ imgs } className="d-block w-100" alt={ imgs } />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Foto 3</h5>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval={ timeDisplayCarousel }>
                <img src={ imgs } className="d-block w-100" alt={ imgs } />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Foto 4</h5>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Siguiente</span>
        </button>
    </div>
  )
}
