import React from 'react'

const Newsfeed = ({ name, date, text }) => {
    return (
        <div className="Naisesborder br3 shadow-1 mv3" style={{ 'width': '100%', 'minHeight': '120px' }}>
            <div className="row pt3" style={{ 'width': '100%' }}>
                <img src="https://robohash.org/147?set=set4;size=64x64" className="br-100 h3 db ml4 shadow-1 grow pointer" style={{ 'width': '48px', 'height': '48px' }} />
                <div className="ml3 black-60">
                    <p className="db mb0 grow pointer">{name.capitalize()}</p>
                    <div className="db f6">
                        {
                            date.unit === 'sec' ?
                                <p className="di">{date.sec + ' ' + date.unit}</p>
                                :
                                <p className="di"></p>
                        }
                        {
                            date.unit === 'min' ?
                                <p className="di">{date.min + ' ' + date.unit}</p>
                                :
                                <p className="di"></p>
                        }
                        {
                            date.unit === 'h' ?
                                <p className="di">{date.hour + 'h' + ' et ' + date.min + 'min'}</p>
                                :
                                <p className="di"></p>
                        }
                        {
                            date.unit === 'j' ?
                                <p className="di">{date.day + ' ' + date.unit}</p>
                                :
                                <p className="di"></p>
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="center ph2" style={{ 'width': '80%' }}>
                    <p style={{ wordBreak: 'break-all', whiteSpace: 'pre-wrap' }} >{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed
