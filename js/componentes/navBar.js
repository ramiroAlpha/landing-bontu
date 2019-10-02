import {const_strings, const_ref} from './projectStrings.js';
import {basicStructure, addChild} from '../tools/supportJsonInterpreter.js'


let div = basicStructure('div', { class: 'container-fluid' })
let div1 = basicStructure('div', { class: 'row' })
let div2 = basicStructure('div', { class: 'mcol-sm-12 fixed-top' })
let div3 = basicStructure('div', { class: 'collapse navbar-collapse', id: 'navbarNav' })
let div4 = basicStructure('div', { class: 'col-sm-7' })

let navbar = basicStructure('nav', { class: 'navbar navbar-expand-lg navbar-dark' })

let h2_header = basicStructure('h2', {}, { 'texto': const_strings.header })
let span_h2_header = basicStructure('span', {}, { 'texto': const_strings.span_header })

let a_bontu = basicStructure('a', { class: 'navbar-brand', href: const_ref.home }, { 'texto': const_strings.bontu })
let a_producto = basicStructure('a', { class: 'nav-link', href: const_ref.producto }, { "texto":  const_strings.product})
let a_cfuncoina = basicStructure('a', { class: 'nav-link', href: const_ref.funciona }, { "texto": const_strings.funciona })
let a_contacto = basicStructure('a', { class: 'nav-link', href: const_ref.contacto }, { "texto": const_strings.contacto })
let a_login = basicStructure('a', { class: 'nav-link login', href: const_ref.login }, { "texto": const_strings.login })

let button_menu = basicStructure('button', {
    class: 'navbar-toggler',
    type: 'button',
    ['data-toggle']: 'collapse',
    ['data-target']: const_ref.navbarNav,
    ['aria-controls']: 'navbarNav',
    ['aria-expanded']: 'false',
    ['aria-label']: 'Toggle navigation'
})
let span_button_menu = basicStructure('span', { class: 'navbar-toggler-icon' })

let ul_menu = basicStructure('ul', { class: 'navbar-nav nav1' })
let ul_login = basicStructure('ul', { class: 'navbar-nav ml-auto' })

let li_menu_producto = basicStructure('li', { class: 'nav-item' })
let li_menu_cfunciona = basicStructure('li', { class: 'nav-item' })
let li_menu_contacto = basicStructure('li', { class: 'nav-item' })
let li_login = basicStructure('li', { class: 'nav-item' })


{addChild(div,
    [
        addChild(div1,
            [
                addChild(div2,
                    [
                        addChild(navbar,
                            [
                                a_bontu,
                                addChild(button_menu,
                                    [
                                        span_button_menu
                                    ]),
                                addChild(div3,
                                    [
                                        addChild(ul_menu,
                                            [
                                                addChild(li_menu_producto,
                                                    [
                                                        a_producto
                                                    ]),
                                                addChild(li_menu_cfunciona,
                                                    [
                                                        a_cfuncoina
                                                    ]),
                                                addChild(li_menu_contacto,
                                                    [
                                                        a_contacto
                                                    ])]),
                                        addChild(ul_login,
                                            [
                                                addChild(li_login,
                                                    [
                                                        a_login
                                                    ])])])])])]),
        addChild(div4,
            [
                addChild(h2_header,
                    [
                        basicStructure('br'),
                        span_h2_header
                    ])])])}
export {div}
