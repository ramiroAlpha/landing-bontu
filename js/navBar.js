div = basicStructure("div")
div1 = basicStructure("div")
div2 = basicStructure("div")
nav = basicStructure("nav")
a = basicStructure("a")
a2 = basicStructure("a")
button = basicStructure("button")
span = basicStructure("span")
div3 = basicStructure("div")
ul = basicStructure("ul")
ul2 = basicStructure("ul")
li = basicStructure("Li")
li1 = basicStructure("li1")
li2 = basicStructure("li2")


div.attr.class = "container-fluid"
div.childComponent["div1"] = div1

div1.attr.class = "row"
div1.childComponent["div2"] = div2

div2.attr.class = "mcol-sm-12 fixed-top"
div2.childComponent["nav"] = nav

nav.attr.class = "navbar navbar-expand-lg navbar-dark"
nav.childComponent["a"] = a
nav.childComponent["button"] = button
nav.childComponent["div3"] = div3

a.attr.class = "navbar-brand"
a.attr.href = "#"
a.text = {}
a.text["PAgina de guafles"] = "Pagina de waffles"

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
div3.childComponent["ul"] = ul
div3.childComponent["ul2"] = ul2

ul.attr.class="navbar-nav nav1"
ul.childComponent["li"] = li

li.attr.class="nav-item"
li.childComponent["a2"] = a2

a2.attr.class="nav-link" 
a2.attr.href="#producto"
a2.text = {}
a2.text["Producto"] = "cosas pal hogar"

console.log({div})
addJson2Html({div}, "header")

