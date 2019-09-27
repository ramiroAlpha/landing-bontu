
var loQueSea = {
    nameVar: {
        typeName: "div",//tipo de componente
        prop: {
            //Propiedades del componente
            //ejemplo
            id: "adfas",
            class: "col-12 video",
            style: "text-align: center;"

        },
        childComponent: {
            divClass: {
                typeName: "div",
                prop: {
                    class: "embed-responsive embed-responsive-16by9"
                },
                childComponent: {
                    nameVar: {
                        typeName: "iframe",//tipo de componente
                        prop: {
                            //Propiedades del componente
                            //ejemplo
                            id: "adfas",
                            src: "https://www.youtube.com/embed/cBusDEvg9Tw?controls=0",
                            frameborder: "0",
                            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                            allowfullscreen: ''
                            // class: "embed-responsive-item"
                        }
                    },
                    

                }
            },
            divClass1: {
                typeName: "div",
                prop: {
                    class: "embed-responsive embed-responsive-16by9"
                },
                childComponent: {
                    algunh: {
                        typeName: "h3",
                        prop: {
                            id: "asdad"
                        },
                        values: {
                            value: "Hla mundo"

                        }
                    }
                }

                //Agrrega cuialquier componente hijo usando la misma estructura
                //ejemplo


            }
        }
    }
}
    

var jsonComponents = {
        otherul: {
            typeName: 'ul',
            prop: {
                id: ''
            },
            childComponent: {
                otherli: {
                    typeName: 'li',
                    prop: {
                        text: "This is text",
                        id: 'myId',

                    },
                    childComponent: {
                        otrerA: {
                            typeName: "a",
                            prop: {
                                id: "asdfsqad"
                            }
                        }
                    }

                },
                otherli1: {
                    typeName: 'li',
                    prop: {
                        text: "This is text",
                        id: 'myId'
                    }
                },
                otherli2: {
                    typeName: 'li',
                    prop: {
                        text: "This is text",
                        id: 'myId'
                    }
                },
            }

        },
        otherul1: {
            typeName: 'ul',
            prop: {
                id: ''
            },
            childComponent: {
                otherli: {
                    typeName: 'li',
                    prop: {
                        text: "This is text",
                        id: 'myId'
                    }
                },
                otherli1: {
                    typeName: 'li',
                    prop: {
                        text: "This is text",
                        id: 'myId'
                    }
                },
                otherli2: {
                    typeName: 'li',
                    prop: {
                        text: "This is text",
                        id: 'myId'
                    }
                },
            }

        }

    }

function hardMakeCode(components) {
        for (component in components) {
    // newComponent = makeComponent(component, components)
    ncomponent = document.createElement(components[component]['typeName'])
    components[component].elemento = ncomponent
    addAttr(ncomponent, components[component]['prop'])
    if (components[component]['values']) {
        addValues(ncomponent, components[component]['values'])

    }
    if (components[component]['childComponent']) {
        hardMakeCode(components[component]['childComponent'])
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
            ee.appendChild(cElements[e]["elemento"])
        }
        if (cElements[e]['childComponent']) {
            constructor(cElements[e]['childComponent'], cElements[e]["elemento"])
        }

    }
}


$(document).ready(function () {
    hardMakeCode(loQueSea)
    constructor(loQueSea)
    for (e in loQueSea) {
        document.getElementById('cck').appendChild(loQueSea[e]['elemento'])
    }
}
)