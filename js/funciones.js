// // variables
// (function(){
//     var tareaInput = document.getElementById("tareaInput");
//     var inputBtn = document.getElementById("inputBtn");
//     var lista = document.getElementById("lista");

//     //funciones
//         var agregarTarea = function(){
//             var tarea = tareaInput.value;
//             var nuevaTarea = document.createElement("li");
//             var enlace = document.createElement("a");
//             var contenido = document.createTextNode(tarea);

//             if(tarea === "") {
//                 tareaInput.setAttribute("placeholder","Agrega una Tarea valida");
//                 tareaInput.className = "error";
//                 return false;
//             }

//             enlace.appendChild(contenido);
//             enlace.setAttribute("href", "#");
//             nuevaTarea.appendChild(enlace);
//             lista.appendChild(nuevaTarea);

//             tareaInput.value = "";

//             for (var i = 0; i <= lista.children.length -1; i++) {
//                 lista.children[i].addEventListener("click", function(){
//                     this.parentNode.removeChild(this);
//                 });
//             }

//         }

//         var cambioClase = function() {
//             tareaInput.className = "tareaInput";
//             tareaInput.setAttribute("placeholder","Agrega una tarea")
//         }

//         var eliminarTarea = function() {
//             this.parentNode.removeChild(this)
//         }
//     //eventos

//     //EVENTO PARA EL BOTON
//         inputBtn.addEventListener("click", agregarTarea);
    
//     //EVENTO PARA CAMBIAR EL COLOR CUANDO EL INPUT NO TIENE NADA ESCRITO
//         tareaInput.addEventListener("click", cambioClase);

//     //EVENTO PARA AGREGAR EL EVENTO A TODOS LOS ELEMENTOS DE LA LISTA
//         for (var i = 0; i <= lista.children.length -1; i++) {
//             lista.children[i].addEventListener("click",eliminarTarea)
//         }
// }());

//<===========><=================><=======================><=============================>

(function(){
    //VARIABLES
        var tareaInput = document.getElementById("tareaInput");
        var inputBtn = document.getElementById("inputBtn");
        var lista = document.getElementById("lista");

    // FUNCIONES
        var agregandoTarea = function() {
            var tarea = tareaInput.value;
                if( tarea === "") {
                    alert("Existen campos sin rellenar");
                   tareaInput.setAttribute("placeholder","Agrega una tarea valida");
                   tareaInput.className = "error";

                    return false;
                }

            var contenido = document.createTextNode(tarea);
            var enlace = document.createElement("a");
            var nuevaTarea = document.createElement("li")

            enlace.appendChild(contenido);
            enlace.setAttribute("href","#");
            nuevaTarea.appendChild(enlace);
            lista.appendChild(nuevaTarea);

            tareaInput.value = "";   
            
            for ( var i = 0; i <= lista.children.length -1; i++) {
                lista.children[i].addEventListener("click",eliminarTarea)
            }

        }

        var eliminarTarea = function() {
            alert("acaba de eliminar esta tarea");
            this.parentNode.removeChild(this)
        }

        var restituirClase = function() {
            tareaInput.className = "tareaInput";
            tareaInput.setAttribute("placeholder","Agrega una tarea");
        }

    //EVENTOS
        inputBtn.addEventListener("click",agregandoTarea)

        for ( var i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener("click",eliminarTarea)
        }

        tareaInput.addEventListener("click",restituirClase)


}());