import React from 'react';
import './App.css';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { Footer } from './Footer';
import { Header } from './Headers/Header';
import { Prestation } from './Prestation/Prestation';
import { Title } from './Title';

function App() {
  return (
    <div className="App">
      <Header />
      <Title title={'Nos Prestations'}></Title>
      <div className='prestation'>
        <Prestation title={'Code de la route'} description={'Nostrud minim tempor commodo mollit labore irure est nisi magna magna nostrud ad ipsum. Anim exercitation in ut aute Lorem consectetur consectetur anim ut reprehenderit nostrud ex consequat magna. Incididunt labore reprehenderit incididunt mollit. Proident deserunt nisi laborum veniam sunt laborum sit et deserunt cillum sunt. Aliqua minim quis deserunt ad id id officia qui proident exercitation. Est nostrud proident dolor minim eu officia.'} />
        <Prestation title={'Permis B'} description={'Nostrud minim tempor commodo mollit labore irure est nisi magna magna nostrud ad ipsum. Anim exercitation in ut aute Lorem consectetur consectetur anim ut reprehenderit nostrud ex consequat magna. Incididunt labore reprehenderit incididunt mollit. Proident deserunt nisi laborum veniam sunt laborum sit et deserunt cillum sunt. Aliqua minim quis deserunt ad id id officia qui proident exercitation. Est nostrud proident dolor minim eu officia.'} />
        <Prestation title={'Permis AAC'} description={'Nostrud minim tempor commodo mollit labore irure est nisi magna magna nostrud ad ipsum. Anim exercitation in ut aute Lorem consectetur consectetur anim ut reprehenderit nostrud ex consequat magna. Incididunt labore reprehenderit incididunt mollit. Proident deserunt nisi laborum veniam sunt laborum sit et deserunt cillum sunt. Aliqua minim quis deserunt ad id id officia qui proident exercitation. Est nostrud proident dolor minim eu officia.'} />
        <Prestation title={'Examen'} description={'Nostrud minim tempor commodo mollit labore irure est nisi magna magna nostrud ad ipsum. Anim exercitation in ut aute Lorem consectetur consectetur anim ut reprehenderit nostrud ex consequat magna. Incididunt labore reprehenderit incididunt mollit. Proident deserunt nisi laborum veniam sunt laborum sit et deserunt cillum sunt. Aliqua minim quis deserunt ad id id officia qui proident exercitation. Est nostrud proident dolor minim eu officia.'} />
      </div>
      <Title title="Contact" />
      <div className='contact'>
        <ContactForm ></ContactForm>
        <ContactInfo name={'Auto-école Serenity'} phone={'XXXXXXXXXX'} mail={'contact@info.com'}/>
      </div>
      <Footer siteTitle="Auto-école Serenity" />
    </div>
  );
}

export default App;
