import { footer } from "../componentes/footer.js";

import { chat } from "../componentes/chat.js";

export const PanelChat = () => {
  
  const divPanel = document.createElement("div");
  const panelView = divPanel;

  const chatComponent = chat();
  panelView.appendChild(chatComponent);

  return panelView;
};