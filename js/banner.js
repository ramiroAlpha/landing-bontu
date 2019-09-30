div = basicStructure("div")
div1 = basicStructure("div")
div2 = basicStructure("div")
div3 = basicStructure("div")

h3_conypag = basicStructure("h3")


div.attr.class = "row"
div.childComponent["div1"] = div1
div.childComponent["div2"] = div2
div.childComponent["div3"] = div3

div1.attr.class = "col-sm-2"

div2.attr.class = "col-sm-8"
div2.childComponent["h3"] = h3_conypag

h3_conypag.text["texto"] = "Contratar y pagar un crédito nunca había sido tan fácil"


div3.attr.class = "col-sm-2"


addJson2Html({ div }, "banner")
