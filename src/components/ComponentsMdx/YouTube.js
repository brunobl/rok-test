import React from "react"

const styleWrapper = {
    width: '100%',
    height: '0',
    paddingBottom: '56.25%',  // = 360 / 640
    position: 'relative',
    overflow: 'hidden',
    backgroundColor:' #eee',
}

const styleIframe = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
}

const YouTube = ({ videoId }) => (
  <div style={styleWrapper}>
    <div>
    <iframe
      style={styleIframe}
      title="Youtube Video"
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    </div>
  </div>
)

export default YouTube
