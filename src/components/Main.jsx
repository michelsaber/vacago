import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homeImage from "../images/homeImage.jpg"

function Main() {
  return (
    <Container>
      <Row className='py-4'>
        <Col sm={8} >
            <img src={homeImage} className="rounded" alt=""/>
        </Col>
        <Col sm={4} >Second, but last</Col>
      </Row>
      <Row className='row justify-content-md-center'> Always use the best!</Row>
    </Container>
  );
}

export default Main;