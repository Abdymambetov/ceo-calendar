import SwitchButton from "./UI/SwitchButton";

const SwitchMonth = ({ handleNextMonth, handlePrevMonth, handleThisMonth, currentMonth, currentYear }) => {
    return (
        <div className="calendar-head">
            <div className="month-title">
                <span className="month">{currentMonth}</span>
                <span className="year"> {currentYear}</span>
            </div>
            <div className="btns">
                <SwitchButton handleNextMonth={handleNextMonth} handlePrevMonth={handlePrevMonth} handleThisMonth={handleThisMonth} />
            </div>
        </div>
    );
}

export default SwitchMonth;