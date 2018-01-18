import React from 'react'
import { css } from 'glamor'

const styles = {
  container: css({
    flexGrow: 0,
    flexShrink: 0
  }),

//   dateBlock: css({
//     position: 'relative',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-end',
//     boxSizing: 'border-box',
//     padding: `${theme.multiEventContentPadding}em`,
//     backgroundColor: theme.dateBgColor,
//     backgroundPosition: 'center center',
//     backgroundSize: 'cover',
//     height: '32.5%',
//     borderLeft: '1px solid #fff',
//     borderRight: '1px solid #fff'
//   }),

//   month: css({
//     position: 'relative',
//     zIndex: 10,
//     fontFamily: theme.fontBold,
//     fontSize: `${theme.multiEventMonthTextSize}em`,
//     color: theme.dateTextColor,
//     letterSpacing: `${theme.multiEventMonthLetterSpacing}em`
//   }),

//   date: css({
//     position: 'relative',
//     zIndex: 10,
//     fontFamily: theme.fontSemibold,
//     color: theme.dateTextColor,
//     fontSize: `${theme.multiEventDateTextSize}em`,
//     letterSpacing: `${theme.multiEventDateLetterSpacing}em`,
//     lineHeight: '1em', // makes height of element closer to actual font height
//     marginTop: '0.15em', // adds a bit more spacing between date and month
//     marginLeft: '-0.05em' // left aligns date to month
//   }),

  teacherInfo: css({
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    padding: '20px'
  }),

  avatarStyle: css({
    width: '10%',
    height: '10%'
  })
}

export default function TeacherEntry({ teacher }) {
  //console.log('teacher entry', teacher)

  let element = null
  if (teacher.avatar) {
    element = (
      <div {...styles.avatarStyle}>
        <img src={teacher.avatar} height="50%" width="50%"/>
      </div>
    )
  } else {
    element = (
      <div {...styles.avatarStyle}>
        <img src="https://www.freewebmentor.com/default-avatar.png" height="50%" width="50%"/>
      </div>
    )
  }
  return (
    <div {...styles.container}>
      <div {...styles.teacherInfo}>
        { element }
        <div>
          { teacher.first_name }
        </div>
        <div>
          { teacher.last_name }
        </div>
      </div>
    </div>
  )
}
