import {howItWorksConfig} from './projectStrings.js';

import {basicStructure} from '../tools/supportJsonInterpreter.js'

let divMainContainer = basicStructure("div", {
  class: "container-fluid bg-cuerpo"
});
let divVideoDescRow = basicStructure("div", { class: "row" });
//FUNCIONA DESCRIPTION CONTAINER
let divVideoDescContainer = basicStructure("div", { class: "col-sm-12" });
let ulBigTitle = basicStructure("ul", { class: "titulo" });
let liTitle = basicStructure("li");
liTitle.text["texto"] = howItWorksConfig.sectionTitle;
let spanTitle = basicStructure("span");
spanTitle.text["texto"] = howItWorksConfig.titleSpan;
liTitle.childComponent["span"] = spanTitle;
ulBigTitle.childComponent["firstLi"] = liTitle;

let pDescription = basicStructure("p");
pDescription.text['texto'] = howItWorksConfig.description;
pDescription.attr.class = "simple-text";

divVideoDescContainer.childComponent["child"] = ulBigTitle;
divVideoDescContainer.childComponent["pDesc"] = pDescription;
divVideoDescRow.childComponent["colsm12"] = divVideoDescContainer;
//FUNCIONA VIDEO CONTAINER
let divVideoContainerRow = basicStructure("div", { class: "col-12 video" });
let divVideoIframeContainer = basicStructure("div", {
  class: "embed-responsive embed-responsive-16by9"
});
let iframeVideo = basicStructure("iframe", {
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
let divMainItems = basicStructure("div", { class: "row info max2" });
for (var i=0; i <  howItWorksConfig.items.length; i++) {
  var item = howItWorksConfig.items[i];
  let divItemContainer = basicStructure("div", { class: "col-sm-6" });
  let mainImageItem = basicStructure("img", { src: item.mainImage });
  divItemContainer.childComponent["img" + i] = mainImageItem;

  let divDescriptionContainer = basicStructure("div", { class: "col-sm-6 artes" });
  let h3Title = basicStructure("h3");
  let ulTitle = basicStructure("ul");
  let liTitle = basicStructure("li")
  liTitle.text['texto'] = item.title; 

  ulTitle.childComponent["title-row" + i] = liTitle;
  h3Title.childComponent["ul"] = ulTitle;
  divDescriptionContainer.childComponent["firstRow" + i] = h3Title;
  let h4Subtitle = basicStructure("h4");
  h4Subtitle.text['texto'] = item.subtitle;

  divDescriptionContainer.childComponent["secondRow" + i] = h4Subtitle;
  if (item.children) {
    let detailsTable = basicStructure("table");
    let bodyTable = basicStructure("tbody");
    for (var x = 0; x < item.children.length; x++) {
      var children = item.children[x];
      let tableRow = basicStructure("tr");

      let tableDataIcon = basicStructure("td");
      let icon = basicStructure("i", { class: children.icon });
      tableDataIcon.childComponent["icon" + x] = icon;
      tableRow.childComponent["rowIcon" + x] = tableDataIcon;

      let tableDataDescription = basicStructure("td");
      let pDescription = basicStructure("p");
      pDescription.text['texto'] = children.description;
      tableDataDescription.childComponent["description" + x] = pDescription;
      tableRow.childComponent["row" + x] = tableDataDescription;
      bodyTable.childComponent["item" + x] = tableRow;
    }
    detailsTable.childComponent["tbody"] = bodyTable;
    divDescriptionContainer.childComponent["details"] = detailsTable;
  }
  if (item.footerText) {
    let pFooterText = basicStructure("p", {
      class: "titulo2 desk"
    });
    pFooterText.text['texto'] = item.footerText;
    divDescriptionContainer.childComponent["footer" + i] = pFooterText;
  }
  if (item.footerImage) {
    let imgItem = basicStructure("img", { src: item.footerImage, class: "desk" });
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
let divRowFooterSection = basicStructure('div', { class:'row' });
let divCol12FooterSection = basicStructure('div', { class:'col-sm-12 espacio '});
let ulEndTitle = basicStructure('ul', { class: 'titulo' });
let liEndTitle = basicStructure('li');
liEndTitle.text['texto'] = howItWorksConfig.endText;
ulEndTitle.childComponent['li'] = liEndTitle;
divCol12FooterSection.childComponent['col12'] = ulEndTitle;
divRowFooterSection.childComponent['row'] = divCol12FooterSection;

divMainContainer.childComponent['footer'] = divRowFooterSection;
 

export { divMainContainer }




