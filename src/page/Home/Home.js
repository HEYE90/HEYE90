import { useState } from "react";

import Data from '../../assets/Data/Data.json'

import MainCard from '../../component/Card/MainCard'
import FilterBar from '../../component/FilterBar/FilterBar'

const Home = () => {

    const [search, setSearch] = useState("");

    const value = { search, setSearch };

    return (
        <>
            <MainCard value={value} data={Data} >
                <FilterBar value={value} />
            </MainCard>
        </>
    )
}

export default Home
