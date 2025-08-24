document.addEventListener('DOMContentLoaded', function() {
    const botonesDetalles = document.querySelectorAll('.ver-detalles-btn');

    botonesDetalles.forEach(boton => {
        boton.addEventListener('click', function() {
            // Navega hacia arriba en el DOM hasta encontrar el contenedor del producto
            const producto = this.closest('.producto');
            // Dentro del contenedor del producto, selecciona la descripción
            const descripcion = producto.querySelector('.descripcion');
            const botonDetalle = this; // Guarda una referencia al botón actual

            if (descripcion.classList.contains('oculto')) {
                descripcion.classList.remove('oculto');
                botonDetalle.textContent = 'Ocultar Detalles';
            } else {
                descripcion.classList.add('oculto');
                botonDetalle.textContent = 'Ver Detalles';
            }
        });
    });
});