import React from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const BookList = () => {
    return ( 
        <div style={{ width: '60%', display: 'flex',  justifyContent:'center', alignItems:'center', marginLeft:'auto', marginRight:'auto',marginBlockStart:'2%'}}>
        <Row xs={1} md={5} className="g-4" >
            {Array.from({ length: 20 }).map((_, idx) => (
                <Col>
                <Card style={{ width: '100%', height:'100%', cursor:'pointer'}} onClick={event=>  window.location.href="/BookDetail"}>
                    <Card.Text variant="left" style={{ fontSize: '11px', color:'#00A300'}}>
                        มีสินค้า
                    </Card.Text>
                    <Card.Img variant="top" src="https://cdn-local.mebmarket.com/meb/server1/111330/Thumbnail/book_detail_large.gif?2" />
                    <Card.Body>
                    <Card.Title style={{ fontSize: '11px' }}>สะดุดรักยัยแฟนเช่า</Card.Title>
                    <Card.Text style={{ fontSize: '15px' }}>
                        THB81.00
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
        </div>
     );
}
 
export default BookList;