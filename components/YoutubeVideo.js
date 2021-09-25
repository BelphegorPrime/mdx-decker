import React from 'react';
import styled from 'styled-components';
import "./YoutubeVideo.css"

const VideoWrapper = styled.div`
  display: grid;
`;

const Centered = styled.div`
  align-self: center;
  justify-self: center;
  grid-row: 1/2;
  grid-column: 1/2;
`;

const YoutubeVideo = ({
  src,
  maxWidth = "80vw",
  maxHeight = "80vh",
  style = {maxWidth, maxHeight}
}) => {
    return (
        <VideoWrapper>
            <Centered>
                <div className="video-container" style={{
                    ...style,
                    width: maxWidth,
                    height: maxHeight
                }}>
                    <iframe
                        style={style}
                        src={src}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </Centered>
        </VideoWrapper>
      );
}

export default YoutubeVideo;
