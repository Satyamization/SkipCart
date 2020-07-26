import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {

    const current = new Date();
    const currentYear = current.getFullYear();

    return (
        <footer className="foot-footer">
            <Container>
                <Row>
                    <Col md={10}> 
                       <Row>
                           <Col md={3} className="foot-smal-text">
                                <span className="foot-text-head">ABOUT</span>
                                <br></br>
                                contact us
                                <br></br>
                                about us
                                <br></br>
                                Careers
                                <br></br>
                                SkipCart Stories
                                <br></br>
                           </Col>

                           <Col md={3} className="foot-smal-text">
                           <span className="foot-text-head">HELP</span>
                           <br></br>
                           Payments
                           <br></br>
                           Shipping
                           <br></br>
                           Cancelletion and Return
                           <br></br>
                           </Col>

                           <Col md={3} className="foot-smal-text">
                           <span className="foot-text-head">POLICY</span>
                           <br></br>
                           Return Ploicy
                           <br></br>
                           Terms of use
                           <br></br>
                           Security
                           <br></br>
                           Privacy
                           <br></br>
                           </Col>

                           <Col md={3} className="foot-smal-text">
                           <span className="foot-text-head">SOCIAL</span>
                           <br></br>
                           Facebook
                           <br></br>
                           Twitter
                           <br></br>
                           Youtube
                           <br></br>
                           </Col>
                       </Row>
                    </Col>

                    <Col md={2} className="foot-smal-text foot-address">
                    <span className="foot-text-head">Adderss :</span>
                        <br></br>
                        <span className="foot-addres-brand">SkipCart Internet Private Limited,</span>
                        <br></br>
                        I-512 hindaclo colony plant-1, Renukoot, Sonebhadra, Uttar Pradesh, India
                    </Col>
                    
                </Row>
            </Container>
            <hr></hr>
            <div className="copy-right">Copyright ® {currentYear}  SkipCart.com</div>
        </footer>
    );
}



export default Footer;