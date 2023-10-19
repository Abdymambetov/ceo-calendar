

const DaysOfWeek = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    return (
        <div className="grid-days">
            {days.map(item =>
                <div className="grid-item" key={item}>{item}</div>
            )}
        </div>
    );
}

export default DaysOfWeek;