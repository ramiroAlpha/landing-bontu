var videoUno = {
    control: 'iFrame',
    id: "video",
    src: "https://www.youtube.com/embed/cBusDEvg9Tw?controls=0",
    class: "embed-responsive-item",
    allowfullscreen: true
}

var jsonCustom = {
    myCustom:
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
        ]
};

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

