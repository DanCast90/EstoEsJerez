var idTesting;
function loadAdmin() {
    let id = localStorage.getItem("id");
    let formdata = new FormData();
    formdata.append("usuarioId", id);
    $.ajax({
        type: "POST",
        url: "../../php/user/getOne.php",
        data: formdata,
        dataType: "text",
        processData: false,
        contentType: false,
        success: function (response) {

            var data = JSON.parse(response);
            console.log(data.url);
            let arr = data.Apellidos.split(',');
            $("#rfc").val(data.RFC);
            $("#nombre").val(data.Nombre);
            $("#apellido1").val(arr[0]);
            $("#apellido2").val(arr[1]);
            $("#telefono").val(data.Telefono);
            $("#username").val(data.username);
            $("#tipoUsuario").val(data.tipoUsuario);
            $("#password").val(data.contrasena);
            $("#confirmPassword").val(data.contrasena);
            $("#preview").attr("src",data.url);
        }
    });
}

function saveAdmin() {
    console.log("Saving");
    let rfc = document.getElementById('rfc').value;
    let nombre = document.getElementById('nombre').value;
    let apellido1 = document.getElementById('apellido1').value;
    let apellido2 = document.getElementById('apellido2').value;
    let telefono = document.getElementById('telefono').value;
    let usuario = document.getElementById('username').value;
    let tipoUsuario = document.getElementById('tipoUsuario').value;
    let contrasena = document.getElementById('password').value;
    let confirmarContrasena = document.getElementById('confirmPassword').value;

    // Validar que los campos no estén vacíos
    if (
        
        rfc.trim() === '' ||
        nombre.trim() === '' ||
        apellido1.trim() === '' ||
        apellido2.trim() === '' ||
        telefono.trim() === '' ||
        usuario.trim() === '' ||
        tipoUsuario.trim() === '' ||
        contrasena.trim() === '' ||
        confirmarContrasena.trim() === ''
    ) {
      showToast("Error", "Datos faltantes, revisa por favor");
    } if (contrasena.trim() !== confirmarContrasena.trim()) {
       showToast("Error", "Las contraseñas no coinciden");
    } else {
        let id = localStorage.getItem("id");
        var photo = document.getElementById('photo').files[0];
        let formdata = new FormData();
        formdata.append("id", id);
        formdata.append("rfc", rfc);
        formdata.append("nombre", nombre);
        formdata.append("primerAp", apellido1);
        formdata.append("segundoAp", apellido2);
        formdata.append("telefono", telefono);
        formdata.append("username", usuario);
        formdata.append("password", contrasena);
        formdata.append("tipoUsuario", tipoUsuario);
        if (photo === undefined) {
            photo = $("#preview").attr("src");
            formdata.append("url", photo);
        } else {
            formdata.append("url", "../../img/photoProfile/" + photo.name);
        }
        $.ajax({
            type: "POST",
            url: "../../php/user/save.php",
            data: formdata,
            dataType: "text",
            processData: false,
            contentType: false,
            success: function (response) {
                var data = JSON.parse(response);
                if (data.status === 1) {
                    showToast("Exito", data.message);
                    saveImage();
                } else if (data.status === 0) {
                    showToast("Error", data.message);
                } else if (data.status === -1) {
                    showToast("Error", data.message);
                }
                
            }
        });
    }
}

function saveImage() {
    let photo = document.getElementById('photo').files[0];
    console.log(photo);
    let formdata = new FormData();
    formdata.append("file", photo);
    $.ajax({
        type: "POST",
        url: "../../php/user/saveImage.php",
        data: formdata,
        dataType: "text",
        processData: false,
        contentType: false,
        success: function (response) {
            
        }
    });
}