//archivo de donde llamar al procedimiento
//controlador

function init() {
    $("#form_ropas").on("submit", function (e) {
      guardaryeditar(e);
    });
  }
  
  $().ready(() => {
    //detecta carga de la pagina
    todos_controlador();
  });
  
  var todos_controlador = () => {
    var todos = new Ropa_Model("", "", "", "", "", "", "", "", "", "todos");
    todos.todos();
  }
  
  var guardaryeditar = (e)=>{
      e.preventDefault();
      var formData = new FormData($("#form_ropas")[0]);
      var ropas = new Ropa_Model('','','','','','','','', formData,'insertar');
      ropas.insertar();
  }
  
  ;init();
  