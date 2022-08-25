import { useState } from "react";

import Data2 from '../../assets/Data/Data.json'

import MainCard from '../../component/Card/MainCard'
import FilterBar from '../../component/FilterBar/FilterBar'

const Saksi = () => {

    const data = Data2.filter(costum => costum.type === 'saksi')

    const [search, setSearch] = useState("");

    const value = { search, setSearch };

    return (
        <>
            <MainCard value={value} data={data} >
                <FilterBar value={value} />
            </MainCard>
        </>
    )
}

export default Saksi