div2 = basicStructure('div')
div3 = basicStructure('div')
div4 = basicStructure('div')
div5 = basicStructure('div')
div6 = basicStructure('div')
div7 = basicStructure('div')
div8 = basicStructure('div')

img1 = basicStructure('img')
img2 = basicStructure('img')
img3 = basicStructure('img')

h3_prod1 = basicStructure('h3')
h3_prod2 = basicStructure('h3')
h3_prod3 = basicStructure('h3')

p1 = basicStructure('p')
p2 = basicStructure('p')
p3 = basicStructure('p')

div2.attr.class = 'row'
div2.childComponent['div3'] = div3
div2.childComponent['div4'] = div4
div2.childComponent['div8'] = div8

div3.attr.class = 'col-sm-2'

div4.attr.class = 'col-sm-8 row rects'
div4.childComponent['div5'] = div5
div4.childComponent['div6'] = div6
div4.childComponent['div7'] = div7

div5.attr.class = 'col-sm-4'
div5.childComponent['img1'] = img1
div5.childComponent['h3_prod1'] = h3_prod1
div5.childComponent['p1'] = p1 

img1.attr.src = "images/appointment.png"
img1.attr.alt="Appointment"

h3_prod1.text['texto'] = "A tu medida"

p1.text['texto'] = "Crédito basado en tu ciclo de ventas. Obtén el dinero que necesitas, a un plazo de hasta 12 meses"

div6.attr.class = 'col-sm-4'
div6.childComponent['img2'] = img2
div6.childComponent['h3_prod2'] = h3_prod2
div6.childComponent['p2'] = p2

img2.attr.src = "images/smartphone.png"
img2.attr.alt="Smartphone"

h3_prod2.text['texto'] = "Accesible"

p2.text['texto'] = "Obtén tu crédito de forma rápida y sencilla, todo online. Así no hay papeleo ni haces filas largas"

div7.attr.class = 'col-sm-4'
div7.childComponent['img3'] = img3
div7.childComponent['h3_prod3'] = h3_prod3
div7.childComponent['p3'] = p3

img3.attr.src = "images/clock.png"
img3.attr.alt="Clock"

h3_prod3.text['texto'] = "Inmediato"

p3.text['texto'] = "Te entregamos tu dinero vía transferencia en cuestión de minutos"

addJson2Html({ div2 }, 'producto')

