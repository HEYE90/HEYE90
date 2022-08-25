import Navigation from '../../Navigation/Navigation'
import './SideBarTop.css'
import React from 'react'

const SideBarInfo = [
    {
        id: 0, name: "Saksı", url: "/flowers/saksi"
    },
    {
        id: 1, name: "Çardak", url: "/flowers/cardak"
    },

]
const SlideItem = SideBarInfo.map((item) => (<li key={item.id} className="sideBarTopItem">
    <Navigation className="slideBarItem" url={item.url} icon="" text={item.name} />
</li>))


const SideBarTop = () => {
    return (
        <div className="sideBarTop">
            <ul className="sideBarTopItems">{SlideItem}</ul>
        </div>
    )
}

export default SideBarTop
