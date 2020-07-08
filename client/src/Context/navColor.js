import React, { createContext, useState, useEffect } from 'react';

export const NavColorContext = createContext()

function navColor({ children }) {
    const [isSelected, setIsSelected] = useState(false)

    return (
        <NavColorContext.Provider>
            {children}
        </NavColorContext.Provider>
    );
}

export default navColor;