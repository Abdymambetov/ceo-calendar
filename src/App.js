import React, { useState } from 'react';
import './App.scss';
import DaysOfWeek from './components/DaysOfWeek';
import GridCalendar from './components/GridCalendar';
import Header from './components/Header';
import SwitchMonth from './components/SwitchMonth';
import moment from 'moment'
import ModalAdd from './components/UI/ModalAdd';

function App() {
  const [active, setActive] = useState(false)

  const [today, setToday] = useState(moment())
  const startDay = today.clone().startOf('month').startOf('week')
  const currentMonth = today.clone().format('MMMM')
  const currentYear = today.clone().format('YYYY')
  const currentDay = moment().clone()
  const flexibleCurrentMonth = today.clone()
  const day = startDay.clone()
  const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone())

  const handlePrevMonth = () => {
    setToday(prev => prev.clone().subtract(1, 'month'))
  }
  const handleNextMonth = () => {
    setToday(prev => prev.clone().add(1, 'month'))
  }
  const handleThisMonth = () => {
    setToday(moment())
  }
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <div className='calendar'>
          <SwitchMonth
            currentMonth={currentMonth}
            currentYear={currentYear}
            handleNextMonth={handleNextMonth}
            handlePrevMonth={handlePrevMonth}
            handleThisMonth={handleThisMonth}
          />
          <DaysOfWeek />
          <GridCalendar
            flexibleCurrentMonth={flexibleCurrentMonth}
            daysArray={daysArray}
            currentDay={currentDay}
            setActive={setActive} />
        </div>
      </div>
      <ModalAdd setActive={setActive} active={active} />
    </div>
  );
}

export default App;
