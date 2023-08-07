import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Container,Offcanvas,Button,Carousel} from 'react-bootstrap';

function Slider5(){
    return(
    <div className="s5main bx" id='three'>
        <Row>
            <Col lg='12'>
            <div className='s5s1'>
            <Carousel>
      <Carousel.Item>
       <div className='s5img1'>

       </div>
       <div className='capt'>
Lorem ispum is simply dummy text of the printing
 
</div>
       
      
      </Carousel.Item>
      
      <Carousel.Item>
      <div className='s5img2'>
       </div>
     
      </Carousel.Item>
      
      <Carousel.Item>
      <div className='s5img3'>
       </div> <Carousel.Caption>
      
      </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
    
            </div> 
            </Col>
        </Row>
        <Row>
            
            <Col lg='4'>
            <Row>
                
                <Col lg='1'>
                <div className='s5s2'>
                <h4>
               
                latest<br></br> creative <br></br>work
               
                </h4>
            </div>
                </Col>
            </Row>

            </Col>
           </Row>
       


    </div>
    );
}
export default Slider5;