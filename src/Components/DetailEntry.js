import React from 'react'
import { css } from 'glamor'

const styles = {
  container: css({
    flexGrow: 0,
    flexShrink: 0
  }),

  teacherInfo: css({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
  })
}

export default function DetailEntry({ teacher }) {
  //console.log('teacher entry', teacher)
  const classes = []
  for (let j=0; j<teacher.classes.length; j+=1){
    classes.push(teacher.classes[j].class)
  }

  return (
    <div {...styles.container}>
      <div {...styles.teacherInfo}>
        <div>
          { teacher.id }
        </div>
        <div>
          { teacher.first_name }
        </div>
        <div>
          { teacher.last_name }
        </div>
        <div>
          { teacher.email }
        </div>
        <div>
          { teacher.avatar }
        </div>
        <div>
          { classes }
        </div>
      </div>
    </div>
  )
}
