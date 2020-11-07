import React from 'react'
import '../css/footer.css'
import { Container, Row, Col} from 'reactstrap';

const Footer = props => (

 <div id = 'contact' className = "footer">
 <Container fluid>
 <div className = 'location'>
 <h2><b>Our Locations</b></h2>
 <Row>
 <Col md = '4'>
 <h3>California</h3>
 <p>123 Main st.</p>
 <p>California</p>
 <p>(123)555-6010</p>
 </Col>
 <Col md = '4'>
 <h3>Arizona</h3>
 <p>123 Main st.</p>
 <p>California</p>
 <p>(123)555-6010</p>
 </Col>
 <Col md = '4'>
 <h3>Nevada</h3>
 <p>123 Main st.</p>
 <p>California</p>
 <p>(123)555-6010</p>
 </Col>
 </Row>
 </div>
</Container>
 
 </div>
)
export default Footer