import React, { createContext, useState } from 'react'

export const PassengerDataContext = createContext();

const PassengerContext = ({children}) => {
    const [panelOpen,setPanelOpen] = useState(false);
  return (
    <div>
        <PassengerDataContext.Provider value={[panelOpen,setPanelOpen]}>
            {children}
        </PassengerDataContext.Provider>
    </div>
  )
}

export default PassengerContext