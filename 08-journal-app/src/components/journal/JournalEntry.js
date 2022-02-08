import React from 'react';

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>

            <div 
                className='jorunal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://1.bp.blogspot.com/-79DdxzZkDog/T76QV6v5IuI/AAAAAAAAAEY/6DzpGZzsmfA/s320/homerocatolico_456_336.jpg)'
                }}
            ></div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un Nuevo dia
                </p>

                <p className='journal__entry-content'>
                    Hoaslasdasjdasjdasjldjlsadjldsajlsajlsajldsjladjlsadljasdljasdljads 
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>24</h4>
            </div>

        </div>
    );
};
