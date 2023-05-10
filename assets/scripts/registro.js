const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // detener el envío del formulario

  // Validar el campo de nombre
  const nameInput = document.querySelector('#name');
  if (nameInput.value === '') {
    alert('Por favor ingrese su nombre y apellidos.');
    nameInput.focus();
    return;
  }

  // Validar el campo de correo electrónico
  const emailInput = document.querySelector('#email');
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Por favor ingrese un correo electrónico válido.');
    emailInput.focus();
    return;
  }

  // Validar el campo de número de contacto
  const numberInput = document.querySelector('#number');
  if (numberInput.value === '') {
    alert('Por favor ingrese su número de contacto.');
    numberInput.focus();
    return;
  }

  // Validar el campo de dirección
  const direccionInput = document.querySelector('#direccion');
  if (direccionInput.value === '') {
    alert('Por favor ingrese su dirección.');
    direccionInput.focus();
    return;
  }

  // Validar el campo de identificación
  const identificacionInput = document.querySelector('#identificacion');
  if (identificacionInput.value === '') {
    alert('Por favor ingrese su número de identificación.');
    identificacionInput.focus();
    return;
  }

  // Validar el campo de edad
  const edadInput = document.querySelector('#edad');
  if (edadInput.value === '') {
    alert('Por favor ingrese su edad.');
    edadInput.focus();
    return;
  }

  // Validar el campo de promociones
  const promocionInput = document.querySelector('#promocion');
  if (!promocionInput.checked) {
    alert('Por favor acepte el envío de promociones a su correo.');
    promocionInput.focus();
    return;
  }

  // Si todos los campos son válidos, enviar el formulario
  form.submit();
});
