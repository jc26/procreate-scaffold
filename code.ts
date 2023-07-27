// // This plugin creates 5 rectangles on the screen.
// const numberOfRectangles = 5

// // This file holds the main code for plugins. Code in this file has access to
// // the *figma document* via the figma global object.
// // You can access browser APIs in the <script> tag inside "ui.html" which has a
// // full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// const nodes: SceneNode[] = [];
// for (let i = 0; i < numberOfRectangles; i++) {
//   const rect = figma.createRectangle();
//   rect.x = i * 150;
//   rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
//   figma.currentPage.appendChild(rect);
//   nodes.push(rect);
// }
// figma.currentPage.selection = nodes;
// figma.viewport.scrollAndZoomIntoView(nodes);

// // Make sure to close the plugin when you're done. Otherwise the plugin will
// // keep running, which shows the cancel button at the bottom of the screen.
// figma.closePlugin();

let References = figma.createPage();
let UXApproaches = figma.createPage();
let ContentApproaches = figma.createPage();
let UIApproaches = figma.createPage();
let FinalUI = figma.createPage();
let Prototype = figma.createPage();
let Showcase = figma.createPage();
let Cover = figma.currentPage;
let CoverFrame = figma.createFrame();
let CoverHead = figma.createText();
let CoverDesc = figma.createText();

figma.currentPage.name = "📓 Cover";
References.name = "🔭 References";
UXApproaches.name = "📋 UX Approaches";
ContentApproaches.name = "✍🏼 Content Approaches"
UIApproaches.name = "👁 UI Approaches";
FinalUI.name = "👍 Final UI";
Prototype.name = "📱 Prototype";
Showcase.name = "🖥 Showcase";
CoverFrame.name = "Cover";



Cover.appendChild(CoverFrame);
figma.setFileThumbnailNodeAsync(CoverFrame);
CoverFrame.appendChild(CoverHead);
CoverFrame.appendChild(CoverDesc);
CoverFrame.resize(1440, 900);

let setPosition = (node: TextNode, spacex: number, spacey: number) => { node.relativeTransform = [[1, 0, spacex], [0, 1, spacey]] };

let xCalculator = (container: FrameNode, element: TextNode) => { return ((container.width / 2) - (element.width / 2)); }

let yCalculator = (container: FrameNode, element: TextNode) => { return ((container.height / 2) - (element.height / 2)); }

let loadFontHead = async (name: string) => {
  await figma.loadFontAsync({ family: "Roboto", style: "Bold" });
  CoverHead.fontName = { family: "Roboto", style: "Bold" };
  CoverHead.characters = name;
  CoverHead.fontSize = 74;
  CoverHead.textAlignHorizontal = "CENTER";

}

let loadFontDesc = async (text: string) => {

  await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
  CoverDesc.fontSize = 36;
  CoverDesc.characters = text;
  CoverDesc.textAlignHorizontal = "CENTER";
  layoutText();
}
let layoutText = () => {
  let descX = xCalculator(CoverFrame, CoverDesc);
  let headX = xCalculator(CoverFrame, CoverHead);
  let headY = (yCalculator(CoverFrame, CoverHead) - 30);
  let descY = headY + CoverHead.height + 20;

  setPosition(CoverHead, headX, headY);
  setPosition(CoverDesc, descX, descY);
}
let run = async ()=>{
await loadFontHead("Add Heading");
await loadFontDesc("Add Description");
figma.notify("Project Scafolding Done 👍")
figma.closePlugin();
}

run();
