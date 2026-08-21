const form = document.querySelector('#auth-form');
const modeButtons = document.querySelectorAll('.mode-button');
const nameField = document.querySelector('#name-field');
const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');
const formTitle = document.querySelector('#form-title');
const formSubtitle = document.querySelector('#form-subtitle');
const submitLabel = document.querySelector('#submit-label');
const formStatus = document.querySelector('#form-status');
let mode = 'login';

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    mode = button.dataset.mode;
    modeButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', active);
    });
    const registering = mode === 'register';
    nameField.hidden = !registering;
    formTitle.textContent = registering ? 'Crea tu cuenta' : 'Inicia sesion';
    formSubtitle.textContent = registering ? 'Empieza a organizar tus ideas hoy.' : 'Entra a tu cuenta para continuar.';
    submitLabel.textContent = registering ? 'Crear mi cuenta' : 'Entrar a mi cuenta';
    passwordInput.autocomplete = registering ? 'new-password' : 'current-password';
    formStatus.textContent = '';
  });
});

document.querySelector('.show-password').addEventListener('click', (event) => {
  const visible = passwordInput.type === 'text';
  passwordInput.type = visible ? 'password' : 'text';
  event.currentTarget.textContent = visible ? 'Ver' : 'Ocultar';
  event.currentTarget.setAttribute('aria-label', visible ? 'Mostrar contrasena' : 'Ocultar contrasena');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelectorAll('.field').forEach((field) => field.classList.remove('has-error'));
  document.querySelectorAll('.error-message').forEach((message) => { message.textContent = ''; });
  formStatus.textContent = '';
  let valid = true;
  const email = document.querySelector('#email');
  const fields = mode === 'register' ? [nameInput, email, passwordInput] : [email, passwordInput];
  fields.forEach((input) => {
    const message = input.closest('.field').querySelector('.error-message');
    if (!input.value.trim()) { input.closest('.field').classList.add('has-error'); message.textContent = 'Completa este campo.'; valid = false; }
  });
  if (email.value && !email.validity.valid) { email.closest('.field').classList.add('has-error'); email.closest('.field').querySelector('.error-message').textContent = 'Usa un correo valido.'; valid = false; }
  if (passwordInput.value && passwordInput.value.length < 8) { passwordInput.closest('.field').classList.add('has-error'); passwordInput.closest('.field').querySelector('.error-message').textContent = 'Usa al menos 8 caracteres.'; valid = false; }
  if (valid) formStatus.textContent = mode === 'register' ? 'Cuenta creada. Ya puedes comenzar.' : 'Sesion iniciada correctamente.';
});

document.querySelector('#forgot-link').addEventListener('click', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Te enviaremos un enlace para recuperar tu cuenta.';
});