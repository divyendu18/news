import React, { useState, useEffect } from 'react';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
export const DateTime = () => {

    var [date, setDate] = useState("");

    useEffect(() => {
        let curDate = new Date();
        let res = monthNames[curDate.getMonth()] + " " + curDate.getDate()+", "+curDate.getFullYear();
        setDate(res);
    }, [date]);

    return (
        <h5 className="date">Today: {date}</h5>
    )
}

export default DateTime;