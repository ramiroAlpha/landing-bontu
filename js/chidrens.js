var jsonCustom = {
    divFooter: [
        {
            control: 'ul',
            id: '',
            childControl:
                [
                    {
                        control: 'li',
                        text: 'This is the text',
                        id: '',
                        childControl: [
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
                                control: 'a',
                                href: "legal/index.html#educacion">"Educación Financiera",
                                id: '',
                                text: 'Aviso sobre Constitución'
                            },
                            {
                                control: 'a',
                                href: 'legal/index.html#terminos',
                                id: '',
                                text: 'Términos y Condiciones de Uso'
                            },
                            {
                                control: 'a',
                                href: 'legal/index.html#aviso',
                                id: '',
                                text: 'Aviso de Privacidad'
                            },
                            {
                                control: 'a',
                                href: 'legal/index.html#leyendas',
                                id: '',
                                text: 'Leyendas de Riesgo'
                            }
                        ]
                    }
                ]
        }
    ]

};

$(document).ready(function () {
    for (div in jsonCustom) {
        myFunction(jsonCustom[div], div);
    }
});


function myFunction(elementos, divId, index = 0, elementoAdd = null, last_id = null) {
    if (elementoAdd != null &&  last_id!=null) {
        console.log(elementoAdd, last_id), 
        document.getElementById(last_id).appendChild(elementoAdd);
    }
    elementos.forEach(element => {
        recusrsivo(element, divId, index)
    });
}

function recusrsivo(element, divId, index) {
    for (e in element) {
        switch (e) {
            case "control":
                var last_id = index ? divId + index : divId
                index += 1
                element.id = divId + index
                inputElement = document.createElement(element[e]);
                break
            case "childControl":
                flag = false
                myFunction(element[e], divId, index, inputElement, last_id);
                break
            case "text":
                    $(inputElement).text(element[e])

            default:
                var flag = true
                $(inputElement).attr(e, element[e])

        }
    }
    if (flag) {
        console.log(inputElement, last_id)
        document.getElementById(last_id).appendChild(inputElement);
        flag instanceof Object
    }


}

