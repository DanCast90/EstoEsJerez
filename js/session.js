function getInfo(){
    const urlParams = new URLSearchParams(window.location.search);
    const usuarioId = urlParams.get('id');
    let formdata = new FormData();
    formdata.append('usuarioId', usuarioId);
    $.ajax({
      type: "POST",
          url: "../../php/user/getOne.php",
          data: formdata,
          dataType: "text",
          processData: false,
          contentType: false,
      success: function (response) {
        var data = JSON.parse(response);
        currentSession(data);
        evaluatePermissions(currentUser.tipoUsuario);
      }
    });
    
  }