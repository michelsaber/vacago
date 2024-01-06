import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import homeImage from "../images/homeImage.jpg"

function Main() {
  return (
    <Container>
      <Row className='py-4'>
        <Col sm={7} >
            <Image src={homeImage}  fluid rounded alt=""/>
        </Col>
        <Col sm={5} >
            <p className='font-italic'>Indulge your senses in the allure of sun-kissed sands and gentle waves. Our slice of paradise invites you to escape the ordinary and embrace the extraordinary. Immerse yourself in the tranquil beauty of our beach haven, where every moment is a promise of relaxation and pure bliss. Your dream vacation begins here.</p>
        <Button variant='outline-primary'>Contact</Button>
        </Col>
      </Row>
      <Card>
      <Card.Body className='bg-dark text-white text-center' >Embark on a journey where we believe every escape deserves the best, and your extraordinary vacation starts with us.</Card.Body>
    </Card>
    </Container>
  );
}

export default Main;