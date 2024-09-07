import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import QuoteSection from './components/Quote';
import MySkills from './components/Skills';
import MyProjects from './components/MyProjects';
import ConnectWithMe from './components/ConnectWithMe';
import goat from './assets/goat.jpeg';
function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header primary="white" secondary="green-600" background="black" buttonColor="green-600" />
      <div >
        <Intro primary="white" secondary="green-600" background="black" buttonColor="green-600" />
        <AboutMe primary="white" secondary="green-600" background="black" />
        <QuoteSection 
      primary="white" 
      secondary="green-600" 
      background="black"
    />     </div>
      <MySkills primary="white" secondary="green-600" background="black" />
      <MyProjects primary="white" secondary="green-600" background="black" />
      <ConnectWithMe primary="white" secondary="green-600" background="black"/>    
      </div>
  );
}

export default App;