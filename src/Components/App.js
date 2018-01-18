import React, { Component } from 'react'
import { css } from 'glamor'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import TeacherEntry from './TeacherEntry'
import DetailEntry from './DetailEntry'

//import theme from '../theme'

css.global('html, body, #root', {
  height: '100%'
})

css.global('body', {
  margin: 0,
  // backgroundColor: theme.base.bgColor
})

css.global('html', {
//   fontSize: `${theme.base.rootFontSize}px`,
//   fontFamily: theme.base.fontRegular,
//   color: theme.base.textColor
})

const styles = {
  container: css({
    height: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'row'
  }),

  entries: css({
    width: '30%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }),

  details: css({
    width: '70%'
  })
}

export default class App extends Component {

    componentDidMount() {}

    render() {
        const { teachers } = this.props
        const entriesToRender = []
        //Test with only 10 entries
        //console.log('First 10 entries', teachers.slice(0,10))
        for (let i = 0; i < teachers.length; i+=1) {
            entriesToRender.push(teachers[i].id)
        }
        console.log('entries', entriesToRender)
        return (
            <div {...styles.container}>
                <div {...styles.entries}>
                    {entriesToRender.map(index =>
                        <TeacherEntry key={index} teacher={teachers[index-1]}/>
                    )}
                </div>
                <div {...styles.details}>
                    <DetailEntry teacher={teachers[0]} />
                </div> 
            </div>
        )
    }
}