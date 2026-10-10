
let cuenta = 0;
let fotos = [
    "../Imagenes/Entrada0.png","../Imagenes/Entrada1.png", 
    "../Imagenes/Entrada2.png", "../Imagenes/Entrada3.png",
    "../Imagenes/Vista Aerea.png", "../Imagenes/Hall.png", 
    "../Imagenes/Salon de actos.png",
    "../Imagenes/Aula1.0.png", "../Imagenes/Aula1.1.png",
    "../Imagenes/Aula2.0.png", "../Imagenes/Coworking.png"];
function pasarFoto() {
    cuenta++
    if (cuenta >= fotos.length) {
        cuenta = 0;
    }
    document.getElementById("foto-carrusel").src = fotos[cuenta];


}
