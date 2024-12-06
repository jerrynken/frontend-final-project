import { useState } from "react";
import AvailableTimes from "./AvailableTimes";
import Occasion from "./Occasion";
import { useNavigate } from 'react-router-dom';

function BookingForm() {
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("1"); // Default value for guests
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedOccasion, setSelectedOccasion] = useState("");
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const submitAPI = async (data) => {
        return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
    };

    const submitForm = async (data) => {
        try {
            const response = await submitAPI(data);
            if (response) {
                navigate('/confirmed');
            } else {
                alert('Submission failed. Please try again');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert('Submission failed. Please try again');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Example validation
        if (!date || !selectedTime || !selectedOccasion || guests < 1 || guests > 10) {
            alert("Please fill in all required fields correctly.");
            return;
        }

        const data = {
            date,
            guests,
            time: selectedTime,
            occasion: selectedOccasion,
        };

        submitForm(data);

        console.log("Form submitted with values:", data);

        // Reset the form
        setDate("");
        setGuests("1");
        setSelectedTime("");
        setSelectedOccasion("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Choose date</label>
            <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            
            {/* Pass selectedTime state and handler to AvailableTimes */}
            <AvailableTimes
                selectedTime={selectedTime}
                onTimeChange={setSelectedTime}
            />

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
            />

            {/* Pass selectedOccasion state and handler to Occasion */}
            <Occasion
                selectedOccasion={selectedOccasion}
                onOccasionChange={setSelectedOccasion}
            />
            <input  disabled={!date || !guests}  aria-label="submit your reservation" type="submit" value="Make your reservation" />
        </form>
    );
}

export default BookingForm;
