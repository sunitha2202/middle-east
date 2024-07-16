
import  React, { useState , useEffect } from 'react'
import './DateTime.css'
import moment from 'moment/moment';


export const DateTime = () => {

    const [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <>
        <div>
        <p className='dateTime'> {moment(new Date()).format('LL')}</p>
            <p className='dateTime'> {moment(new Date()).format('LTS')}</p>

        </div>
        
        </>
    )
}

export default DateTime
