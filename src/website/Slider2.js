import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Row,Col,Container,Offcanvas,Button, OffcanvasBody,Carousel} from 'react-bootstrap';
import '../css/all.min.css';



function Slider2(){

   return(
    <div className='s2main bx' id='one'>
       
      
        <div className='s2ss1' >
    <Row>
        <Col>
  <div className='s2s1'>
  <Carousel>
      <Carousel.Item interval={2000}>
      <div className='bg'>
     
      </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className='bg1'></div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className='bg2'></div>
      </Carousel.Item>
     
    </Carousel>
    </div>
    </Col>
    </Row>
    <div className='s2s5'>
      <Row>
        <Col>
        <Row>

          <Col>
          <div className='s2s6'>
            <nav>
              <center>
              <ul>
                <li><a href='#one'>/ home</a></li>
                <li><a href='#two'>/ about</a></li>
                <li><a href='#three'>/ portfolio</a></li>
                <li><a href='#four'>/ reviews</a></li>
                <li><a href='#five'>/ contacts</a></li>
              </ul>
              </center>
            </nav>
          </div>
          </Col>
        </Row>
        </Col>
      </Row>
    </div>
    
  </div>
  
   
 <Row >
  <Col lg='12'>
  <Row className='justify-content-space-between s2s7'>
                <Col lg='4' >
               
                    <div className='s2s9'>
                   <div id='f'>
                   <i class="fa-brands fa-facebook-f"></i>
                   </div>
                   <div id='t'>
                  <i class="fa-brands fa-twitter"></i>
                   </div>
                    <div className='l'>
                    <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                   <div className='i'>
                   <i class="fa-brands fa-instagram"></i> 
                   </div>
                   </div>
                   </Col>
                   <Col lg='8' >
                <p id='n2'>© 2023 Megaone</p>
                </Col>
                    
               
              </Row></Col>
 </Row>
</div>

  
   )
}
export default Slider2;