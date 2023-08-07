import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Offcanvas, Button, Carousel } from 'react-bootstrap';

function Slider8() {
    return (
        <div className='s8main bx ' id='five'>
            {/* <Row>
                <Col lg='3' xl='3' className='d-md-none d-lg-block d-xs-none d-sm-none d-xxs-none' >
                <div className='tetx'>
            <p className='headng'>let's get connected</p>
            </div>
                </Col>
            </Row> */}
            
            <Row className='justify-content-end'>
                <Col lg='8' md='8' sm='8' xs='8'>
                   
                <div className="s8s1">
                  
                  <Row className='justify-content-center'>
                        <Col lg='12' sm='12' md='12' >
                        <Row  className='justify-content-space-around'>


                            <Col lg='4' md='4' sm='6' xs='12'>
                                <div className='s8s2'>
                                    <i class="fa-regular fa-paper-plane"></i>
                                    <div className='email'>email@website.com</div>
                                </div>
                            </Col>

                            <Col lg='4'md='4' sm='12' xs='12'>
                                <div className='s8s2'>
                                    <i class="fa-solid fa-tty"></i>
                                    <div className='email'>+1 631 1234 5678</div>
                                </div>
                            </Col>
                            <Col lg='4'md='4' sm='12' xs='12'>
                                <div className='s8s2'>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <div className='adrs'>123 park avenue, new york</div>
                                </div>
                        
                          </Col>
                          </Row> 

                          <form>
                          <Row className='justify-content-start' >
                            <Col lg='12' md='12' sm='12' xs='12'>
                            
                                
                                    <input type='text' placeholder='Name' className='frm'></input>

                                   
                                    </Col>
                                    </Row>

                                    <Row className='justify-content-center'>
                            <Col lg='12'md='12' sm='12' xs='12'>
                            
                                
                                    <input type='text' placeholder='contact no' className='frm'></input>

                                   
                                    </Col>
                                    </Row>

                                    <Row className='justify-content-center'>
                            <Col lg='12'md='12' sm='12' xs='12'>
                            
                                
                                    <input type='text' placeholder='email' className='frm'></input>

                                   
                                    </Col>
                                    </Row>

                                    <Row className='justify-content-center'>
                            <Col lg='12'md='12' sm='12' xs='12'>
                            
                                
                                    <input type='text' placeholder='type your message here' className='frm1'></input>

                                   
                                    </Col>
                                    </Row>
                                    <Row className='justify-content-center'>
                                        
                                        <Col lg='12'md='12' sm='12' xs='12'>
                                       <div className='s8btn'>
                                            <button>submit information</button>
                                            </div>
                                       
                                        </Col>
                                    </Row>

                                    
                          </form>
                          

                        </Col>
                    </Row>
                    
                  
                        
                          </div>
                </Col> 

            </Row>
           
        </div>
           
       
    );
}
export default Slider8;