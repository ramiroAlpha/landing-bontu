function hardMakeCode(components) {
    for (let component in components) {
        let ncomponent = document.createElement(components[component].typeName)
        components[component].elemento = ncomponent
        if (components[component].attr) {
            addAttr(ncomponent, components[component].attr)
        }
        if (components[component].text) {
            addValues(ncomponent, components[component].text)

        }
        if (components[component].childComponent) {
            hardMakeCode(components[component].childComponent)
        }

    }
}

function addAttr(element, attrs) {
    for (let attr in attrs) {
        $(element).attr(attr, attrs[attr])
    }
}
function addValues(element, attrs) {
    for (let attr in attrs) {
        $(element).text(attrs[attr])
    }
}

function constructor(cElements, ee = null) {
    for (let e in cElements) {
        if (ee) {
            ee.appendChild(cElements[e].elemento)
        }
        if (cElements[e].childComponent) {
            constructor(cElements[e].childComponent, cElements[e].elemento)
        }

    }
}


function addJson2Html(jsonStructure, container) {
    hardMakeCode(jsonStructure)
    constructor(jsonStructure)
    for (let e in jsonStructure) {
        document.getElementById(container).appendChild(jsonStructure[e]['elemento'])
    }
}

function basicStructure(typeComponent, attr=null, text=null, childComponent=null) {
    return {
        typeName: typeComponent,
        attr: attr instanceof Object && attr != null ? attr: {},
        text: text instanceof Object && text != null ? text: {},
        childComponent: childComponent instanceof Object && childComponent != null ? childComponent: {}
    }

}

function addChild(fatherComponent, childsComponent) {
    let identificador = 0
    childsComponent.forEach(element => {
        fatherComponent.childComponent[""+identificador] = element
        identificador = identificador + 1
    });
    // fatherComponent.childComponent[name] = childComponent
    return fatherComponent

}


export {addJson2Html, basicStructure, addChild}