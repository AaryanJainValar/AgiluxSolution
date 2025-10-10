// src/NavigationContext.js

import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [isSecondPage, setIsSecondPage] = useState(false);

    const navigateToSecondPage = () => {
        setIsSecondPage(true);
    };

    const returnToFirstPage = () => {
        setIsSecondPage(false);
    };

    return (
        <NavigationContext.Provider value={{ isSecondPage, navigateToSecondPage, returnToFirstPage }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    return useContext(NavigationContext);
};
