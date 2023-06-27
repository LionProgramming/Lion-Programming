const imagenes = document.querySelectorAll('.img1');
const imageneLight = document.querySelector('.agregar_imagen');
const contenedorLight = document.querySelector('.imagen_trans');

// //console.log(imagenes);pruebitas check
// //console.log(imageneLight);pruebitas check
// //console.log(contenedorLight);pruebitas check

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aprecerImg(imagen.getAttribute('src'))

        // console.log(imagen.getAttribute('src'))pruebitas check
        // alert("auch, medolio") pruebitas check

    })
});

contenedorLight.addEventListener('click',(e)=>{
    if(e.target != imageneLight){
        contenedorLight.classList.toggle('mirar')
        imageneLight.classList.toggle('mirar_imgene')

    }
})
const aprecerImg =(imagen)=>{
    imageneLight.src=imagen;
    contenedorLight.classList.toggle('mirar')
    imageneLight.classList.toggle('mirar_imgene')
}