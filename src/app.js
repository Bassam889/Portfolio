const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar-container");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active-menu");
  line1.classList.toggle("line-1-close");
  line2.classList.toggle("line-2-close");
  line3.classList.toggle("line-3-close");
});

const sendFormButton = document.getElementById("send-form-button");
const contactForm = document.getElementById("contact-form");

sendFormButton.addEventListener("click", (event) => {
  event.preventDefault();
  formData = new FormData(contactForm);

  let name = formData.get("Nombre");
  let phone = formData.get("Telefono");
  let address = formData.get("Direccion");
  let info = formData.get("Informacion");

  Email.send({
    SecureToken: "65684de2-2741-497e-9840-9fa31741da40",
    To: "info@poolkeepersrd.com",
    From: "info@poolkeepersrd.com",
    Subject: "Nueva informacion - Formulario Pagina Web",
    Body: `Hola,<br>
        Has recibido una nueva solicitud de contacto con la siguiente informacion:<br>
        Nombre: ${name}<br>
        Telefono: ${phone}<br>
        Direccion: ${address}<br>
        Informacion: ${info}`,
  }).then(() => {
    alert("Correo enviado");
    contactForm.reset();
  });
});

const mvvContent = document.getElementById("mvv-content");
const mvvCard1 = document.getElementById("mvv-card-1");
const mvvCard2 = document.getElementById("mvv-card-2");
const mvvCard3 = document.getElementById("mvv-card-3");

mvvContent.addEventListener("click", (event) => {
  let clickedElement = event.target;

  if (clickedElement.classList.contains("mvv1")) {
    mvvCard1.classList.remove("not-active-mvv");
    mvvCard1.classList.add("active-mvv");
    mvvCard2.classList.add("not-active-mvv");
    mvvCard3.classList.add("not-active-mvv");
  } else if (
    clickedElement.classList.contains("mvv1") &&
    mvvCard1.classList.contains("active-mvv")
  ) {
    mvvCard1.classList.remove("active-mvv");
    mvvCard2.classList.remove("not-active-mvv");
    mvvCard3.classList.remove("not-active-mvv");
    console.log("contains both");
  } else if (clickedElement.classList.contains("mvv2")) {
    mvvCard2.classList.remove("not-active-mvv");
    mvvCard2.classList.add("active-mvv");
    mvvCard1.classList.add("not-active-mvv");
    mvvCard3.classList.add("not-active-mvv");
  } else if (
    clickedElement.classList.contains("mvv2") &&
    mvvCard2.classList.contains("active-mvv")
  ) {
    mvvCard2.classList.remove("active-mvv");
    mvvCard1.classList.remove("not-active-mvv");
    mvvCard3.classList.remove("not-active-mvv");
  } else if (clickedElement.classList.contains("mvv3")) {
    mvvCard3.classList.remove("not-active-mvv");
    mvvCard3.classList.add("active-mvv");
    mvvCard1.classList.add("not-active-mvv");
    mvvCard2.classList.add("not-active-mvv");
  } else if (
    clickedElement.classList.contains("mvv3") &&
    mvvCard3.classList.contains("active-mvv")
  ) {
    mvvCard3.classList.remove("active-mvv");
    mvvCard2.classList.remove("not-active-mvv");
    mvvCard1.classList.remove("not-active-mvv");
  }
});
