let botonIngresa = document.getElementById('botonIngresa');
let ciudad = document.getElementById('ciudad');
let edad = document.getElementById('edad');
let darAlta = document.getElementById('darAlta');
let error = document.getElementById('error');

const ingresa = () => {

    let valorEdad = edad.value
    let valorCiudad = ciudad.value

    valorEdad = Number(valorEdad)
    valorCiudad = valorCiudad.toLowerCase();

    console.log(valorCiudad)

    if(valorEdad >= 18 && valorCiudad === "cdmx"){
        error.classList.add('d-none');
        darAlta.classList.remove('d-none');
    }else{
        error.classList.remove('d-none');
        darAlta.classList.add('d-none');
    }
}

botonIngresa.addEventListener("click", ingresa);



