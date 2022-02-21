import { types } from '../../types/types';

describe('Pruebas sobre types.', () => {
    
    const typesExpected = {
    
        login: '[auth] Login',
        logout: '[auth] Logout',
    
        uiSetError: '[UI] Set Error',
        uiRemoveError: '[UI] Remove Error',
    
        uiStartLoading: '[UI] Start Loading',
        uiFinishLoading: '[UI] Finish Loading',
    
        notesAddNew: '[Notes] New note',
        notesActive: '[Notes] Set active note',
        notesLoad: '[Notes] Load notes',
        notesUpdated: '[Notes] Update note',
        notesFileUrl: '[Notes] Update image url',
        notesDelete: '[Notes] Delete note',
        notesLogoutCleaning: '[Notes] Logout Cleaning ',
    
    };

    test('Debe contener los tipos correspondientes.', () => {
        expect( types ).toEqual( typesExpected );
    });

});