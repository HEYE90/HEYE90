import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Data from '../../assets/Data/Data.json'

import Saksi from "./Saksi";
import Cardak from "./Cardak";
import '../Page.css'

const Flowers = () => {

    const [search, setSearch] = useState("");
    const [filteredType, setFilteredType] = useState(Data);

    const value = { search, filteredType, setSearch, setFilteredType };
    const data = { filteredType };


    return (
        <>
                <Routes>
                    <Route path='Saksi' element={<Saksi />} />
                    <Route path='Cardak' element={<Cardak />} />
                </Routes>
        </>
    )
}

export default Flowers
