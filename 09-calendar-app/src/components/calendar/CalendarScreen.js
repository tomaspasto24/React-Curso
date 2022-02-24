import React from 'react';
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages';

moment.locale('es');
const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

  const events = [{
    title: 'cumpleaños',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa'
  }]

  return (
    <div className='calendar-screen'>
        <Navbar />
        <Calendar
          localizer={localizer}
          events={ events }
          startAccessor="start"
          endAccessor="end"
          messages={ messages }
        />
    </div>
  )
}
