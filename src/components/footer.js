import React from 'react'
import '../css/footer.css'
import { ImFacebook2, ImTwitter, ImInstagram} from 'react-icons/im'
import { Container} from 'reactstrap';

const Footer = props => (

 <div id = 'contact' className = "footer">
 <Container fluid>
 <h3>Coffee Shop</h3>
 <p>123 Main Ave</p>
 <p>California</p>
 <p>(123)555-1010</p>
  <ImFacebook2/>
  <ImTwitter/>
  <ImInstagram/>
  </Container>
 </div>
)
export default Footer