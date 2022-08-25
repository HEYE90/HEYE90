import React from 'react'

const EmptyCard = () => {
    return (
        <div className='emptyCard'>
            <p className='emptyText'><span className='alert' style={{'color' : "red", 'fontWeight':'700'}}>Sorry</span>, there is no data to display....😥</p>
            <p className='returnText'>check another choice 😊</p>
        </div>
    )
}

export default EmptyCard
