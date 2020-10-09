import React from 'react'
import '../css/footer.css'
import { ImFacebook2, ImTwitter, ImInstagram} from 'react-icons/im'
import { Container} from 'reactstrap';

const Footer = props => (

 <div id = 'contact' className = "footer">
 <Container fluid>
 <h3>Coffee Shop</h3>
 <p>123 Main st.</p>
 <p>California</p>
 <p>(123)555-6010</p>
  <ImFacebook2 className = 'icon'/>
  <ImTwitter className = 'icon'/>
  <ImInstagram className = 'icon'/>
</Container>
 
 </div>
)
export default Footer