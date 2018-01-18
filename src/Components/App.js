import React, { Component } from 'react'
import { css } from 'glamor'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Sidebar from 'react-sidebar'

import TeacherEntry from './TeacherEntry'
import DetailEntry from './DetailEntry'

import fontLatoBold from '../fonts/Lato-Bold.woff2'

const styles = {
  container: css({
    height: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: '#9fbfdf'
  }),

  entries: css({
    width: '30%',
    height: '1000px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: '#ecf2f9'
  }),

  welcomeStyle: css({
    paddingTop: '40px',
    paddingLeft: '60px',
    fontFamily: css.fontFace({ fontFamily: 'Lato-Bold', src: `url(${fontLatoBold}) format('woff2')` }),
    color: '#333333',
    fontSize: '50px',
    letterSpacing: '6px'
  }),

  details: css({
    width: '70%',
  })
}

export default class App extends Component {

    render() {
        const { teachers } = this.props
        const entriesToRender = []

        for (let i = 0; i < teachers.length; i+=1) {
            entriesToRender.push(teachers[i].id)
        }

        const sidebarStyles = {
            root: {
                width: '30%',
                height: '100%'
            }
        }
        
        return (


            <Router>
                <div {...styles.container}>

                    <div {...styles.entries}>
                    <Sidebar styles={sidebarStyles}>
                        {entriesToRender.map(index =>
                            <Link key={index} to={`/teacher/${teachers[index-1].id}`} style={{ color: '#000', textDecoration: 'none' }}>
                                <div>
                                <TeacherEntry key={index} teacher={teachers[index-1]}/>
                                </div>
                            </Link>
                        )}
                    </Sidebar>
                    </div>

                    <div {...styles.details}>
                        <Route exact={true} path="/" render={() => (
                            <div {...styles.welcomeStyle}>
                                Welcome to the Demo App
                                <br/>
                                Click a Teacher for more detail
                            </div>
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