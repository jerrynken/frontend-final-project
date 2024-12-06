import React, { useEffect, useReducer } from 'react';

// Reducer function for managing available times and error
const timesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TIMES':
            return { ...state, availableTimes: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};

// Script logic for generating random available times
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

function AvailableTimes({ selectedTime, onTimeChange }) {
    const initialState = {
        availableTimes: [],
        error: null,
    };

    const [state, dispatch] = useReducer(timesReducer, initialState);

    useEffect(() => {
        try {
            const today = new Date();
            const availableTimes = fetchAPI(today); // Use the function directly
            dispatch({ type: 'SET_TIMES', payload: availableTimes });
        } catch (error) {
            console.error('Error fetching available times:', error);
            dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch times.' });
        }
    }, []);

    const handleChange = (e) => {
        const newTime = e.target.value;
        onTimeChange(newTime); // Pass the selected time back to the parent
    };

    return (
        <>
            <label htmlFor="res-time">Choose a time:</label>
            <select
                id="res-time"
                name="res-time"
                value={selectedTime} // Use selectedTime from the parent
                onChange={handleChange}
                required
            >
                <option value="" disabled>
                    Select a time
                </option>
                {state.availableTimes.map((time, index) => (
                    <option key={index} value={time}>
                        {time}
                    </option>
                ))}
            </select>
        </>
    );
}

export default AvailableTimes;
