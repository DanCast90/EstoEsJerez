function describeProduct(){
    let id = localStorage.getItem("id");
    let formdata = new FormData();
    formdata.append("id", id);
    $.ajax({
        type: "POST",
        url: "../../php/producto/getOne.php",
        data: formdata,
        dataType: "text",
        processData: false,
        contentType: false,
        success: function (response) {
            var data = JSON.parse(response);
            console.log(data);
            $("#nombre").text(data.Nombre);
            $("#descripcion").text(data.descripcion);
            $("#image").attr("src",data.url);
        }
    });
}



function describeService(){
    let id = localStorage.getItem("id");
    console.log(id);
    let formdata = new FormData();
    formdata.append("id", id);
    $.ajax({
        type: "POST",
        url: "../../php/servicio/getOne.php",
        data: formdata,
        dataType: "text",
        processData: false,
        contentType: false,
        success: function (response) {
            var data = JSON.parse(response);
            console.log(data);
            $("#nombre").text(data.Nombre);
            $("#descripcion").text(data.descripcion);
            $("#image").attr("src",data.url);
        }
    });
}