import React, { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const NavColorContext = createContext()

function navColor({ children }) {
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        const params = useParams();

    }, [])

    function colorChange(params) {
        switch (params) {
            case 'contact':
                setIsSelected(true)
                break;
            default:
                break;
        }

    }

    return (
        <NavColorContext.Provider value={false}>
            {children}
        </NavColorContext.Provider>
    );
}

export default navColor;