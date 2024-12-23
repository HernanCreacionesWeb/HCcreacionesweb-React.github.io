import React from 'react'
import monitor from "../assets/imagenes/compu.png"
import codigo from "../assets/imagenes/codigonaranja.png"
import imgbanner from "../assets/imagenes/diseñowebservicio.png"
export const Información = () => {
    return (
        <div id='informacion'>
        <div className="row mb-2">
            <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static cont-text">
                       <br />
                        <h2 className="mb-0">¿Por qué tener una página web?</h2>

                        <p className="card-text  mb-auto ">Una página web te brinda la oportunidad de presentar tus productos o servicios de manera atractiva y profesional, permitiendo que tus clientes potenciales te encuentren fácilmente. Además, contar con un sitio web bien diseñado no solo aumenta tu visibilidad, sino que también genera confianza. Los consumidores suelen investigar en línea antes de tomar decisiones de compra, y una presencia digital sólida puede ser el factor decisivo que los lleve a elegirte a ti sobre la competencia.</p>

                    </div>

                </div>
            </div>
            <div className="col-md-6">
                <div className="col-auto d-none d-lg-block">
                    <img className="bd-placeholder-img" width="100" height="306" src={monitor} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                </div>
            </div>
        </div>


        <div className="row mb-2">
            <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static cont-text">
                         <br />
                        <h2 className="mb-0">La Ventaja de Crear Páginas Web desde Cero</h2>

                        <p className="card-text  mb-auto">Como desarrollador web, he optado por crear mis sitios desde cero utilizando lenguajes de maquetado, estilo y lógica. Este enfoque me permite ofrecer una flexibilidad y personalización que las plantillas simplemente no pueden igualar. Cada proyecto es único, y al construir desde la base, puedo adaptar cada detalle para satisfacer las necesidades específicas de mis clientes.

Además, al tener control total sobre el código, puedo optimizar el rendimiento del sitio, asegurando que se cargue rápidamente y funcione sin problemas en cualquier dispositivo. Esto es crucial para mantener una buena experiencia de usuario y mejorar las tasas de conversión.</p>

                    </div>

                </div>
            </div>
            <div className="col-md-6">
                <div className="col-auto d-none d-lg-block">
                    <img className="bd-placeholder-img" width="100" height="396" src={codigo} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                </div>
            </div>
        </div>




        <aside className="responsive-banner">
	<span className="circle-a"></span>
	<span className="circle-b"></span>
	<img src={imgbanner} />
	<div className="container-envelope">
		<h4>Subite al mundo digital!!</h4>
		<a href="#contacto" className="more-link">Ascendé tu negocio.</a>
        
	</div>
</aside>

        </div>









    )
}
