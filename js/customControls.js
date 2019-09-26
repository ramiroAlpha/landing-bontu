<script>
    var jsonCustom =
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
}
];


        $(document).ready(function () {
        myFunction(jsonCustom);
});


        function myFunction(jsonCustom) {
        jsonCustom.forEach(element => {
            console.log(element);
            var inputElement = document.createElement(element.control);
            switch (element.control) {
                case "input":
                    $(inputElement).attr("placeholder", element.placeholder)
                    $(inputElement).attr("type", element.type)
                    $(inputElement).attr("maxlength", element.maxlength)
                    $(inputElement).attr("minlength", element.minlength)
                    $(inputElement).attr("required", element.isRequired)
                    $(inputElement).attr("class", element.class)
                    break;
            }
            document.getElementById("myCustom").appendChild(inputElement);
        });
}

    </script>