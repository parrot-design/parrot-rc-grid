import React,{ useEffect } from 'react'; 
import { Row,Col } from '../../src';
import "./index.css";

const commonStyle={
    color:'white',
    background:'skyblue',
    borderRight:'1px solid red',
    height:50
}

const Demo=()=>{

    useEffect(() => {
        
    }, []);

    return (
        <div>

            <Row align="start" justify='start'>
                <Col span={2}   offset={2} push={1}><div style={commonStyle}>1</div></Col>
                <Col span={16} offset={2}><div style={commonStyle}>2</div></Col>
                <Col span={2}  ><div style={commonStyle}>3</div></Col>
            </Row> 

        </div>
    )
}

export default Demo;