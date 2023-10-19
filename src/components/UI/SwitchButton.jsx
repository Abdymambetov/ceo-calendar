
const SwitchButton = ({ handleNextMonth, handleThisMonth, handlePrevMonth }) => {
    return (
        <>
            <button onClick={() => handlePrevMonth()}>&#60;</button>
            <button onClick={() => handleThisMonth()}>Today</button>
            <button onClick={() => handleNextMonth()}>&#62;</button>
        </>
    );
}

export default SwitchButton;