// <div class="container-fluid max">
//             <div class="row space">
//                 <div class="col-sm-12">
//                     <p>Si tienes alguna duda por favor déjanos tus datos y nos pondremos en contacto:</p>
//                     <form role="form" method="post" id="form_ingreso" name="form_ingreso" data-toggle="validator"
//                         action="https://katana.alphacredit.mx/vg/gestion/apps/AXS/bontu.cgi"
//                         enctype="multipart/form-data">
//                         <div class="row formulario">
//                             <div class="col-sm">
//                                 <input type="text" class="form-control" placeholder="Nombre..." name="nombre">
//                             </div>
//                             <div class="col-sm">
//                                 <input type="text" class="form-control" placeholder="Correo electrónico..." name="mail">
//                             </div>
//                             <div class="col-sm">
//                                 <input type="text" class="form-control" placeholder="Teléfono..." name="telefono">
//                             </div>
//                             <div class="col-sm-2">
//                                 <input type="submit" class="form-control" value="Enviar">
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>



$(document).ready(function () {
    for (div in jsonCustom) {
        myFunction(jsonCustom[div], div);
    }
});


function myFunction(elementos, divId) {
    elementos.forEach(element => {
        var inputElement = document.createElement(element.control);
        for (e in element) {
            $(inputElement).attr(e, element[e])
        }
        document.getElementById(divId).appendChild(inputElement);
    });
}



function anidados(){
    var elemento = document.createElement("div")

}