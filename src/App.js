import React from 'react';
import Header from './components/header'
import Section_1 from './components/section-dev_position'
import Section_About from './components/section-about';
import Section_Users from './components/section_users';
import Section_Form from './components/section_form';
import Footer from './components/footer'

import './sass/main.scss';


function App() {
  return (
    <>
      <Header/>
      <Section_1/>
      <Section_About />
      <Section_Users />
      <Section_Form />
      <Footer />
    </>
  );
}

export default App;
