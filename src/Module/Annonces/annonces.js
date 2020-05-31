import React from 'react'
import ActionFeed from '../Feed/actionFeed'
import Newsfeed from '../Feed/newsFeed'

const Annonces = ( {feed} ) => {

    const MapFeed = (feed) => {

        return (feed.feed.map((val, index) =>
            val.type == 'note' ?
                <Newsfeed
                    key={index}
                    name={val.name + " " + val.firstname}
                    date={val.date}
                    text={val.text}
                /> :
                <ActionFeed
                    key={index}
                    name={val.name + " " + val.firstname}
                    date={val.date}
                    text={val.text}
                />
        ))
    }

    return (
        <div className="center bg-white br3 pa3 pa4-ns ba b--black-10 shadow-1 mt3" style={{ 'width': '60%', 'minHeight': '1000px' }}>
            {
                'feedlength' == 'feelength' ?
                    <MapFeed feed={feed} /> :
                    <div>
                        
                    </div>
            }
        </div>
    )
}

export default Annonces
