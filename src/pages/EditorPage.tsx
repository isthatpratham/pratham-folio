import React from 'react';
import Hero from '../components/Hero';
import Editor from '../components/Editor';
import BookShowcase from '../components/BookShowcase';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const EditorPage: React.FC = () => {
    return (
        <>
            <Hero />
            <Editor />
            <BookShowcase />
            <Contact />
            <Footer />
        </>
    );
};

export default EditorPage;
