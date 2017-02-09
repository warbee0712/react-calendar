import React from 'react'

import './Calendar.css'

class Month extends React.Component {
  render () {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let monthLength = daysInMonth[this.props.month]
    if (this.props.month === 1) {
      if ((this.props.year % 4 === 0 && this.props.year % 100 !== 0) || this.props.year % 400 === 0){
        monthLength = 29;
      }
    }
    let monthDays = []
    for (let i = 1; i <= monthLength; i++) {
      monthDays.push(i)
    }

    const firstDay = new Date(this.props.year, this.props.month, 1)
    const firstWeekday = firstDay.getDay()
    let emptyDays = []
    for (let i = 0; i < firstWeekday; i++) {
      emptyDays.push(i)
    }

    const monthLabel = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const weekdayLabel = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    const previousMonth = this.props.month - 1
    const nextMonth = this.props.month + 1

    return (
      <div className="month">
        <h2 className="month__name">
          <span className="month__name-previous" onClick={() => this.props.selectDate(previousMonth)}>{monthLabel[previousMonth%12] || 'December'}</span>
          <span className="month__name-current">{monthLabel[this.props.month]}</span>
          <span className="month__name-next" onClick={() => this.props.selectDate(nextMonth)}>{monthLabel[nextMonth%12]}</span>
        </h2>
        <div className="month__weekdays">
          {weekdayLabel.map((weekday, index) => <div key={index} className="day"><span>{weekday}</span></div>)}
        </div>
        <div className="month__days">
          {emptyDays.map(emptyDay => <div className="day" key={emptyDay}><span></span></div>)}
          {monthDays.map(day => {
            if (this.props.day === day) {
              return <div key={day} className="day selected"><span>{day}</span></div>
            } else {
              return <div key={day} className="day"><span onClick={() => this.props.selectDate(this.props.month, day)}>{day}</span></div>
            }
          })}
        </div>
      </div>
    )
  }
}

export default Month
