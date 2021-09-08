import React from 'react'; 
import Row from './Row';
import Col from './Col';

export interface IRowProps{ 
    prefixCls?:string;
    componentName?:string;
    className?:string; 
    style?:React.CSSProperties;
    align?:'start'|'center'|'end';
    justify?:'start'|'end'|'center'|'around'|'between';
    wrap?:boolean;
    children?:any;
} 

export interface IColProps{ 
    prefixCls?:string;
    componentName?:string;
    className?:string; 
    style?:React.CSSProperties; 
    children?:any;
    flex?:string|number;
    span?:number;
    order?:number;
    offset?:number;
    pull?:number;
    push?:number;
} 

export {
    Row,
    Col
}