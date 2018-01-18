import React from 'react'
import { css } from 'glamor'

import fontLatoBold from '../fonts/Lato-Bold.woff2'
import fontLatoRegular from '../fonts/Lato-Regular.woff2'

const styles = {
  container: css({
    flexGrow: 1,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
  }),

  idStyle: css({
    position: 'absolute',
    top: '45px',
    left: '33%',
    fontFamily: css.fontFace({ fontFamily: 'Lato-Bold', src: `url(${fontLatoBold}) format('woff2')` }),
    color: '#333333',
    fontSize: '40px',
    letterSpacing: '10px'
  }),

  teacherInfo: css({
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    height: '60%'
  }),

  infoStyle: css({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
    fontFamily: css.fontFace({ fontFamily: 'Lato-Bold', src: `url(${fontLatoBold}) format('woff2')` }),
    color: '#333333',
    fontSize: '35px',
    letterSpacing: '7px'
  }),

  cheadStyle: css({
    textAlign: 'left',
    paddingLeft: '40px',
    paddingTop: '40px',
    fontFamily: css.fontFace({ fontFamily: 'Lato-Bold', src: `url(${fontLatoBold}) format('woff2')` }),
    color: '#333333',
    fontSize: '35px',
    letterSpacing: '7px'
  }),

  classStyle: css({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    fontFamily: css.fontFace({ fontFamily: 'Lato-Regular', src: `url(${fontLatoRegular}) format('woff2')` }),
    color: '#333333',
    fontSize: '25px',
    letterSpacing: '7px'
  }),

  avatarStyle: css({
    width: '30%',
    height: '50%'
  })
}

export default function DetailEntry({ teacher }) {
  //console.log('teacher entry', teacher)
  const classes = []
  if (teacher.classes) {
    for (let j=0; j<teacher.classes.length; j+=1){
        classes.push(teacher.classes[j].class)
    }
  } else {
    classes.push("No Classes Entered")
  }

  let element = null
  if (teacher.avatar) {
    element = (
        <img src={teacher.avatar} height="50%" width="100%" alt={teacher.first_name}/>
    )
  } else {
    element = (
        <img src="https://www.freewebmentor.com/default-avatar.png" height="50%" width="100%" alt={teacher.first_name}/>
    )
  }

  return (
    <div {...styles.container}>
      <div {...styles.teacherInfo}>
        <div {...styles.idStyle}>
          { teacher.id }
        </div>
        <div {...styles.avatarStyle}>
          { element }
        </div>
        <div {...styles.infoStyle}>
            <div style={{paddingTop: '3%'}}>
            { `Name: ${teacher.first_name} ${teacher.last_name}` }
            </div>
            <div style={{paddingTop: '10%'}}>
            { `Email: ${teacher.email}` }
            </div>
        </div>
      </div>
      <div {...styles.cheadStyle}>
        Classes Assigned
        <div {...styles.classStyle}>
            { classes }
        </div>
      </div>

    </div>
  )
}
