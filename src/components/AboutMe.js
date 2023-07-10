
import Accordion from 'react-bootstrap/Accordion';
import { TypeAnimation } from 'react-type-animation';
import '../styles/aboutme.css'


import Card from 'react-bootstrap/Card';



function About() {
  return (

   
        <><Card className="text-white heroAbout">
      
      <Card.ImgOverlay>
        <Card.Title style={{
            fontSize: '2.6em',
            color: 'white',
            fontFamily: 'Orbitron',
            textAlign: 'left',  
              marginLeft: '20px' , 
              marginTop: '25%',
          }}>Hi There! 
          I'm Sara Rose Wendland!</Card.Title>
        <Card.Text style={{
              fontSize: '1em',
              color: 'white',
              fontFamily: 'Caprasimo-Regular',
              textAlign: 'left',  
              marginTop: '10px',
              marginLeft: '20px'  
            }}>

        
        <TypeAnimation
          sequence={[
            "Attempting to Code Hello Worl",
            1000,
            "Attempting to Code World Peace",
            1000,
            "Attempting to Code World Peace One Line at a Time!",
            1000,
          ]}
          speed={50}
          repeat={0}
          style={{
            fontSize: '2em',
            color: 'white',
            fontFamily: 'Caprasimo-Regular'
          }} />
     
          
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
    
</>
      

  
);
}



export default function App() {
  return (
    <div>
      <About />

    </div>
  );
}
