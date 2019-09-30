div = basicStructure('div')
div1 = basicStructure('div')
div2 = basicStructure('div')
div3 = basicStructure('div')
div4 = basicStructure('div')

navbar = basicStructure('nav')

h2_header = basicStructure('h2')
span_h2_header = basicStructure('span')

a_bontu = basicStructure('a')
a_producto = basicStructure('a')
a_cfuncoina = basicStructure('a')
a_contacto = basicStructure('a')
a_login = basicStructure('a')

button_menu = basicStructure('button')
span_button_menu = basicStructure('span')

ul_menu = basicStructure('ul')
ul_login = basicStructure('ul')

li_menu_producto = basicStructure('Li')
li_menu_cfunciona = basicStructure('li')
li_menu_contacto = basicStructure('li')
li_login = basicStructure('li')


div.attr.class = 'container-fluid'
div.childComponent['div1'] = div1
div.childComponent['div4'] = div4

div1.attr.class = 'row'
div1.childComponent['div2'] = div2

div2.attr.class = 'mcol-sm-12 fixed-top'
div2.childComponent['navbar'] = navbar

div3.attr.class = 'collapse navbar-collapse'
div3.attr.id = 'navbarNav'
div3.childComponent['ul_menu'] = ul_menu
div3.childComponent['ul_login'] = ul_login

div4.attr.class = 'col-sm-7'
div4.childComponent['h2_header'] = h2_header

h2_header.text['texto'] = 'Tus ventas a través de plataformas digitales son la llave para obtener el crédito que esperabas'
h2_header.childComponent['br'] = basicStructure('br')
h2_header.childComponent['span_h2_header'] = span_h2_header

span_h2_header.text['texto'] = 'Sin garantías ni avales'

navbar.attr.class = 'navbar navbar-expand-lg navbar-dark'
navbar.childComponent['a_bontu'] = a_bontu
navbar.childComponent['button_menu'] = button_menu
navbar.childComponent['div3'] = div3

a_bontu.attr.class = 'navbar-brand'
a_bontu.attr.href = '#'
a_bontu.text = {}
a_bontu.text['Bontu'] = 'Bonut'

button_menu.attr.class = 'navbar-toggler'
button_menu.attr.type = 'button'
button_menu.attr['data-toggle'] = 'collapse'
button_menu.attr['data-target'] = '#navbarNav'
button_menu.attr['aria-controls'] = 'navbarNav'
button_menu.attr['aria-expanded'] = 'false'
button_menu.attr['aria-label'] = 'Toggle navigation'
button_menu.childComponent['span_button_menu'] = span_button_menu

span_button_menu.attr.class = 'navbar-toggler-icon'

ul_menu.attr.class = 'navbar-nav nav1'
ul_menu.childComponent['li_menu_producto'] = li_menu_producto
ul_menu.childComponent['li_menu_cfunciona'] = li_menu_cfunciona
ul_menu.childComponent['li_menu_contacto'] = li_menu_contacto

li_menu_producto.attr.class = 'nav-item'
li_menu_producto.childComponent['a_producto'] = a_producto

a_producto.attr.class = 'nav-link'
a_producto.attr.href = '#producto'
a_producto.text = {}
a_producto.text['a_producto'] = 'Producto'

li_menu_cfunciona.attr.class = 'nav-item'
li_menu_cfunciona.childComponent['a_cfuncoina'] = a_cfuncoina

a_cfuncoina.attr.class = 'nav-link'
a_cfuncoina.attr.href = '#funciona'
a_cfuncoina.text = {}
a_cfuncoina.text['a_cfuncoina'] = '¿Cómo funciona?'

li_menu_contacto.attr.class = 'nav-item'
li_menu_contacto.childComponent['a_producto'] = a_contacto

a_contacto.attr.class = 'nav-link'
a_contacto.attr.href = '#contacto'
a_contacto.text = {}
a_contacto.text['a_contacto'] = 'Contáctanos'


ul_login.attr.class = 'navbar-nav ml-auto'
ul_login.childComponent['li_login'] = li_login

li_login.attr.class = 'nav-item'
li_login.childComponent['a_login'] = a_login

a_login.attr.class = 'nav-link login'
a_login.attr.href = '#LOGIN'
a_login.text = {}
a_login.text['login'] = 'Iniciar Sesión'

addJson2Html({ div }, 'header')

