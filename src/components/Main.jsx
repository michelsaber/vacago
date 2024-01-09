import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import homeImage from "../images/homeImage.jpg"
import supp from "../images/supp.png"
import guide from "../images/guide.jpg"

function Main() {
  return (
    <Container>
      <Row className='row align-items-center py-4'>
        <Col sm={7} >
            <Image src={homeImage}  fluid rounded alt=""/>
        </Col>
        <Col sm={5} >
            <p >Indulge your senses in the allure of sun-kissed sands and gentle waves. Our slice of paradise invites you to escape the ordinary and embrace the extraordinary. Immerse yourself in the tranquil beauty of our beach haven, where every moment is a promise of relaxation and pure bliss. Your dream vacation begins here.</p>
        <Button variant='outline-primary'>Contact</Button>
        </Col>
      </Row>
      <Card>
      <Card.Body className='bg-dark text-white text-center fst-italic' >Embark on a journey where we believe every escape deserves the best, and your extraordinary vacation starts with us.</Card.Body>
    </Card>
    <Row className='row align-items-center py-4'>
        <Col sm={6} >
            <h2 className="text-gray text-center fs-1 fw-bold">Meet the team</h2>
            <p className=' py-4 text-gray  '>Meet our passionate touristic guides, the heart and soul of your immersive journey. With a wealth of knowledge and a genuine love for the destinations they unveil, our guides transform your exploration into an insightful adventure, creating unforgettable memories at every turn.</p>   
        </Col>
        <Col sm={6} >
        <Image src={guide}  fluid rounded alt=""/>  
        </Col>
      </Row>
      <Card>
      <Card.Body className='bg-dark text-white text-center fst-italic' >Step into an odyssey where we stand firm in our belief that every retreat should be nothing short of extraordinary, and your exceptional journey unfolds in our hands.</Card.Body>
    </Card>
      <Row className='row align-items-center py-4'>
        <Col sm={6} >
            <Image src={supp}  fluid rounded alt=""/> 
        </Col>
        <Col sm={6} >
        <h2 className="text-gray text-center fs-1 fw-bold">Support</h2>
        <p className='py-4 '>Our dedicated team is committed to turning your dream vacation into a seamless reality, providing unparalleled support every step of the way. From expert guidance to personalized assistance, we are here to ensure your getaway is not only memorable but effortlessly extraordinary.</p>
            
        </Col>
      </Row>
      
    </Container>
    
  );
}

export default Main;