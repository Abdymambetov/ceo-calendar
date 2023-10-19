import { useDispatch, useSelector } from "react-redux";
import { getSelectedData } from "../store/reducers/planReducer";

const GridCalendar = ({ daysArray, currentDay, setActive, flexibleCurrentMonth }) => {
    const { plans } = useSelector(state => state.plan)
    const dispatch = useDispatch()
    const modalToAdd = (day) => {
        setActive(true)
        dispatch(getSelectedData(day))
    }
    return (
        <div className="grid-wrapper">
            <div className="grid">
                {daysArray.map(day =>
                    <div className={day.isoWeekday() === 6 || day.isoWeekday() === 7 ? "grid-item weekend" : "grid-item"} key={day.format('DD-MM-YYYY')}>
                        <div className={
                            plans.find(item => item.data === day.format('DD MMM YYYY'))
                                ?
                                'red-circle'
                                :
                                ''
                        }></div>
                        <p
                            onClick={() => modalToAdd(day.format('DD MMM YYYY'))}
                            className={currentDay.format('DD-MM-YYYY') === day.format('DD-MM-YYYY') ? "active" : ''}
                            style={flexibleCurrentMonth.format('MM') !== day.format('MM') ? { color: '#BDBEBD' } : {}}
                        >
                            {
                                day.format('D') === 1
                                    ?
                                    day.format('D MMM')
                                    :
                                    day.format('D')
                            }
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GridCalendar;