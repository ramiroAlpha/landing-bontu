var divVideo = {
    // control: 'iFrame',
    // id: "video",
    // src: "https://www.youtube.com/embed/cBusDEvg9Tw?controls=0",
    // class: "embed-responsive-item",
    // allowfullscreen: true
    control: 'div',
    id: "divVideo",
    class: "embed-responsive embed-responsive-16by9",
    elements: {
        control: 'div',
        id: "divVideo2",
        class: "embed-responsive embed-responsive-16by9",
        elements: {
            control: "qasd"

        }
    }

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
    VideSection:
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
        
        // // var inputElement = document.createElement(element.control);
        // for (e in element) {
        //     switch (e) {
        //         case "control":
        //             var inputElement = document.createElement(element.control);
        //             break;
        //         case "elements":
        //             for (e in element) {


        //             }
        //             if (e != "control") {
        //                 $(inputElement).attr(e, element[e])
        //             }
        //             else {
        //                 var inputElement = document.createElement(element.control);
        //             }

        //     }
        //     if (element.control != "div") {
        //         document.getElementById(divId).appendChild(inputElement);
        //     }
        });
}

