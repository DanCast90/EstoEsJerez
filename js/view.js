var modal;
var headers;
var folder;
var typeOfEntity;
let entity;
//--------------------------------------FUNCION PARA CREAR LA TABLA PARA USUARIOS----------------------------------
function table(data, headers,ent) {
    // Crear la tabla
    let table = document.createElement('table');
    table.classList.add('table', 'table-dark');

    // Crear el encabezado de la tabla
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    headerRow.classList.add('table', 'table-custom');
    headers.forEach(function (headerText) {
        let th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Crear el cuerpo de la tabla
    let tbody = document.createElement('tbody');

    data.forEach(function (rowData) {
        if (rowData.ID != currentUser.ID) {
            let row = document.createElement('tr');

            // Columna Nombre
            let nombreCell = document.createElement('td');
            nombreCell.textContent = rowData.Nombre;
            row.appendChild(nombreCell);

            // Columna Apellidos
            let apellidosCell = document.createElement('td');
            apellidosCell.textContent = rowData.Apellidos;
            row.appendChild(apellidosCell);

            // Columna RFC
            let rfcCell = document.createElement('td');
            rfcCell.textContent = rowData.RFC;
            row.appendChild(rfcCell);

            // Columna Acciones
            let accionesCell = document.createElement('td');

            // Botón Editar
            let editarButton = document.createElement('button');
            editarButton.classList.add('btn', 'btn-danger', "btn-custom", 'mx-1');
            editarButton.setAttribute("id", rowData.ID);
            editarButton.textContent = 'Editar';
            editarButton.addEventListener('click', function (event) {
                let id = event.target.id;
                editGeneric(id,ent);
            });
            //icono editar
            let iconoEdit=document.createElement('i');
            iconoEdit.classList.add('fa-solid','fa-user-pen','mx-2');
            editarButton.appendChild(iconoEdit);
            accionesCell.appendChild(editarButton);
            let eliminarButton = document.createElement('button');
            eliminarButton.classList.add('btn', 'btn-danger',"btn-custom", 'mx-1');
            eliminarButton.setAttribute("id", rowData.ID);
            eliminarButton.textContent = 'Eliminar';
            eliminarButton.addEventListener('click', function (event) {
                let id = event.target.id;
                createCustomModal("Eliminar", "¿Seguro de que quieres eliminar? Esta acción es irreversible.", id);
            });
            let iconoDelete=document.createElement('i');
            iconoDelete.classList.add('fa-solid','fa-trash','mx-2');
            eliminarButton.appendChild(iconoDelete);
            accionesCell.appendChild(eliminarButton);

            row.appendChild(accionesCell);
            tbody.appendChild(row);
        }
    });

    table.appendChild(tbody);

    return table;
}

//--------------------------------------FUNCION PARA CREAR LA TABLA PARA LOS PRODUCTOS----------------------------------
function tableProductos(data, headers,ent,typeOfEntity) {
    // Crear la tabla
    let table = document.createElement('table');
    table.classList.add('table', 'table-dark');

    // Crear el encabezado de la tabla
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    headerRow.classList.add('table', 'table-custom');
    headers.forEach(function (headerText) {
        let th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Crear el cuerpo de la tabla
    let tbody = document.createElement('tbody');

    data.forEach(function (rowData) {
        if (rowData.tipoProducto === typeOfEntity) {
            let row = document.createElement('tr');

            // Columna Nombre
            let nombreCell = document.createElement('td');
            nombreCell.textContent = rowData.Nombre;
            row.appendChild(nombreCell);

            // Columna tipo
            let typeCell = document.createElement('td');
            if(rowData.tipoProducto==="1")
            typeCell.textContent = "Artesania";
            else
            typeCell.textContent = "Producto";
            row.appendChild(typeCell);

            // Columna Acciones
            let accionesCell = document.createElement('td');

            // Botón Editar
            let editarButton = document.createElement('button');
            editarButton.classList.add('btn', 'btn-danger', "btn-custom", 'mx-1');
            editarButton.setAttribute("id", rowData.ID);
            editarButton.textContent = 'Editar';
            editarButton.addEventListener('click', function (event) {
                let id = event.target.id;
                editGeneric(id,ent);
            });
            //icono editar
            let iconoEdit=document.createElement('i');
            iconoEdit.classList.add('fa-solid','fa-user-pen','mx-2');
            editarButton.appendChild(iconoEdit);
            accionesCell.appendChild(editarButton);
            let eliminarButton = document.createElement('button');
            eliminarButton.classList.add('btn', 'btn-danger',"btn-custom", 'mx-1');
            eliminarButton.setAttribute("id", rowData.ID);
            eliminarButton.textContent = 'Eliminar';
            eliminarButton.addEventListener('click', function (event) {
                let id = event.target.id;
                createCustomModal("Eliminar", "¿Seguro de que quieres eliminar? Esta acción es irreversible.", id);
            });
            let iconoDelete=document.createElement('i');
            iconoDelete.classList.add('fa-solid','fa-trash','mx-2');
            eliminarButton.appendChild(iconoDelete);
            accionesCell.appendChild(eliminarButton);

            row.appendChild(accionesCell);
            tbody.appendChild(row);
        }
    });

    table.appendChild(tbody);

    return table;
}

//--------------------------------------FUNCION PARA CREAR LA TABLA PARA SERVICIOS----------------------------------
function tableServicios(data, headers,ent) {
    // Crear la tabla
    let table = document.createElement('table');
    table.classList.add('table', 'table-dark');

    // Crear el encabezado de la tabla
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    headerRow.classList.add('table', 'table-custom');
    headers.forEach(function (headerText) {
        let th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Crear el cuerpo de la tabla
    let tbody = document.createElement('tbody');

    data.forEach(function (rowData) {
            let row = document.createElement('tr');

            // Columna Nombre
            let nombreCell = document.createElement('td');
            nombreCell.textContent = rowData.Nombre;
            row.appendChild(nombreCell);

            // Columna Tipo Servicio
            let tipoServCell = document.createElement('td');
            tipoServCell.textContent = rowData.tipoServicio;
            row.appendChild(tipoServCell);

            // Columna Acciones
            let accionesCell = document.createElement('td');

            // Botón Editar
            let editarButton = document.createElement('button');
            editarButton.classList.add('btn', 'btn-danger', "btn-custom", 'mx-1');
            editarButton.setAttribute("id", rowData.ID);
            editarButton.textContent = 'Editar';
            editarButton.addEventListener('click', function (event) {
                let id = event.target.id;
                editGeneric(id,ent);
            });
            //icono editar
            let iconoEdit=document.createElement('i');
            iconoEdit.classList.add('fa-solid','fa-user-pen','mx-2');
            editarButton.appendChild(iconoEdit);
            accionesCell.appendChild(editarButton);
            let eliminarButton = document.createElement('button');
            eliminarButton.classList.add('btn', 'btn-danger',"btn-custom", 'mx-1');
            eliminarButton.setAttribute("id", rowData.ID);
            eliminarButton.textContent = 'Eliminar';
            eliminarButton.addEventListener('click', function (event) {
                let id = event.target.id;
                createCustomModal("Eliminar", "¿Seguro de que quieres eliminar? Esta acción es irreversible.", id);
            });
            let iconoDelete=document.createElement('i');
            iconoDelete.classList.add('fa-solid','fa-trash','mx-2');
            eliminarButton.appendChild(iconoDelete);
            accionesCell.appendChild(eliminarButton);

            row.appendChild(accionesCell);
            tbody.appendChild(row);
        
    });

    table.appendChild(tbody);

    return table;
}



//--------------------------------FUNCION PARA LLENAR LA TABLA DE USUARIOS-----------------------------------
function getData(headers,folder,entity) {
    $.ajax({
        type: "POST",
        url: "../../php/"+folder+"/getAll.php",
        dataType: "text",
        processData: false,
        contentType: false,
        success: function (response) {
            var data = JSON.parse(response);
            var tabla = table(data,headers,entity);
            document.getElementById('tabla-container').appendChild(tabla);
        }
    });
}
//--------------------FUNCION PARA LLENAR LA TABLA DE PRODUCTOS/ARTESANIAS-----------------------------------
function getDataP(headers,folder,entity,typeOfEntity) {
    $.ajax({
        type: "POST",
        url: "../../php/"+folder+"/getAll.php",
        dataType: "text",
        processData: false,
        contentType: false,
        success: function (response) {
            var data = JSON.parse(response);
            var tabla = tableProductos(data,headers,entity,typeOfEntity);
            document.getElementById('tabla-container').appendChild(tabla);
        }
    });
}
//--------------------FUNCION PARA LLENAR LA TABLA DE SERVICIOS-----------------------------------
function getDataS(headers,folder,entity,typeOfEntity) {
    $.ajax({
        type: "POST",
        url: "../../php/"+folder+"/getAll.php",
        dataType: "text",
        processData: false,
        contentType: false,
        success: function (response) {
            var data = JSON.parse(response);
            var tabla = tableServicios(data,headers,entity);
            document.getElementById('tabla-container').appendChild(tabla);
        }
    });
}
//-----------------------------------------------FUNCION PARA ABRIR EL CRUD DE LAS LISTAS---------------------------
function editGeneric(id, nameOfView) {
    localStorage.setItem("id", id);
    openViewA(nameOfView,"crud",id);
   
}


//------------------------------FUNCION PARA ELIMINAR CUALQUIER REGISTRO DE CUALQUIER LISTA--------------------------
function deleteGeneric(id,entity) {
    let formdata=new FormData();
    formdata.append('id',id);
    $.ajax({
        type: "POST",
        url: "../../php/"+folder+"/delete.php",
        data: formdata,
        dataType: "text",
        processData: false,
        contentType: false,
        success: function (response) {
            var data = JSON.parse(response);
            modal.hide()
            if (data.status===1) {
                showToast("Exito",data.message);
                $("#tabla-container").empty();
                if(entity==="" || entity===null || entity===undefined)
                    getData(headers,folder);
                else if(entity=="artesanias")
                    getDataP(headers,folder,entity,typeOfEntity);
                else if(entity=="productos")
                    getDataP(headers,folder,entity,typeOfEntity);
                else if(entity=="servicios")
                    getDataS(headers,folder,entity,typeOfEntity);
            }else if (data.status===0) {
                showToast("Error",data.message);
            }else if(data.status===-1) {
                showToast("Error",data.message);
            }
        }
    });
}


//------------FUNCION PARA CREAR UN MODAL DE CONFIRMACION PARA ELIMINAR CUALQUIER REGISTRO DE CUALQUIER LISTA--------------
function createCustomModal(title, content, id) {
    // Obtener el elemento body
    var body = document.getElementsByTagName('body')[0];

    // Crear el contenedor del modal
    var modalContainer = document.createElement('div');
    modalContainer.classList.add('modal', 'fade');
    modalContainer.setAttribute('tabindex', '-1');
    modalContainer.setAttribute('role', 'dialog');
    modalContainer.setAttribute('aria-labelledby', 'customModalLabel');
    modalContainer.setAttribute('aria-hidden', 'true');

    // Crear el diálogo del modal
    var modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog', 'modal-dialog-centered');

    // Crear el contenido del modal
    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Crear el encabezado del modal
    var modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header', 'bg-dark', 'text-light');

    // Crear el título del modal
    var modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.textContent = title;
    modalHeader.appendChild(modalTitle);

    // Crear el botón de cierre del modal
    var closeButton = document.createElement('button');
    closeButton.classList.add('btn-close', 'btn-close-white');
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');
    modalHeader.appendChild(closeButton);

    // Crear el cuerpo del modal
    var modalBody = document.createElement('div');
    modalBody.classList.add('modal-body', 'bg-dark');
    modalBody.innerHTML = content;

    // Crear el pie del modal
    var modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer', 'bg-dark');

    // Crear el botón de acción del modal
    var actionButton = document.createElement('button');
    actionButton.classList.add('btn', 'btn-danger');
    actionButton.setAttribute('type', 'button');
    actionButton.textContent = 'Aceptar';
    actionButton.addEventListener('click', function () {
        deleteGeneric(id,entity);
    });
    modalFooter.appendChild(actionButton);

    var cancelButton = document.createElement('button');
    cancelButton.classList.add('btn', 'btn-secondary');
    cancelButton.setAttribute('type', 'button');
    cancelButton.setAttribute('data-bs-dismiss', 'modal');
    cancelButton.textContent = 'Cancelar';
    modalFooter.appendChild(cancelButton);

    // Agregar el encabezado, cuerpo y pie al contenido del modal
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    // Agregar el contenido al diálogo del modal
    modalDialog.appendChild(modalContent);

    // Agregar el diálogo al contenedor del modal
    modalContainer.appendChild(modalDialog);

    // Agregar el contenedor del modal al body
    body.appendChild(modalContainer);

    // Mostrar el modal
    modal = new bootstrap.Modal(modalContainer);
    modal.show();
}
