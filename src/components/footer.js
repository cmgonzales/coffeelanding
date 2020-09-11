import React from 'react'
import '../css/footer.css'
import { ImFacebook2, ImTwitter, ImInstagram} from 'react-icons/im'


const Footer = props => (

 <div id = 'contact' className = "footer">
 <h3>Coffee Shop</h3>
 <p>123 Main Ave</p>
 <p>California</p>
 <p>(123)555-1010</p>
  <ImFacebook2/>
  <ImTwitter/>
  <ImInstagram/>
 </div>
)
export default Footer