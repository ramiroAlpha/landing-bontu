div = basicStructure("div")

divContainerFluidMax = basicStructure("div")

divRowSpace = basicStructure("div")
divRowSpace2 = basicStructure("div")

divColSm12 = basicStructure("div")
divColSm12Row = basicStructure("div")
divColSm12RowBetaCredit = basicStructure("div")
divColSm_2 = basicStructure("div")

divColSm_6_row = basicStructure("div")

divColSm_row_legalF = basicStructure("div")
divColSm_row_legalF.attr.class = "col-sm-6 row legalF"

divColSm_6 = basicStructure("div")
divColSm_6_2 = basicStructure("div")
divColSm_6_3 = basicStructure("div")

divColSm = basicStructure("div")
divColSm2 = basicStructure("div")
divColSm3 = basicStructure("div")
divColSm4 = basicStructure("div")

p = basicStructure("p")
h5Legales = basicStructure("h5")
formContact = basicStructure("form")

divRowForm = basicStructure("div")

divColSm21 = basicStructure("div")
divColSm21.attr.class = "col-sm-2"
imgColSm21 = basicStructure("img")
imgColSm21.attr.src = "images/UNE.png"
imgColSm21.attr.alt = "UNE"
divColSm21.childComponent["imgColSm21"] = imgColSm21

divColSm22 = basicStructure("div")
divColSm22.attr.class = "col-sm-2"
imgColSm22 = basicStructure("img")
aimgColSm22 = basicStructure("a")
aimgColSm22.attr.href = "https://www.gob.mx/condusef"
aimgColSm22.attr.target = "_blank"

imgColSm22.attr.src = "images/CONDUSEF.png"
imgColSm22.attr.alt = "CONDUSEF"

divColSm22.childComponent["aimgColSm22"] = aimgColSm22
aimgColSm22.childComponent["imgColSm22"] = imgColSm22

/////////////////////////////////////
divColSm23 = basicStructure("div")
divColSm23.attr.class = "col-sm-2"
imgColSm23 = basicStructure("img")
aimgColSm23 = basicStructure("a")
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
pBetaCredit = basicStructure("p")
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

inputName = basicStructure("input")
inputName.attr.type = "text"
inputName.attr.class = "form-control"
inputName.attr.placeholder = "Nombre..."
inputName.attr.name = "nombre"

inputMail = basicStructure("input")
inputMail.attr.type = "text"
inputMail.attr.class = "form-control"
inputMail.attr.placeholder = "Correo electrónico..."
inputMail.attr.name = "mail"

inputPhone = basicStructure("input")
inputPhone.attr.type = "text"
inputPhone.attr.class = "form-control"
inputPhone.attr.placeholder = "Teléfono..."
inputPhone.attr.name = "telefono"

buttonSend = basicStructure("input")
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

ulLegalesFirstColumn = basicStructure("ul")
liLegales1 = basicStructure("li")
aLegales1 = basicStructure("a")
aLegales1.attr.href = "legal/index.html#constitucion"
aLegales1.text.liLegales1 = "Aviso sobre constitución"

liLegales2 = basicStructure("li")
aLegales2 = basicStructure("a")
aLegales2.attr.href = "legal/index.html#terminos"
aLegales2.text.aLegales2 = "Términos y Condiciones de Uso"

liLegales3 = basicStructure("li")
aLegales3 = basicStructure("a")
aLegales3.attr.href = "legal/index.html#aviso"
aLegales3.text.aLegales3 = "Aviso de privacidad"

liLegales4 = basicStructure("li")
aLegales4 = basicStructure("a")
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

ulLegalesSecond = basicStructure("ul")
liLegalesSecond1 = basicStructure("li")
aLegalesSecond1 = basicStructure("a")
aLegalesSecond1.attr.href = "legal/index.html#educacion"
aLegalesSecond1.text.liLegales1 = "Educación Financiera"

liLegalesSecond2 = basicStructure("li")
aLegalesSecond2 = basicStructure("a")
aLegalesSecond2.attr.href = "legal/index.html#une"
aLegalesSecond2.text.aLegales2 = "UNE"

liLegalesSecond3 = basicStructure("li")
aLegalesSecond3 = basicStructure("a")
aLegalesSecond3.attr.href = "legal/index.html#buro"
aLegalesSecond3.text.aLegales3 = "Buró de Entidades Financieras"

liLegalesSecond4 = basicStructure("li")
aLegalesSecond4 = basicStructure("a")
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


addJson2Html({ div }, "contacto")