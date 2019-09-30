p_max = basicStructure("p")
b_copy = basicStructure("b")
span_bontu = basicStructure("span")
a_diralpha = basicStructure("a")
p_otro =basicStructure("a")
a_linkAlpha = basicStructure("a")




p_max.attr.class = "max"
p_max.childComponent["b"]= b_copy
p_max.childComponent["p"]= p_otro
p_max.childComponent["span"]= span_bontu

p_otro.text["fondo"]="| Fondo flexible e inteligente. Todos los derechos reservados."


b_copy.text["copy"] = "© 2019 Bontu"
span_bontu.text["span"] = " Bontu es un producto de"
p_otro.childComponent["spanchild"]= basicStructure("br")
span_bontu.childComponent["link"]=a_linkAlpha

a_linkAlpha.attr.href="https://www.alphacredit.mx"
a_linkAlpha.attr.target="_blank"
a_linkAlpha.text["link"]=" AlphaCredit®"


addJson2Html({ p_max }, "abajo")
