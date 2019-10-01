howItWorksConfig = {
  sectionTitle:
    "Si vendes tus productos o servicios a través de una plataforma digital, tienes un crédito pre-aprobado",
  titleSpan: " para crecer tu negocio",
  description:
    "Obtén tu crédito de forma rápida y sencilla. Gracias a tu historial de ventas, puedes acceder a capital de trabajo de una manera simple",
  videoURL: "https://www.youtube.com/embed/cBusDEvg9Tw?controls=0",
  endText:
    "Diseñado a tu medida y con la flexibilidad que necesitas para hacer crecer tu negocio",
  items: [
    {
      orientation: "right",
      mainImage: "./images/woman-table.jpg",
      title: "¿Cuánto puedo solicitar?",
      subtitle: "Adaptable y escalable",
      footerText: "Más ventas, más dinero para crecer mi negocio",
      children: [
        {
          icon: "fa fa-sliders-h",
          description:
            "El monto de tu crédito y cuánto vas a pagar se calcula gracias al historial de tus ventas, así te acompañamos durante el cíclo productivo de tu negocio."
        },
        {
          icon: "fa fa-hand-point-right",
          description:
            "Sabemos que tus ventas son variables, te ofrecemos un crédito accesible que se adapta a tus ganancias."
        },
        {
          icon: "fa fa-chart-line",
          description:
            "Si tu negocio crece, te damos acceso a capital adicional. Mientras más vendas, podrás solicitar más capital."
        }
      ]
    },
    {
      orientation: "left",
      mainImage: "./images/man-coffee.jpg",
      title: "¿Cómo pago?",
      subtitle: "Fácil, flexible y confiable",
      footerImage: "./images/tabla_ejemplo_credito20.png",
      children: [
        {
          icon: "fa fa-check-circle",
          description:
            "Tu crédito se paga en automático al descontar un porcentaje fijo de tus ventas que tú decides al inicio."
        },
        {
          icon: "fa fa-ruler-combined",
          description:
            "Nosotros nos adaptamos a los ciclos de venta de tu negocio. Si tus ventas crecen, tu crédito se paga más rápido y te da acceso a capital adicional."
        },
        {
          icon: "fa fa-shield-alt",
          description:
            "Puedes hacer pagos extras en cualquier momento, sin penalizaciones ni cargos adicionales."
        }
      ]
    },
    {
      orientation: "right",
      mainImage: "./images/man-bikeshop.jpg",
      title: "¿Cómo lo configuro?",
      subtitle: "Decide cómo quieres que sea tu crédito, elige:",
      footerImage: "./images/bontu-payments.png",
      children: [
        {
          icon: "fa fa-coins",
          description: "El monto de tu crédito"
        },
        {
          icon: "fa fa-percentage",
          description: "El porcentaje de tus ventas que escojas para pagarlo"
        },
        {
          icon: "fa fa-calendar-week",
          description: "El plazo de pago"
        }
      ]
    }
  ]
};
divMainContainer = basicStructure("div", {
  class: "container-fluid bg-cuerpo"
});
divVideoDescRow = basicStructure("div", { class: "row" });
//FUNCIONA DESCRIPTION CONTAINER
divVideoDescContainer = basicStructure("div", { class: "col-sm-12" });
ulBigTitle = basicStructure("ul", { class: "titulo" });
liTitle = basicStructure("li");
liTitle.text["texto"] = howItWorksConfig.sectionTitle;
spanTitle = basicStructure("span");
spanTitle.text["texto"] = howItWorksConfig.titleSpan;
liTitle.childComponent["span"] = spanTitle;
ulBigTitle.childComponent["firstLi"] = liTitle;

pDescription = basicStructure("p");
pDescription.text['texto'] = howItWorksConfig.description;
pDescription.attr.class = "simple-text";

divVideoDescContainer.childComponent["child"] = ulBigTitle;
divVideoDescContainer.childComponent["pDesc"] = pDescription;
divVideoDescRow.childComponent["colsm12"] = divVideoDescContainer;
//FUNCIONA VIDEO CONTAINER
divVideoContainerRow = basicStructure("div", { class: "col-12 video" });
divVideoIframeContainer = basicStructure("div", {
  class: "embed-responsive embed-responsive-16by9"
});
iframeVideo = basicStructure("iframe", {
  src: howItWorksConfig.videoURL,
  frameborder: "0",
  allow:
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
  allowfullscreen: ""
});
divVideoIframeContainer.childComponent["video"] = iframeVideo;
divVideoContainerRow.childComponent["videoRow"] = divVideoIframeContainer;
divMainContainer.childComponent["firstRow"] = divVideoDescRow;
divMainContainer.childComponent["secondRow"] = divVideoContainerRow;
//DIV ITEMS IMAGES AND DESCRIPTIONS
divMainItems = basicStructure("div", { class: "row info max2" });
for (var i=0; i <  howItWorksConfig.items.length; i++) {
  var item = howItWorksConfig.items[i];
  divItemContainer = basicStructure("div", { class: "col-sm-6" });
  mainImageItem = basicStructure("img", { src: item.mainImage });
  divItemContainer.childComponent["img" + i] = mainImageItem;

  divDescriptionContainer = basicStructure("div", { class: "col-sm-6 artes" });
  h3Title = basicStructure("h3");
  ulTitle = basicStructure("ul");
  liTitle = basicStructure("li")
  liTitle.text['texto'] = item.title; 

  ulTitle.childComponent["title-row" + i] = liTitle;
  h3Title.childComponent["ul"] = ulTitle;
  divDescriptionContainer.childComponent["firstRow" + i] = h3Title;
  h4Subtitle = basicStructure("h4");
  h4Subtitle.text['texto'] = item.subtitle;

  divDescriptionContainer.childComponent["secondRow" + i] = h4Subtitle;
  if (item.children) {
    detailsTable = basicStructure("table");
    bodyTable = basicStructure("tbody");
    for (var x = 0; x < item.children.length; x++) {
      var children = item.children[x];
      tableRow = basicStructure("tr");

      tableDataIcon = basicStructure("td");
      icon = basicStructure("i", { class: children.icon });
      tableDataIcon.childComponent["icon" + x] = icon;
      tableRow.childComponent["rowIcon" + x] = tableDataIcon;

      tableDataDescription = basicStructure("td");
      pDescription = basicStructure("p");
      pDescription.text['texto'] = children.description;
      tableDataDescription.childComponent["description" + x] = pDescription;
      tableRow.childComponent["row" + x] = tableDataDescription;
      bodyTable.childComponent["item" + x] = tableRow;
    }
    detailsTable.childComponent["tbody"] = bodyTable;
    divDescriptionContainer.childComponent["details"] = detailsTable;
  }
  if (item.footerText) {
    pFooterText = basicStructure("p", {
      class: "titulo2 desk"
    });
    pFooterText.text['texto'] = item.footerText;
    divDescriptionContainer.childComponent["footer" + i] = pFooterText;
  }
  if (item.footerImage) {
    imgItem = basicStructure("img", { src: item.footerImage, class: "desk" });
    divDescriptionContainer.childComponent["footerImage" + i] = imgItem;
  }
  switch (item.orientation) {
    case "right":
      divMainItems.childComponent["firstOne" + i] = divItemContainer;
      divMainItems.childComponent["secondOne" + i] = divDescriptionContainer;
      break;
    case "left":
      divMainItems.childComponent["secondOne" + i] = divDescriptionContainer;
      divMainItems.childComponent["firstOne" + i] = divItemContainer;
      break;
  }
}
divMainContainer.childComponent['details'] = divMainItems;
//FOOTER ROW
divRowFooterSection = basicStructure('div', { class:'row' });
divCol12FooterSection = basicStructure('div', { class:'col-sm-12 espacio '});
ulEndTitle = basicStructure('ul', { class: 'titulo' });
liEndTitle = basicStructure('li');
liEndTitle.text['texto'] = howItWorksConfig.endText;
ulEndTitle.childComponent['li'] = liEndTitle;
divCol12FooterSection.childComponent['col12'] = ulEndTitle;
divRowFooterSection.childComponent['row'] = divCol12FooterSection;

divMainContainer.childComponent['footer'] = divRowFooterSection;
 

addJson2Html({ divMainContainer }, 'funciona');




