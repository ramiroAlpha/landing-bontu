import {basicStructure, addJson2Html} from '../tools/supportJsonInterpreter.js'

let p_max = basicStructure("p")
let b_copy = basicStructure("b")
let span_bontu = basicStructure("span")
let a_diralpha = basicStructure("a")
let p_otro =basicStructure("a")
let a_linkAlpha = basicStructure("a")




p_max.attr.class = "max"
p_max.childComponent["b"]= b_copy
p_max.childComponent["p"]= p_otro
p_max.childComponent["span"]= span_bontu

p_otro.text["fondo"]=" | Fondo flexible e inteligente. Todos los derechos reservados."


b_copy.text["copy"] = "© 2019 Bontu"
span_bontu.text["span"] = " Bontu es un producto de"
p_otro.childComponent["spanchild"]= basicStructure("br")
span_bontu.childComponent["link"]=a_linkAlpha

a_linkAlpha.attr.href="https://www.alphacredit.mx"
a_linkAlpha.attr.target="_blank"
a_linkAlpha.text["link"]=" AlphaCredit®"


export {p_max}
