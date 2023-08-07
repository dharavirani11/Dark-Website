import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Row,Col,Container,Offcanvas,Button, OffcanvasBody,Carousel} from 'react-bootstrap';
import '../css/all.min.css';
// import React, { useState } from 'react';

function Slider1(){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    return(
        <>
<div className="App">
     <div className='s1main'>
      <Row className='justify-content-center'>
        <Col lg='11'>
       <Row className='justify-content-space-between'>
        <Col lg='2' md='2'>
        <div className='s1s1'>
        <div id='s1' >
        <button variant="primary"onClick={handleShow} >
      <i class="fa-solid fa-bars"></i>
        
      </button>
        </div>

      <Offcanvas show={show} onHide={handleClose}  >
       <div className='s1o'>
       <Row>
        <Col>
        <Offcanvas.Header closeButton className='pb-5'>
        </Offcanvas.Header>
          <Offcanvas.Title className='pb-3'>
            <div >
            <nav className='s1s3'>
                <ul>
                    <li>
                       / home
                    </li>
                    <li>/ about</li>
                    <li>/ portfolio</li>
                    <li>/ review</li>
                    <li>/ contact</li>
                </ul>
            </nav>
            </div>
            </Offcanvas.Title>
        </Col>
       </Row>
       <OffcanvasBody>
              <Row className='mt-5'>
                <Col lg='6' >
               
                    <div className='s1s4'>
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
                <Col lg='5' className='d-flex justify-content-end '>
                <p id='o1'>© 2023 Megaone</p>
                </Col>
              </Row>
            </OffcanvasBody>
            
       </div>
      </Offcanvas>
        </div>

         </Col>
         <Col lg='4'md='4' sm='4' className='d-flex justify-content-end'>
         <div id='s12'>
         <img src={require('../imgs/asset 0.png')}></img>
         </div>
        </Col>
        <Col lg='6'md='6' sm='6' className='d-flex justify-content-end'>
        <div className='s1s2'>
        <button>Get a Quote</button>
        </div>
        </Col>
       </Row>
         </Col>
      </Row>
     </div>


</div>
</>
    );
}
export default Slider1;