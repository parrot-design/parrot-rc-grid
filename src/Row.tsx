import React, { Children } from "react";
import { IRowProps } from '.';
import classnames from '@parrotjs/classnames'; 
import useBreakpoint from './hook/useBreakpoint';
import './index.scss'; 

const Row=(props:IRowProps)=>{

    const {
        prefixCls:customizedPrefixCls='parrot',
        componentName='row',
        className,
        style,
        align='start',
        justify='start',
        wrap=true,
        children
    }=props;

    const screens=useBreakpoint();

    const prefixCls=customizedPrefixCls+'-'+componentName;  

    return (
        <div className={
            classnames(
                prefixCls,
                className,
                {
                    [`${prefixCls}-align-${align}`]:align,
                    [`${prefixCls}-justify-${justify}`]:justify,
                    [`${prefixCls}-wrap`]:wrap,
                }
            )} 
            style={style} 
        > 
            {children}
        </div>
    )
}

export default Row;