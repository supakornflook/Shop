import React from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';

const BookDetail = () => {
    return ( 
        <div className="container" style={{ width: '60%', display: 'flex',  justifyContent:'center', alignItems:'center', marginLeft:'auto', marginRight:'auto',marginBlockStart:'2%'}}>
                    <div className="card-image">
                        <img src='https://cdn-local.mebmarket.com/meb/server1/111330/Thumbnail/book_detail_large.gif?2' alt='asdwasd' style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className="card-right">
                        <h5 className="item-title">dsasdw</h5>
                        <p className="item-price"><b>$44.00</b></p>
                        <p className="item-desc">444</p>
                        <br></br>
                        <div>
                            <p className="item-size-text">SIZE</p>
                            <p className="item-size-star">*</p>
                            <p className="item-size-selected"></p>
                        </div>
                        <br></br>
                        <button className="btn-add"><b>ADD TO CART</b></button>
                    </div>
                </div>
     );
}
 
export default BookDetail;