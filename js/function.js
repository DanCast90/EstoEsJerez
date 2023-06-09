let currentUser=null;
function openView(nameOfView) {
  $("#content").children("*").remove();
  $("#content").load('../user/' + nameOfView + '.html');
}
function openViewA(nameOfView,entity,data) {
  $("#content").children("*").remove();
  $("#content").load('../admin/'+entity+'/' + nameOfView + '.html');
}
function openOneArticle(id,nameOfView) {
  localStorage.setItem("id", id);
  $("#content").children("*").remove();
  $("#content").load('../user/' + nameOfView + '.html');
}

function addClassesToNav() {
    var navLinks = document.querySelectorAll('.nav-link');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function () {
            // Agrega la clase "active" al elemento actual
            this.classList.add('active');

            // Elimina la clase "active" de todos los demás elementos
            for (var j = 0; j < navLinks.length; j++) {
                if (navLinks[j] != this) {
                    navLinks[j].classList.remove('active');
                }
            }
        });
    }
}
function backToUp() {

    var scrollTopBtn = document.getElementById('scrollTopBtn');
    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

}




function validarFormulario(){
    const form = document.getElementById('formulario');
  const nameInput = document.getElementById('name');
  const adress = document.getElementById('domicilio');
  const phone = document.getElementById('telefono');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    if (nameInput.value.trim() === '') {
      alert('Por favor, introduce tu nombre.');
      nameInput.focus();
      return;
    }
    if (adress.value.trim() === '') {
        alert('Por favor, introduce tu nombre.');
        adress.focus();
        return;
      }
      if (phone.value.trim() === '') {
        alert('Por favor, introduce tu nombre.');
        phone.focus();
        return;
      }
    if (emailInput.value.trim() === '') {
      alert('Por favor, introduce tu correo electrónico.');
      emailInput.focus();
      return;
    } else if (!isValidEmail(emailInput.value)) {
      alert('Por favor, introduce una dirección de correo electrónico válida.');
      emailInput.focus();
      return;
    }

    if (messageInput.value.trim() === '') {
      alert('Por favor, escribe un mensaje.');
      messageInput.focus();
      return;
    }

    form.submit();
  });

  
}

function isValidEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }


function logout(){
  window.location.replace("../../login.html")
}


function showToast(title, content) {
  var toastElement = document.querySelector('.toast');
  var toast = new bootstrap.Toast(toastElement);
  $("#title-toast").html(title);
  $("#content-toast").text(content);
  $("#content-toast").addClass("text-dark");

  if(title==="Exito"){
    $(".toast-header").css('background',"#006633");
    $("#title-toast").addClass("text-light");

  }else{
    $(".toast-header").css('background',"#CC0000");
    $("#title-toast").addClass("text-light");
  }
  toast.show();
}

function currentSession(user){
  currentUser = user;
}