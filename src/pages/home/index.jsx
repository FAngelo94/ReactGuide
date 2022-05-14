import React from 'react';
import Page from "../../components/page"
import logo from "./logo.png"

function Home() {
  return (
    <Page>
      <div className="text-center mt-4 h5">
        <h1>Guida React</h1>
        <p>Semplice guida fatta per hobby con tanto di esempi per ciascun hooks di React.</p>
        <p>Prossimamente aggiungerò qualche altro argomento relativo a React come esempi di custom hooks.</p>
        <p>Se vuoi correggere qualcosa o aggiungere esempi sentiti libero di aprire delle PR nella mia repo: <a className='link-warning' href='https://github.com/FAngelo94/ReactGuide.git'> Repository</a></p>
        <p>Se vuoi scrivermi questo è il mio profilo linkedin: <a className='link-warning' href='https://www.linkedin.com/in/angelo-falci-1292ab76/'> Profilo</a></p>
        <p>Se hai apprezzato il lavoro e vuoi offrirmi un caffé: <a className='link-warning' href={"https://paypal.me/fangelo94?country.x=IT&locale.x=it_IT"} target="_blank" rel="noreferrer">☕
        </a></p>
        <img src={logo} alt="logo" className="w-25" />
      </div>
    </Page>
  );
}

export default Home;
