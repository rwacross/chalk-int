import React, { Component } from 'react'
import { css } from 'glamor'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import TeacherEntry from './TeacherEntry'
import DetailEntry from './DetailEntry'

//import theme from '../theme'

// css.global('html, body, #root', {
//   height: '100%'
// })

// css.global('body', {
//   margin: 0,
//   // backgroundColor: theme.base.bgColor
// })

// css.global('html', {
// //   fontSize: `${theme.base.rootFontSize}px`,
// //   fontFamily: theme.base.fontRegular,
// //   color: theme.base.textColor
// })

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
    flexDirection: 'column',
    backgroundColor: '#ecf2f9'
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
        // console.log('entries', entriesToRender)
        return (
            <Router>
                <div {...styles.container}>
                    <div {...styles.entries}>
                        {entriesToRender.map(index =>
                            <Link key={index} to={`/teacher/${teachers[index-1].id}`} style={{ color: '#000', textDecoration: 'none' }}>
                                <div>
                                <TeacherEntry key={index} teacher={teachers[index-1]}/>
                                </div>
                            </Link>
                        )}
                        
                    </div>
                    <div {...styles.details}>
                        <Route exact={true} path="/" render={() => (
                            <h1>Welcome. Click on a Teacher for full details</h1>
                        )}/>
                        <Route path="/teacher/:id" render={({ match }) => (
                            <DetailEntry teacher={teachers[match.params.id -1]} />
                        )}/>
                    </div> 
                </div>
            </Router>
        )
    }
}

// const Detail = ({ teacher }) => {
//   console.log('teacher entry', teacher)
//   const classes = []
//   for (let j=0; j<teacher.classes.length; j+=1){
//     classes.push(teacher.classes[j].class)
//   }

//   return (
//     <div {...styles.container}>
//         Hello. I'm a teacher
//     </div>
//   )
// }