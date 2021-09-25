import React, {Fragment} from 'react';
import styled from 'styled-components';

const Label = styled.div([], {
  fontSize: '0.8em',
});

/**
 * An image with a label underneath
 */
const ImageWithLabel = ({
    children,
    label,
    style: propStyle = {}
}) => {
    const style = {
        ...propStyle,
        maxWidth: propStyle.maxWidth || "80vw",
        maxHeight: propStyle.maxHeight || "80vh",
        marginBottom: propStyle.marginBottom || 10
    }

    return (
        <Fragment>
            {React.cloneElement(children, {alt: children.alt || label, style})}
            <Label>{label}</Label>
        </Fragment>
    )
};

export default ImageWithLabel