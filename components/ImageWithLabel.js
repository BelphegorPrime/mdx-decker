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
    maxWidth = "80vw",
    maxHeight = "80vh",
    style = {maxWidth, maxHeight}
}) => (
    <Fragment>
        <div style={style}>
            {React.cloneElement(children, {alt: children.alt || label, style})}
        </div>
        <Label>{label}</Label>
    </Fragment>
);

export default ImageWithLabel