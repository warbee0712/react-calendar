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
  selectDate (month, day) {
    if (day !== undefined) {
      this.setState({
        selectedDate: new Date(this.state.selectedDate.setMonth(month, day))
      })
    } else {
      this.setState({
        selectedDate: new Date(this.state.selectedDate.setMonth(month))
      })
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">{this.state.selectedDate.getFullYear()} Calendar</h1>
        <Calendar
          year={this.state.selectedDate.getFullYear()}
          month={this.state.selectedDate.getMonth()}
          day={this.state.selectedDate.getDate()}
          tasks={[
            {date: new Date(2017, 2, 25), body: 'Task 1'},
            {date: new Date(2017, 2, 20), body: 'Task 2'}
          ]}
          selectDate={this.selectDate.bind(this)}
        />
      </div>
    )
  }
}

export default App
