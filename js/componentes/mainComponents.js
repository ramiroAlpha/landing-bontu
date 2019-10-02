import {addJson2Html} from '../tools/supportJsonInterpreter.js'
import {div as divNavbar} from './navBar.js'
import {div2 as divProducto} from './divProducto.js'
import {divMainContainer as divProductConfig} from './productConfig.js'
import {div as divFooterCustom} from './footerCustom.js'
import {div as divBanner} from './banner.js'
import {p_max as divAbajo} from './abajo.js'
import {b_aviso as divAviso} from './aviso.js'

addJson2Html({divNavbar}, 'header')
addJson2Html({ divProducto }, 'producto')
addJson2Html({ divProductConfig }, 'funciona');
addJson2Html({ divFooterCustom }, "contacto")
addJson2Html({ divBanner }, "banner")
addJson2Html({ divAbajo }, "abajo")
addJson2Html({ divAviso }, "aviso")