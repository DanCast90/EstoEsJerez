var idTesting;
function loadArticles(folder) {
    let id = localStorage.getItem("id");
    let formdata = new FormData();
    formdata.append("id", id);
    
    $.ajax({
        type: "POST",
        url: "../../php/"+folder+"/getOne.php",
        data: formdata,
        dataType: "text",
        processData: false,
        contentType: false,
        success: function (response) {
            var data = JSON.parse(response);
            console.log(data.url);
            $("#nombre").val(data.Nombre);
            $("#descripcion").val(data.descripcion);
            $("#tipoProducto").val(data.tipoProducto);
            $("#preview").attr("src",data.url);
        }
    });
}

function saveArticle(folder) {

    let nombre = document.getElementById('nombre').value;
    let tipoProducto = document.getElementById('tipoProducto').value;
    let descripcion = document.getElementById('descripcion').value;

    // Validar que los campos no estén vacíos
    if (
        nombre.trim() === '' ||
        descripcion.trim() === '' ||
        tipoProducto.trim() === '' 
    ) {
      showToast("Error", "Datos faltantes, revisa por favor");
    }  else {
        let id = localStorage.getItem("id");
        var photo = document.getElementById('photo').files[0];
        let formdata = new FormData();
        formdata.append("id", id);
        formdata.append("nombre", nombre);
        formdata.append("descripcion", descripcion);
        formdata.append("tipoProducto", tipoProducto);
        if (photo === undefined) {
            photo = $("#preview").attr("src");
            formdata.append("url", photo);
        } else {
            formdata.append("url", "../../img/"+folder+"/" + photo.name);
        }
        $.ajax({
            type: "POST",
            url: "../../php/"+folder+"/save.php",
            data: formdata,
            dataType: "text",
            processData: false,
            contentType: false,
            success: function (response) {
                var data = JSON.parse(response);
                if (data.status === 1) {
                    showToast("Exito", data.message);
                    saveImage(folder);
                } else if (data.status === 0) {
                    showToast("Error", data.message);
                } else if (data.status === -1) {
                    showToast("Error", data.message);
                }
                
            }
        });
    }
}

function saveImage(folder) {
    let photo = document.getElementById('photo').files[0];
    console.log(photo);
    let formdata = new FormData();
    formdata.append("file", photo);
    $.ajax({
        type: "POST",
        url: "../../php/"+folder+"/saveImage.php",
        data: formdata,
        dataType: "text",
        processData: false,
        contentType: false,
        success: function (response) {
            
        }
    });
}