import React from 'react'

const ActionFeed = ({name, date, text}) => {
    return (
        <div className="NaisesborderReverse br3 shadow-1 mv3" style={{ 'width': '100%', 'minHeight': '100px' }}>
            <div className="row pt3" style={{ 'width': '100%', 'minHeight': '80px' }}>
                <img src="https://robohash.org/147?set=set4;size=64x64" className="br-100 h3 db ml4 shadow-1 grow pointer bg-white" style={{ 'width': '48px', 'height': '48px' }} />
                <div className="ml3">
                    <p className="db mb0 grow pointer">{name.capitalize()}</p>
                    <p className="db">{date}</p>
                </div>
            </div>
            <div className="row">
                <div className="center ph2" style={{ 'width': '80%' }}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default ActionFeed
