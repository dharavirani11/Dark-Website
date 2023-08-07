import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Offcanvas, Button, Carousel } from 'react-bootstrap';


function Slider7(){
    return(
        <div className="s7main ">
            <Container>
                
             <Row className='justify-content-center'>
                <Col lg='12'>
                <Row className='justify-content-space-between'>
                <Col lg='8'>
                            <div className='s7s1'>
                                <div className='s7s2'>
                                <i class="fa-solid fa-quote-left"></i>
                                <p id='s7'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus. 
                                </p>
                                <i class="fa-solid fa-quote-right"></i>
                                </div>      
                               
                            </div>
                            </Col>
                            <Col lg={{offset:2,span:2}} className=' align-items-center pt-5'>
                            <div className='s7s3'>
                                    <div id='s71'>david william</div>
                                    <div id='s72'>newyork city</div>

                                </div>
                            </Col>
             
                        </Row>
                        
                </Col>
             </Row>
             </Container>
        </div>
    );
}
export default Slider7;