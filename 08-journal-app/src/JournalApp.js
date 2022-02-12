import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';


export const JournalApp = () => {
    return (
      <>
        {/* Provider es un High Order Component que provee la store a toda la aplicación. */}
        <Provider store={ store } >
          <AppRouter />
        </Provider>
      </>
    );
};
