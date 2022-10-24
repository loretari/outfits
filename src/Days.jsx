import React, {useContext} from "react";
import DataContext from './context/DataContext';


const Days = () => {
    const {selectedWeakDay, handleWeakDaySelectionChange} = useContext(DataContext);

    return (
        <select className="form-select form-select-lg" value={selectedWeakDay} onChange={handleWeakDaySelectionChange}>
            <option vlalue="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Friday">Friday</option>
        </select>
    )


}

export default Days;