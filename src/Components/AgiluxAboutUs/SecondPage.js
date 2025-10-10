// src/SecondPage.js

import React from 'react';
import { useNavigation } from './NavigationContext';

const SecondPage = () => {
    const { returnToFirstPage } = useNavigation();

    return (
        <div>
            <h1>Second Page</h1>
            <button onClick={returnToFirstPage}>Return to First Page</button>
        </div>
    );
};

export default SecondPage;
