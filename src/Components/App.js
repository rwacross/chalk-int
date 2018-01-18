import React, { Component } from 'react'
import { css } from 'glamor'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Sidebar from 'react-sidebar'

import TeacherEntry from './TeacherEntry'
import DetailEntry from './DetailEntry'

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