import React from "react";
import { IColProps } from '.';
import classnames from '@parrotjs/classnames';
import './index.scss';

const Col=(props:IColProps)=>{

    const {
        prefixCls:customizedPrefixCls='parrot',
        componentName='col',
        className,
        style,
        children,
        flex,
        span=1,
        order,
        offset,
        push,
        pull
    }=props;

    const prefixCls=customizedPrefixCls+'-'+componentName;

    const ColStyles={
        flex,
        display:span===0?'none':undefined,
        order,
        ...style
    };

    return (
        <div className={
            classnames(
                prefixCls,
                className,
                {
                    [`${prefixCls}-span-${span}`]:span,
                    [`${prefixCls}-offset-${offset}`]:offset,
                    [`${prefixCls}-push-${push}`]:push,
                    [`${prefixCls}-pull-${pull}`]:pull,
                }
            )} 
            style={ColStyles}
        >
            {children}
        </div>
    )
}

export default Col;