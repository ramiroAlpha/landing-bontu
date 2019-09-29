function hardMakeCode(components) {
    for (component in components) {
        ncomponent = document.createElement(components[component].typeName)
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
    for (attr in attrs) {
        $(element).attr(attr, attrs[attr])
    }
}
function addValues(element, attrs) {
    for (attr in attrs) {
        $(element).text(attrs[attr])
    }
}

function constructor(cElements, ee = null) {
    for (e in cElements) {
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
    for (e in jsonStructure) {
        document.getElementById(container).appendChild(jsonStructure[e]['elemento'])
    }
}

function basicStructure(typeComponent) {
    return {
        typeName: typeComponent,
        attr: {},
        childComponent: {}
    }

}

function addChild(fatherComponent, childComponent, name) {
    fatherComponent.childComponent[name] = childComponent
    return fatherComponent

}