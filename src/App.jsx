import { useState } from 'react'
import './App.css'
import resume from './assets/resume.pdf';
import About from './components/about/about'
import Info from './components/info/info'
import InfoAssets from './components/info/info.assets'
import ID from './components/id/id'
import Link from './components/links/link'

const App = () => (  
  <div className="app">
    <div className="leftside">
    <ID className="id" name="JOÃO REGO"/>
    <About className="about" />
    <div className='links'>
      <Link className="link" link={resume}>GET MY RÉSUMÉ</Link>
      <Link className="link" link="https://github.com/Sewerat29">GITHUB</Link>
      <Link className="link" link="https://www.behance.net/joocarlos30233">BEHANCE</Link>
      <Link className="link" link="https://www.linkedin.com/in/jo%C3%A3o-rego-857b2119a/">LINKEDIN</Link>
    </div>
    </div>
    <Info className="info" sections={InfoAssets}/>    
  </div>  
);

export default App;