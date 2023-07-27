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

console.log("generating pages ...");

let FirstDividerPage = figma.createPage();
let Design = figma.createPage();
let Components = figma.createPage();
let SecondDividerPage = figma.createPage();
let Sandbox = figma.createPage();
let Inspiration = figma.createPage();
let Archive = figma.createPage();
let Cover = figma.currentPage;

let CoverFrame = figma.createFrame();
let CoverHead = figma.createText();
let CoverDesc = figma.createText();

figma.currentPage.name = "📓 Cover";
CoverFrame.name = "Cover";
FirstDividerPage.name = "-----";
Design.name = "✨ Design";
Components.name = "⚙️ Components"
SecondDividerPage.name = "-----";
Sandbox.name = "🛠️ Sandbox";
Inspiration.name = "💡 Inspiration"
Archive.name = "🗄️ Archive"


CoverFrame.resize(1440, 900);
Cover.appendChild(CoverFrame);
figma.setFileThumbnailNodeAsync(CoverFrame);
async function importNode() {
  let importComponent = await figma.importComponentByKeyAsync("0f7fc9167a8e2880dd0eab13eaf78641474098ba");
  console.log(importComponent.name);
  importComponent.createInstance()
}
let coverComponent = figma.importComponentByKeyAsync("0f7fc9167a8e2880dd0eab13eaf78641474098ba");
// CoverFrame.appendChild(CoverHead);
// CoverFrame.appendChild(CoverDesc);
importNode();

let setPosition = (node: TextNode | ComponentNode, spacex: number, spacey: number) => { node.relativeTransform = [[1, 0, spacex], [0, 1, spacey]] };

let xCalculator = (container: FrameNode, element: TextNode) => { return ((container.width / 2) - (element.width / 2)); }

let yCalculator = (container: FrameNode, element: TextNode) => { return ((container.height / 2) - (element.height / 2)); }

// let loadFontHead = async (name: string) => {
//   await figma.loadFontAsync({ family: "Roboto", style: "Bold" });
//   CoverHead.fontName = { family: "Roboto", style: "Bold" };
//   CoverHead.characters = name;
//   CoverHead.fontSize = 74;
//   CoverHead.textAlignHorizontal = "CENTER";

// }

// let loadFontDesc = async (text: string) => {

//   await figma.loadFontAsync({ family: "Roboto", style: "Regular" });
//   CoverDesc.fontSize = 36;
//   CoverDesc.characters = text;
//   CoverDesc.textAlignHorizontal = "CENTER";
//   layoutText();
// }
// let layoutText = () => {
//   let descX = xCalculator(CoverFrame, CoverDesc);
//   let headX = xCalculator(CoverFrame, CoverHead);
//   let headY = (yCalculator(CoverFrame, CoverHead) - 30);
//   let descY = headY + CoverHead.height + 20;

//   setPosition(CoverHead, headX, headY);
//   setPosition(CoverDesc, descX, descY);
//   setPosition(coverInstance, 0, 0);
// }
let run = async ()=>{
// await loadFontHead("Add Heading");
// await loadFontDesc("Add Description");
figma.notify("Project Scafolding Done 👍")
figma.closePlugin();
}

run();
