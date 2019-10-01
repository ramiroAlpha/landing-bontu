b_aviso = basicStructure("b")
small_info = basicStructure("small")
small2_info = basicStructure("small")
button_entendido = basicStructure("button")
a_entendido = basicStructure("a")



b_aviso.text["aviso"]="Aviso Importante!!!"
b_aviso.childComponent["otro"]=small_info
b_aviso.childComponent["otro1"]=small2_info
b_aviso.childComponent["button"]=button_entendido


small_info.text["small"]=" BetaCredit® y/o BONTU®, así como la denominación Betacredit S.A. de C.V., SOFOM E.N.R., no solicitan dinero para la contratación de un crédito, todos nuestros trámites son GRATUITOS."
small_info.childComponent["infos"]=basicStructure("br")
small2_info.text["small"]=" Cualquier duda o comentario, comunícate con nosotros al número 800 2425742 o mediante correo electrónico contacto@bontu.mx."


button_entendido.attr.class="btn btn-sm acceptcookies"
button_entendido.attr.type="button"
button_entendido.attr["aria-label"]="Close"
button_entendido.childComponent["a"]=a_entendido



a_entendido.text["entendido"]="Entendido"


addJson2Html({ b_aviso }, "aviso")