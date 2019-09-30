div = basicStructure("div")
div1 = basicStructure("div")
div2 = basicStructure("div")
div3 = basicStructure("div")

navbar = basicStructure("nav")

a_bontu = basicStructure("a")
a_producto = basicStructure("a")
a_cfuncoina = basicStructure('a')
a_contacto = basicStructure('a')

button = basicStructure("button")
span = basicStructure("span")

ul_menu = basicStructure("ul")
ul2 = basicStructure("ul")

li_menu_producto = basicStructure("Li")
li_menu_cfunciona = basicStructure("li")
li_menu_contacto = basicStructure("li")


div.attr.class = "container-fluid"
div.childComponent["div1"] = div1

div1.attr.class = "row"
div1.childComponent["div2"] = div2

div2.attr.class = "mcol-sm-12 fixed-top"
div2.childComponent["navbar"] = navbar

navbar.attr.class = "navbar navbar-expand-lg navbar-dark"
navbar.childComponent["a_bontu"] = a_bontu
navbar.childComponent["button"] = button
navbar.childComponent["div3"] = div3

a_bontu.attr.class = "navbar-brand"
a_bontu.attr.href = "#"
a_bontu.text = {}
a_bontu.text["Bontu"] = "Bonut"

button.attr.class = "navbar-toggler"
button.attr.type = "button"
button.attr["data-toggle"] = "collapse"
button.attr["data-target"] = "#navbarNav"
button.attr["aria-controls"] = "navbarNav"
button.attr["aria-expanded"] = "false"
button.attr["aria-label"] = "Toggle navigation"
button.childComponent["span"] = span

span.attr.class = "navbar-toggler-icon"

div3.attr.class = "collapse navbar-collapse"
div3.attr.id = "navbarNav"
div3.childComponent["ul_menu"] = ul_menu
div3.childComponent["ul2"] = ul2

ul_menu.attr.class="navbar-nav nav1"
ul_menu.childComponent["li_menu_producto"] = li_menu_producto
ul_menu.childComponent['li_menu_cfunciona'] = li_menu_cfunciona
ul_menu.childComponent['li_menu_contacto'] = li_menu_contacto

li_menu_producto.attr.class="nav-item"
li_menu_producto.childComponent["a_producto"] = a_producto

a_producto.attr.class="nav-link" 
a_producto.attr.href="#producto"
a_producto.text = {}
a_producto.text["a_producto"] = "Producto"

li_menu_cfunciona.attr.class="nav-item"
li_menu_cfunciona.childComponent["a_cfuncoina"] = a_cfuncoina

a_cfuncoina.attr.class="nav-link" 
a_cfuncoina.attr.href="#funciona"
a_cfuncoina.text = {}
a_cfuncoina.text["a_cfuncoina"] = "¿Cómo funciona?"

li_menu_contacto.attr.class="nav-item"
li_menu_contacto.childComponent["a_producto"] = a_contacto

a_contacto.attr.class="nav-link" 
a_contacto.attr.href="#contacto"
a_contacto.text = {}
a_contacto.text["a_contacto"] = "Contáctanos"






addJson2Html({div}, "header")

