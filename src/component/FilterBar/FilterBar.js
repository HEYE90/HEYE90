import Search from "../Search/Search";

const FilterBar = (props) => {

    const value = props.value
    return (
        <div className="filterBar">
            <Search value={value} />
        </div>
    )
}

export default FilterBar
