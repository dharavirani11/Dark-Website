
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Container,Offcanvas,Button} from 'react-bootstrap';
import 'animate.css';



function Slider4(){
    return(
            <div className="s4main">
                <Row>
                    <Col>
                    <Container>
                        <Row className='justify-content-space-between'>
                            <Col lg='6'>
                            <div
                            className="s4s1">
                               
                               <div className='s4s2'>
                                <i class="fa-regular fa-lightbulb"></i>
                                </div>
                                <div className='s4s3'>
                                Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.
                                </div>
                              
                                
                            </div>
                            </Col>

                        </Row>
                        <Row>
                            <Col lg='8'></Col>
                            <Col lg='4'>
                            <div className='s4s4'>
                            <div className='s4s2 bag'>
                            <i class="fa-solid fa-briefcase"></i>
                                </div>
                                <div className='s4s6'>
                                Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.
                                </div>
                                </div>
                                
                            
                            </Col>
                        </Row>
                        <Row>
                            <Col lg='6'>
                            <div className='s4s8'>
                           
                                <div className='s4s7'>
                                Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.
                               
                                </div>
                                <div className='s4s2'>
                            <i class="fa-regular fa-heart"></i>
                                </div> 
                                </div>
                                
                            
                            </Col>
                        </Row>
                    </Container>
                    </Col>
                </Row>

            </div>
    );
}
export default Slider4;