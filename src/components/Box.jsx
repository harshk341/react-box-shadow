import React, { memo, useEffect, useState } from 'react';

function color(r, g, b, a) {
    return `rgba(${r}, ${b}, ${g}, ${a})`;
}

function length(x, y, b, s) {
    x = setUnit(x);
    y = setUnit(y);
    b = setUnit(b);
    s = setUnit(s);
    return `${x} ${y} ${b} ${s}`;
}

function setUnit(val) {
    return val ? `${val}px` : val;
}

const Box = ({
    h_offset,
    v_offset,
    blur,
    spread,
    red_color,
    blue_color,
    green_color,
    alpha
}) => {

    const [style, setStyle] = useState(null);
    const [shadowColor, setShadowColor] = useState(null);
    const [shadowLength, setShadowLength] = useState(null);

    useEffect(() => {

        setShadowColor(color(red_color, blue_color, green_color, alpha));

    }, [
        red_color,
        blue_color,
        green_color,
        alpha
    ]);

    useEffect(() => {

        setShadowLength(length(h_offset, v_offset, blur, spread));

    }, [
        h_offset,
        v_offset,
        blur,
        spread,
    ]);

    useEffect(() => {

        setStyle({
            boxShadow: `${shadowLength} ${shadowColor}`
        });

    }, [shadowColor, shadowLength]);

    return (
        <div style={style} className="box">
            <span>Box</span>
        </div>
    );
}

export default memo(Box);