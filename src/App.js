import React, { Component } from 'react'
import './App.css'

import Calendar from './Calendar'

class App extends Component {
  constructor () {
    super()

    this.state = {
      selectedDate: new Date()
    }
  }
  selectDay (day) {
    this.setState({
      selectedDate: new Date(this.state.selectedDate.setDate(day))
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Calendar</h1>
        <Calendar
          year={this.state.selectedDate.getFullYear()}
          month={this.state.selectedDate.getMonth()}
          day={this.state.selectedDate.getDate()}
          tasks={[
            {day: 25, body: 'Task 1'},
            {day: 30, body: 'Task 2'}
          ]}
          selectDay={this.selectDay.bind(this)}
        />
      </div>
    )
  }
}

export default App
