import React from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';

const BookDetail = () => {
    return ( 
        <div className="container" style={{ width: '60%', display: 'flex',  justifyContent:'center', alignItems:'center', marginLeft:'auto', marginRight:'auto',marginBlockStart:'2%'}}>
                    <div className="card-image" style={{width: '100%' ,marginRight:'5%'}}>
                        <img src='https://cdn-local.mebmarket.com/meb/server1/111330/Thumbnail/book_detail_large.gif?2' alt='asdwasd' style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className="card-right">
                        <h5 className="item-title">สะดุดรักยัยแฟนเช่า</h5>
                        <p className="item-price"><b>THB81.00</b></p>
                        <p className="item-desc">เล่ม 8</p>
                        <br></br>
                        <div>
                            <p className="item-size-text" style={{fontSize:'11px'}}>
                                เนื้อเรื่องมีอยู่ว่า คิโนะชิดะ คาสึยะ อายุ 20 ปี เป็นนักศึกษาไม่ได้เรื่องอาศัยอยู่ในหอพักคนเดียวในโตเกียว เขาถูกบอกเลิกจากแฟนเก่าของเขา ทำให้เขารู้สึกหดหู่กับชีวิตตัวเอง แต่แล้วก็มาเจอแอปพลิเคชัน แอปหนึ่งที่สามารถให้เช่าเพื่อนสาวได้ แต่ห้ามลวนลามหรือจับเนื้อต้องตัวเป็นอันขาด แล้วชีวิตของเขาก็ได้เปลี่ยนไป ตั้งแต่ได้พบกับสาวสวยปริศนาที่ชื่อ มิสึฮาระ จิซึรุ
                            </p>
                        </div>
                        <br></br>
                        <button className="btn-add"><b>ADD TO CART</b></button>
                    </div>
                </div>
     );
}
 
export default BookDetail;