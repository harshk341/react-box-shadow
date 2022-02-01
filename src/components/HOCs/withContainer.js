import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { color, length } from '../../helpers';

const withContainer = (InnerComponent) => {

    const Component = ({
        h_offset,
        v_offset,
        blur,
        spread,
        red_color,
        blue_color,
        green_color,
        alpha
    }) => {

        const [shadow, setShadow] = useState(null);
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

            setShadow(`${shadowLength} ${shadowColor}`);

        }, [shadowColor, shadowLength]);

        return <InnerComponent shadow={shadow} />
    }

    return Component;
}

withContainer.propTypes = {
    h_offset: PropTypes.number,
    v_offset: PropTypes.number,
    blur: PropTypes.number,
    spread: PropTypes.number,
    red_color: PropTypes.number,
    blue_color: PropTypes.number,
    green_color: PropTypes.number,
    alpha: PropTypes.number
}

export default withContainer;