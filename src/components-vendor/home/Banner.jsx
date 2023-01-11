import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Row,Col } from 'react-bootstrap';


export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text,setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100)
    const period = 2000;
    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick()
        }, delta)
        return ()=>{clearInterval(ticker)}
    },[text])
    const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
  return (
    <div className='banner'>
        <Row className='align-items-center banner-header'>
           
            <Col xs={12} md={6} xl={7}>
                <span className='tagline'>Welcome to my Portfolio</span>
                <h1>{`Hi I'm Webdecoded`} <span>{text}</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis!</p>
                <button className='button button--flex'>Contact &nbsp; <i className="uil uil-message"></i></button>
            </Col>
            
            
            
        </Row>
    </div>
  )
}
