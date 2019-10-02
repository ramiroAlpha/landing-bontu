import {basicStructure} from '../tools/supportJsonInterpreter.js'

let div = basicStructure("div")

let divContainerFluidMax = basicStructure("div")

let divRowSpace = basicStructure("div")
let divRowSpace2 = basicStructure("div")

let divColSm12 = basicStructure("div")
let divColSm12Row = basicStructure("div")
let divColSm12RowBetaCredit = basicStructure("div")
let divColSm_2 = basicStructure("div")

let divColSm_6_row = basicStructure("div")

let divColSm_row_legalF = basicStructure("div")
divColSm_row_legalF.attr.class = "col-sm-6 row legalF"

let divColSm_6 = basicStructure("div")
let divColSm_6_2 = basicStructure("div")
let divColSm_6_3 = basicStructure("div")

let divColSm = basicStructure("div")
let divColSm2 = basicStructure("div")
let divColSm3 = basicStructure("div")
let divColSm4 = basicStructure("div")

let p = basicStructure("p")
let h5Legales = basicStructure("h5")
let formContact = basicStructure("form")

let divRowForm = basicStructure("div")

let divColSm21 = basicStructure("div")
divColSm21.attr.class = "col-sm-2"
let imgColSm21 = basicStructure("img")
imgColSm21.attr.src = "images/UNE.png"
imgColSm21.attr.alt = "UNE"
divColSm21.childComponent["imgColSm21"] = imgColSm21

let divColSm22 = basicStructure("div")
divColSm22.attr.class = "col-sm-2"
let imgColSm22 = basicStructure("img")
let aimgColSm22 = basicStructure("a")
aimgColSm22.attr.href = "https://www.gob.mx/condusef"
aimgColSm22.attr.target = "_blank"

imgColSm22.attr.src = "images/CONDUSEF.png"
imgColSm22.attr.alt = "CONDUSEF"

divColSm22.childComponent["aimgColSm22"] = aimgColSm22
aimgColSm22.childComponent["imgColSm22"] = imgColSm22

/////////////////////////////////////
let divColSm23 = basicStructure("div")
divColSm23.attr.class = "col-sm-2"
let imgColSm23 = basicStructure("img")
let aimgColSm23 = basicStructure("a")
aimgColSm23.attr.href = "https://www.buro.gob.mx/"
aimgColSm23.attr.target = "_blank"

imgColSm23.attr.src = "images/BURO.png"
imgColSm23.attr.alt = "Buró de Entidades Financieras"

divColSm23.childComponent["aimgColSm23"] = aimgColSm23
aimgColSm23.childComponent["imgColSm23"] = imgColSm23
/////////////////////////////////////

divRowSpace.attr.class = "row space"
divRowSpace2.attr.class = "row space"

divColSm12.attr.class = "col-sm-12"

divColSm12RowBetaCredit.attr.class = "col-sm-12"
let pBetaCredit = basicStructure("p")
pBetaCredit.text.pBetaCredit = "Betacredit, S.A. de C.V., SOFOM, E.N.R., en su constitución y operación no requiere de autorización de la Secretaría de Hacienda y Crédito Público y está sujeta a la supervisión de la Comisión Nacional Bancaria y de Valores únicamente en materia de prevención y detección de Operaciones con Recursos de Procedencia Ilícita y Financiamiento al Terrorismo."
divColSm12RowBetaCredit.childComponent["pBetaCredit"] = pBetaCredit

divColSm12Row.attr.class = "col-sm-12 row"
divColSm_2.attr.class = "col-sm-2"

divColSm_6.attr.class = "col-sm-6"
divColSm_6_2.attr.class = "col-sm-6"
divColSm_6_3.attr.class = "col-sm-6"

divColSm_6_row.attr.class = "col-sm-6 row"

divRowForm.attr.class = "row formulario"

divColSm.attr.class = "col-sm"
divColSm2.attr.class = "col-sm"
divColSm3.attr.class = "col-sm"
divColSm4.attr.class = "col-sm"

p.text.p = "Si tienes alguna duda por favor déjanos tus datos y nos pondremos en contacto:"
h5Legales.text.h5Legales = "Legales"

let inputName = basicStructure("input")
inputName.attr.type = "text"
inputName.attr.class = "form-control"
inputName.attr.placeholder = "Nombre..."
inputName.attr.name = "nombre"

let inputMail = basicStructure("input")
inputMail.attr.type = "text"
inputMail.attr.class = "form-control"
inputMail.attr.placeholder = "Correo electrónico..."
inputMail.attr.name = "mail"

let inputPhone = basicStructure("input")
inputPhone.attr.type = "text"
inputPhone.attr.class = "form-control"
inputPhone.attr.placeholder = "Teléfono..."
inputPhone.attr.name = "telefono"

let buttonSend = basicStructure("input")
buttonSend.attr.type = "submit"
buttonSend.attr.class = "form-control"
buttonSend.attr.value = "Enviar"

formContact.attr.role = "form"
formContact.attr.method = "post"
formContact.attr.id = "form_ingreso"
formContact.attr.name = "form_ingreso"
formContact.attr["data-toggle"] = "validator"
formContact.attr.action = "https://katana.alphacredit.mx/vg/gestion/apps/AXS/bontu.cgi"
formContact.attr.enctype = "multipart/form-data"

let ulLegalesFirstColumn = basicStructure("ul")
let liLegales1 = basicStructure("li")
let aLegales1 = basicStructure("a")
aLegales1.attr.href = "legal/index.html#constitucion"
aLegales1.text.liLegales1 = "Aviso sobre constitución"

let liLegales2 = basicStructure("li")
let aLegales2 = basicStructure("a")
aLegales2.attr.href = "legal/index.html#terminos"
aLegales2.text.aLegales2 = "Términos y Condiciones de Uso"

let liLegales3 = basicStructure("li")
let aLegales3 = basicStructure("a")
aLegales3.attr.href = "legal/index.html#aviso"
aLegales3.text.aLegales3 = "Aviso de privacidad"

let liLegales4 = basicStructure("li")
let aLegales4 = basicStructure("a")
aLegales4.attr.href = "legal/index.html#leyendas"
aLegales4.text.aLegales3 = "Leyendas de Riesgo"

ulLegalesFirstColumn.childComponent["liLegales1"] = liLegales1
liLegales1.childComponent["aLegales1"] = aLegales1

ulLegalesFirstColumn.childComponent["liLegales2"] = liLegales2
liLegales2.childComponent["aLegales2"] = aLegales2

ulLegalesFirstColumn.childComponent["liLegales3"] = liLegales3
liLegales3.childComponent["aLegales3"] = aLegales3

ulLegalesFirstColumn.childComponent["liLegales4"] = liLegales4
liLegales4.childComponent["aLegales4"] = aLegales4

//LEGALES2

let ulLegalesSecond = basicStructure("ul")
let liLegalesSecond1 = basicStructure("li")
let aLegalesSecond1 = basicStructure("a")
aLegalesSecond1.attr.href = "legal/index.html#educacion"
aLegalesSecond1.text.liLegales1 = "Educación Financiera"

let liLegalesSecond2 = basicStructure("li")
let aLegalesSecond2 = basicStructure("a")
aLegalesSecond2.attr.href = "legal/index.html#une"
aLegalesSecond2.text.aLegales2 = "UNE"

let liLegalesSecond3 = basicStructure("li")
let aLegalesSecond3 = basicStructure("a")
aLegalesSecond3.attr.href = "legal/index.html#buro"
aLegalesSecond3.text.aLegales3 = "Buró de Entidades Financieras"

let liLegalesSecond4 = basicStructure("li")
let aLegalesSecond4 = basicStructure("a")
aLegalesSecond4.attr.href = "legal/index.html#condusef"
aLegalesSecond4.text.aLegales3 = "CONDUSEF"

ulLegalesSecond.childComponent["liLegalesSecond1"] = liLegalesSecond1
liLegalesSecond1.childComponent["aLegalesSecond1"] = aLegalesSecond1

ulLegalesSecond.childComponent["liLegalesSecond2"] = liLegalesSecond2
liLegalesSecond2.childComponent["aLegalesSecond2"] = aLegalesSecond2

ulLegalesSecond.childComponent["liLegalesSecond3"] = liLegalesSecond3
liLegalesSecond3.childComponent["aLegalesSecond3"] = aLegalesSecond3

ulLegalesSecond.childComponent["liLegalesSecond4"] = liLegalesSecond4
liLegalesSecond4.childComponent["aLegalesSecond4"] = aLegalesSecond4

div.childComponent["divContainerFluidMax"] = divContainerFluidMax

divContainerFluidMax.childComponent["divRowSpace"] = divRowSpace
divRowSpace.childComponent["divColSm12"] = divColSm12

divColSm12.childComponent["p"] = p
divColSm12.childComponent["formContact"] = formContact

formContact.childComponent["divRowForm"] = divRowForm
divRowForm.childComponent['divColSm'] = divColSm
divColSm.childComponent["inputName"] = inputName

divRowForm.childComponent['divColSm2'] = divColSm2
divColSm2.childComponent["inputMail"] = inputMail

divRowForm.childComponent['divColSm3'] = divColSm3
divColSm3.childComponent["inputMail"] = inputPhone

divRowForm.childComponent['divColSm_2'] = divColSm_2
divColSm_2.childComponent["inputMail"] = buttonSend


divRowSpace2.attr.class = "row space"
divColSm_6_row.attr.class = "col-sm-6 row"
h5Legales.text.h5Legales = "Legales"

divContainerFluidMax.childComponent["divRowSpace2"] = divRowSpace2
divRowSpace2.childComponent["divColSm_6_row"] = divColSm_6_row
divColSm_6_row.childComponent["h5Legales"] = h5Legales

divColSm_6_row.childComponent["divColSm_6_2"] = divColSm_6_2
divColSm_6_2.childComponent["ulLegalesFirstColumn"] = ulLegalesFirstColumn

divColSm_6_row.childComponent["divColSm_6_3"] = divColSm_6_3
divColSm_6_3.childComponent["ulLegalesSecond"] = ulLegalesSecond

divRowSpace2.childComponent["divColSm_row_legalF"] = divColSm_row_legalF
divColSm_row_legalF.childComponent["divColSm12Row"] = divColSm12Row
divColSm12Row.childComponent["divColSm21"] = divColSm21;
divColSm12Row.childComponent["divColSm22"] = divColSm22;
divColSm12Row.childComponent["divColSm23"] = divColSm23;
divColSm_row_legalF.childComponent["divColSm12RowBetaCredit"] = divColSm12RowBetaCredit


export { div }