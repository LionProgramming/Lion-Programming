function validarcampos() {
    const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    let valor1 = document.getElementById('identificacion').value.trim();
    let valor2= document.getElementById('contraseña').value.trim();
    if ((parseInt(valor1) === 1234 && valor2==='hola') ||  (valor1==='' || valor2==='' || regex.test(valor2)) ){
      Swal.fire({
        title: 'Error',
        text: 'Los datos ingresados contienen caracteres no validos',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        title: 'Éxito',
        text: 'El valor ingresado es válido',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }

  }
  