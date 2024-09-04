import React, { useState } from 'react';
import TopNav from './components/TopNav';
import SomeComponent from './components/SomeComponent';

function App() {
    const [currentLanguage, setCurrentLanguage] = useState('en'); // Default language

    return (
        <div className="App">
            <TopNav setCurrentLanguage={setCurrentLanguage} />
            <SomeComponent currentLanguage={currentLanguage} />
        </div>
    );
}

export default App;
