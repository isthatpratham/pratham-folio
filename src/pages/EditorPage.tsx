import React from 'react';
import Hero from '../components/Hero';
import Editor from '../components/Editor';
import Footer from '../components/Footer';

const EditorPage: React.FC = () => {
    return (
        <>
            <Hero />
            <Editor />
            <Footer />
        </>
    );
};

export default EditorPage;
