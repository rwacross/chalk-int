import React from 'react'
import { css } from 'glamor'

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
    left: '31%'
  }),

  teacherInfo: css({
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    padding: '20px'
  }),

  infoStyle: css({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
  }),

  classStyle: css({
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    padding: '20px'
  }),

  avatarStyle: css({
    width: '20%',
    height: '30%'
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
        <img src={teacher.avatar} height="50%" width="50%" alt={teacher.first_name}/>
    )
  } else {
    element = (
        <img src="https://www.freewebmentor.com/default-avatar.png" height="50%" width="50%" alt={teacher.first_name}/>
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
        <div>
          { `Name: ${teacher.first_name} ${teacher.last_name}` }
        </div>
        <div>
          { `Email: ${teacher.email}` }
        </div>
        </div>
      </div>
      <div>
        Classes Assigned
        <div {...styles.classStyle}>
            { classes }
        </div>
      </div>

    </div>
  )
}
