import React from 'react';
import ReactDom from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );

};

const root = ReactDom.createRoot(document.getElementById("rootId"));
root.render(<AppLayout />);