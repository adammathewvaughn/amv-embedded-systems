import Header from "src/client/components/Header";
import Footer from 'src/client/components/Footer';
import './src/client/utils/App.css'
import TagManager from 'react-gtm-module'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faRaspberryPi } from '@fortawesome/free-brands-svg-icons';
import { faLinux } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
// import Footer from './client/components/Footer';

// import Navbar from "./client/components/Navbar";


// const express = require ('express')
// let router = express.Router();

const i = <FontAwesomeIcon icon={faCoffee} />
const j = <FontAwesomeIcon icon={faRaspberryPi} />
const k = <FontAwesomeIcon icon={faLinux} />
const l = <FontAwesomeIcon icon={faTerminal} />
const tagManagerArgs = {
  gtmId: 'GTM-MW7CTZK'
}
TagManager.initialize(tagManagerArgs)

function App() {

  return <>
    {/* <Navbar className="Navbar " /> */}
  
    
        <Header className="col-sm-6" />     
              <div className="App-body col justify-content-center d-flex">
                  <h1 className="slogan row-sm-6">—— Automating a better tomorrow ——</h1>
                  <span>{j} {k} {l}</span>
                  <p className="bodyp"> &nbsp; &nbsp; Hi, my name is Adam M. Vaughn and I'm a Birmingham-area Embedded Systems engineer with an emphasis on incorporating Full-Stack Development
                    and REST APIs into microcontrolled systems. My goal as an embedded systems engineer is to combine my Full-Stack Web-Development education with my background in construction and my life-long infatuation with technology
                    and hardware. With the prevalence of the IoT and micro-controlled/automated embedded systems via Raspberry Pi and Arduino, the juxtaposition of hardware and software has never been more at the forefront of our lives.
                    Embedded systems is the natural arris of the myriad technologies that comprise our modern world, and I'm excited to begin my path in the field. I'm grateful for the opportunity to contribute to a
                    better world through coding and embedded systems, and I'm eagerly working to do more every day.
                    I would love to speak with like-minded people, companies, and organizations who are interested in achieving similar goals, and I hope we can work together soon.</p>
                  <div className="LinksDiv col-4 justify-content-between">
                    <a
                      className="App-link"
                      href="https://www.linkedin.com/company/adam-mathew-vaughn-embedded-systems"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Let's Connect <i className="fas fa-coffee"> {i}</i>
                    </a>
                    <a
                      className="App-link"
                      href="mailto:adam@adammathewvaughn.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Email
                    </a>
                    <a
                      className="App-link"
                      href="sms:+12052596791"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Text
                    </a>
                    <a
                      className="App-link"
                      href="tel:+12052596791"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Call
                    </a>              
                </div>
      </div>
      <Footer className="row-sm-4 d-flex" />
  </>;
}

export default App