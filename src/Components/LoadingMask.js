import React from 'react'
import { css } from 'glamor'
import fontLatoRegular from '../fonts/Lato-Regular.woff2'

const styles = {
  mask: css({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#323041',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: css.fontFace({ fontFamily: 'Lato-Regular', src: `url(${fontLatoRegular}) format('woff2')` }),
    color: '#fff',
    fontSize: '200px',
    letterSpacing: '12px'
  })
}

export default function LoadingMask({ text }) {
  return (
    <div {...styles.mask} >
      { text }
    </div>
  )
}
