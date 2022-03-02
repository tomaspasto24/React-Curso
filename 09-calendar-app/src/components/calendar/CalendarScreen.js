import React, { useState } from 'react';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { messages } from '../../helpers/calendar-messages';
import { CalendarEvent } from './CalendarEvent';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveNote, eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');
const localizer = momentLocalizer(moment);

// const events = [{
//     title: 'cumpleaños',
//     start: moment().toDate(),
//     end: moment().add(2, 'hours').toDate(),
//     bgcolor: '#fafafa',
//     user: {
//       _id: 123,
//       name: 'Tomás'
//     }
// }];

export const CalendarScreen = () => {

  const { events, activeEvent } = useSelector(state => state.calendar);

  // useState para guardar el estado del lastView. 
  const [lastView, setLastView ] = useState( localStorage.getItem('lastView') || 'month' );
  
  const dispatch = useDispatch();

  const onDoubleClick = (e) => {

    dispatch( uiOpenModal() );
  
  };

  const onSelectEvent = (e) => {
    dispatch( eventSetActive( e ) );
  };

  const onViewChange = (e) => {
    setLastView(e);
    //Cada vez que se cambia de vista (dia, mes, etc) se guarda en el localStorage
    localStorage.setItem('lastView', e);
  };

  const eventStyleGetter = ( event, start, end, isSelected) => {
    
    const style = {
        backgroundColor: '#367CF7',
        borderRadius: '0px',
        opacity: 0.8,
        display: 'block',
        color: 'white'
    }

    return {
      style
    }
  };

  const onSelectSlot = (e) => {
    dispatch( eventClearActiveNote() );
  }

return (
      <div className='calendar-screen'>
          <Navbar />
          <Calendar
            localizer={localizer}
            events={ events }
            startAccessor="start"
            endAccessor="end"
            messages={ messages }
            eventPropGetter={ eventStyleGetter }
            view={ lastView }
            onSelectSlot={ onSelectSlot }
            selectable={ true }
            components={ {
              event: CalendarEvent
            } }
            onDoubleClickEvent={ onDoubleClick }
            onSelectEvent={ onSelectEvent }
            onView={ onViewChange }
          />

          <AddNewFab />
          
          {
            (activeEvent !== null) && (
              <DeleteEventFab />
            )
          }

          <CalendarModal />
      </div>
  )
}
