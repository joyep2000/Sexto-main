
class Ropa_Model {
    constructor(
      RopaId,
      Codigo,
      Cantidad,
      Tipo,
      Modelo,
      Precio,
      Talla,
      Color,
      Marca,
      Ruta
    ) {
      this.RopaId = RopaId;
      this.Codigo = Codigo;
      this.Cantidad = Cantidad;
      this.Tipo = Tipo;
      this.Modelo = Modelo;
      this.Precio = Precio;
      this.Talla = Talla;
      this.Color = Color;
      this.Marca = Marca;
      this.Ruta = Ruta;
    }
    todos() {
      var html = "";
      $.get("../../Controllers/ropa.controller.php?op=" + this.Ruta, (res) => {
        res = JSON.parse(res);
        $.each(res, (index, valor) => {
          var fondo;
          if(valor.Marca == "Tommy") fondo ="bg-primary"
          else if(valor.Marca == "Gap") fondo = "bg-success"
          else if(valor.Marca == "Aeropostal") fondo = "bg-warning"
          else if(valor.Marca == "Levis") fondo = "bg-danger"
          else if(valor.Marca == "Nautica") fondo = "bg-info"
          html += `<tr>
                  <td>${index + 1}</td>
                  <td>${valor.Tipo}</td>
                  <td>${valor.Modelo}</td>
                  <td>${valor.Cantidad}</td>
                  <td>${valor.Precio}</td>
                  <td><div class="d-flex align-items-center gap-2">
                  <span class="badge ${fondo} rounded-3 fw-semibold">${
                    valor.Marca
                  }</span>
              </div></td>
              <td>
              <button class='btn btn-success' onclick='editar(${
                valor.RopaId
              })'>Editar</button>
              <button class='btn btn-danger' onclick='eliminar(${
                valor.RopaId
              })'>Eliminar</button>
              <button class='btn btn-info' onclick='ver(${
                valor.RopaId
              })'>Ver</button>
              </td></tr>
                  `;
        });
        $("#tabla_ropas").html(html);
      });
    }
  
    insertar() {
      var dato = new FormData();
      dato = this.Marca;
     $.ajax({
      url: "../../Controllers/ropa.controller.php?op=insertar",
      type: "POST",
      data: dato,
      contentType: false,
      processData: false,
      success: function (res) {
          res = JSON.parse(res);
          if(res === "ok"){
              Swal.fire("ropas", "Prenda Ingresada", "success");
              todos_controlador();
          }else{
              Swal.fire("Error", res, "error"); 
          }
      }
     });
     this.limpia_Cajas();    
    }
  
    limpia_Cajas(){
      document.getElementById("Codigo").value = "";
      document.getElementById("Cantidad").value = "";  
      document.getElementById("Tipo").value = "";
      document.getElementById("Modelo").value = "";
      document.getElementById("Precio").value = "";
      document.getElementById("Talla").value = "";
      document.getElementById("Color").value = "";
      document.getElementById("Marca").value = "";
      $("#Modal_ropa").modal("hide");
    }
  }
  