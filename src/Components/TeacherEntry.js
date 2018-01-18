import React from 'react'
import { css, merge } from 'glamor'

const styles = {
  container: css({
    flexGrow: 0,
    flexShrink: 0
  }),

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
        <img src={teacher.avatar} height="50%" width="50%" alt={teacher.first_name}/>
    )
  } else {
    element = (
        <img src="https://www.freewebmentor.com/default-avatar.png" height="50%" width="50%" alt={teacher.first_name}/>
    )
  }

  let bgcol = null
  if (teacher.id % 2 === 0) {
    bgcol = {backgroundColor: '#ecf2f9'}
  } else {
    bgcol = {backgroundColor: '#fff'}
  }

  return (
    <div {...styles.container} style={ bgcol }>
      <div {...styles.teacherInfo}>
        <div {...styles.avatarStyle}>
          { element }
        </div>
        <div>
         { `${ teacher.first_name } ${teacher.last_name}` }           
        </div>
      </div>
    </div>
  )
}
