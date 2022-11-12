import { useState } from "react";
import { ScootersData } from "../../../data/scootersData";
import './ScootersItem.css';




function Filter() {

    //  const [filtered, setFiltered] = useState(ScootersData)
    //  const filterItem = (categItem) => {
    //     const updatedItems = ScootersData.filter((curElem) => {
    //         return curElem.category === categItem
    //     })

    //     setFiltered(updatedItems);
    //  }

    return (
        <div className="filter__container">
            <button >All</button>
            <button >Honda</button>
            <button >Yamaha</button>
            <button>Vespa</button>
        </div>
    );
}

export default Filter;