var videoUno = {
    control: 'iFrame',
    id: "video",
    src: "https://www.youtube.com/embed/cBusDEvg9Tw?controls=0",
    class: "embed-responsive-item",
    allowfullscreen: true
}

var jsonCustom = {
    /*  myCustom:
          [
              {
                  control: 'input',
                  placeholder: 'Enter name',
                  maxlength: 10,
                  minlength: 1,
                  id: 'nameId',
                  name: 'nameCustom',
                  type: 'text',
                  class: "form-control form-control-sm",
                  isRequired: true
              },
              {
                  control: 'input',
                  placeholder: 'Enter name',
                  maxlength: 10,
                  minlength: 1,
                  id: 'name2',
                  name: 'name2',
                  type: 'password',
                  class: "form-control form-control-sm",
                  isRequired: true
              },
  
          ],
      divVideo:
          [
              videoUno
          ],
  */
    divFooter:
        [
            {
                control: 'ul',
                id: 'ul1',
                childControl:
                    [
                        {
                            control: 'li',
                            id: 'li1',
                            childControl: [
                                {
                                    control: 'a',
                                    text: 'text'
                                }
                            ]
                        }
                    ]
            }
        ]
}


/*
<ul>
    <li><a href="legal/index.html#constitucion">Aviso sobre Constitución</a></li>
    <li><a href="legal/index.html#terminos">Términos y Condiciones de Uso</a></li>
    <li><a href="legal/index.html#aviso">Aviso de Privacidad</a></li>
    <li><a href="legal/index.html#leyendas">Leyendas de Riesgo</a></li>
</ul>
*/

$(document).ready(function () {    
    for (div in jsonCustom) {
        myFunction2(jsonCustom[div], div);
    }
});



function myFunction(nodes, divId, element = "", appendControl) {

    nodes.forEach(properties => {

        if (classIndex == 0) {
            inputElement = document.createElement(properties.control);
        }

        for (var type in properties) {
            if (type == 'childControl') {
                classIndex++;
                isControl = true;
                $(inputElement).attr("id", classIndex);
                if (element != "") {
                    var newElement = document.createElement(properties.control);
                    $(newElement).attr("id", "newElement" + classIndex);
                    $(newElement).appendTo(inputElement);
                    myFunction(properties[type], classIndex, "");
                } else {
                    myFunction(properties[type], classIndex, "element");
                }
            }
            else {
                if (element != "") {
                    var newElement = document.createElement(properties.control);
                    $(newElement).appendTo(inputElement);
                }
                else {
                    $(inputElement).attr(type, properties[type])
                    isControl = false;
                }
            }
        }

        /*if (isControl) {
                var newElement = document.createElement(properties.control);
                $("<p>Everyone !!!</p>").appendTo(inputElement);
                isControl = false;
            } else {
                $(inputElement).attr(type, properties[type])
                isControl = false;
            }

        }*/

        //document.getElementById(divId).appendChild(inputElement);
    });
    console.log(inputElement);
}


var classIndex = 0;
var inputElement;

function myFunction2(nodes, divId, isControl = false) {    
    nodes.forEach(properties => {
        if (classIndex == 0) {
            inputElement = document.createElement(properties.control);
            $(inputElement).attr("id", properties.id);
            classIndex++;
        }


        for (var property in properties) {           
            console.log(property);
            if (property == 'childControl') {
                $("<p>vale</p>").appendTo(inputElement);                
                myFunction2(properties[property], "ul1", true);
                break;
            }
            else {
                $(inputElement).attr(property, properties[property])                
            }
        }
    });

    console.log(inputElement);

}


/*

function myFunction(elementos, divId) {
    elementos.forEach(element => {
        var inputElement = document.createElement(element.control);
        for (e in element) {
            $(inputElement).attr(e, element[e])
        }
        document.getElementById(divId).appendChild(inputElement);
    });
*/
