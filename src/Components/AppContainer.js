import React, { PureComponent } from 'react';
import axios from 'axios'

import isPerson from '../utils/isPerson'
import LoadingMask from './LoadingMask'
import App from './App'


const API_DOMAIN = 'https://cdn.chalk.com/misc/sample_teachers.json'
const UPDATE_INTERVAL = 1000 * 60 * 60 // 1 hour
const SYSTEM_TIME_INTERVAL = 1000 * 60 // 1 minute

export default class AppContainer extends PureComponent {

  componentWillMount() {
    this.getData()
    this.updateInterval = setInterval(() => {
      this.getData()
    }, UPDATE_INTERVAL)

    this.getSystemTime()
    this.systemTimeInterval = setInterval(() => {
      this.getSystemTime()
    }, SYSTEM_TIME_INTERVAL)
  }

  componentWillReceiveProps(nextProps) {
    clearInterval(this.updateInterval)

    this.getData()
    this.updateInterval = setInterval(() => {
      this.getData()
    }, UPDATE_INTERVAL)
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval)
    clearInterval(this.systemTimeInterval)
  }

  getDataFromApi() { // eslint-disable-line class-methods-use-this
    const url = API_DOMAIN

    return axios.get(url)
      .then((response) => {
        if (!isPerson(response.data)) {
          console.log(response.data) // eslint-disable-line no-console
          throw new Error('Invalid Data - Entries in incorrect format')
        }
        return response.data
      })
  }

  getData() {
    this.getDataFromApi()
      .then((response) => {
        console.log('Server data: ', response)
        const result = {
          apiData: response,
          lastFetchTime: +(new Date())
        }

        this.setState(result)
      })
      .catch((err) => {
        if (err.code === 400) {
          this.setState({ error: 'Problem getting data from API' })
        }
        console.error(err) // eslint-disable-line no-console
      })
  }

  getSystemTime() {
    this.setState({ systemTime: +(new Date()) })
  }

  render() {
    const { apiData, error } = this.state

    let element = null

    if (apiData) {
      element = (
        <div >
          <App 
          teachers={apiData}
          />
        </div >
      )
    } else if (error) {
      element = <LoadingMask text={error} />
    } else {
      element = <LoadingMask text="Loading" />
    }

    return (
      <div>
        { element }
      </div>
    )
  }
}
