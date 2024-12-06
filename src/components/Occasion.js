function Occasion({ selectedOccasion, onOccasionChange }) {
    const occasions = ["Birthday", "Anniversary", "Valentine"];

    return (
        <>
            <label htmlFor="occasion">Occasion:</label>
            <select
                id="occasion"
                name="occasion"
                value={selectedOccasion}
                onChange={(e) => onOccasionChange(e.target.value)}
                required
            >
                <option value="" disabled>
                    Select an occasion
                </option>
                {occasions.map((occasion, index) => (
                    <option key={index} value={occasion}>
                        {occasion}
                    </option>
                ))}
            </select>
        </>
    );
}

export default Occasion;
