
import React, {useState, useEffect} from "react";
const MultiverseContext = React.createContext();
function MultiverseProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <MultiverseContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </MultiverseContext.Provider>
  );
}

export { MultiverseContext, MultiverseProvider };
