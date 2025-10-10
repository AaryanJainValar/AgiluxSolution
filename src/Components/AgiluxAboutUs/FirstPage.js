// src/FirstPage.js

import React from 'react';
import { useNavigation } from './NavigationContext';

const FirstPage = () => {
    const { navigateToSecondPage } = useNavigation();

    return (
        <div>
            <h1>First Page</h1>
            <button onClick={navigateToSecondPage}>Go to Second Page</button>
        </div>
    );
};

export default FirstPage;
