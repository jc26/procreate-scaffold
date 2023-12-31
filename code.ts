console.log("Generating pages ...");

let FirstDividerPage = figma.createPage();
let Design = figma.createPage();
let Components = figma.createPage();
let SecondDividerPage = figma.createPage();
let DevPage = figma.createPage();
let Sandbox = figma.createPage();
let Inspiration = figma.createPage();
let Archive = figma.createPage();
let Cover = figma.currentPage;

let CoverFrame = figma.createFrame();

figma.currentPage.name = "📓 Cover";
CoverFrame.name = "Cover";
FirstDividerPage.name = "-----";
Design.name = "✨ Design";
Components.name = "⚙️ Components"
SecondDividerPage.name = "-----";
DevPage.name = "🤖 Digital Assets"
Sandbox.name = "🛠️ Sandbox";
Inspiration.name = "💡 Inspiration"
Archive.name = "🗄️ Archive"

CoverFrame.resize(1440, 900);
Cover.appendChild(CoverFrame);
figma.setFileThumbnailNodeAsync(CoverFrame);

let run = async ()=>{
  let importComponent = await figma.importComponentByKeyAsync("0f7fc9167a8e2880dd0eab13eaf78641474098ba");
  let coverInstance = importComponent.createInstance();
  CoverFrame.appendChild(coverInstance);
  let authorName = figma.currentUser.name;
  let today = new Date();
  let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  let monthAndYear = monthNames[today.getMonth()] + " " + today.getFullYear().toString()
  if (authorName != null) {
    coverInstance.setProperties({ "Name#107:14" : authorName });
  }
  coverInstance.setProperties({ 
    "Updated#107:13" : monthAndYear , 
    "Created#107:12" : monthAndYear
  });
  const nodes: SceneNode[] = [];
  nodes.push(CoverFrame);
  figma.viewport.scrollAndZoomIntoView(nodes);
  figma.notify("Scaffolding Complete 👍")
  figma.closePlugin();
}

run();