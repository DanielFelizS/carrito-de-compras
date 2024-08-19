const contenedorTarjeta = document.getElementById("productos-container");

function crearTarjetaProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "tarjeta-producto";
        nuevoProducto.innerHTML = `
        <img src=./img/${producto.img}>
        <h3>${producto.nombre}</h3>
        <span>${producto.descripcion}</span>
        <p><b>${producto.precio} RD$</b></p>
        <button>Agregar al carrito</button>`
        contenedorTarjeta.appendChild(nuevoProducto);
        nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", ()=> agregarAlCarrito(producto))
    });
}

crearTarjetaProductosInicio(ropas);