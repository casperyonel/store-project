import React from 'react'

const searchQuery = () => {
    return (
        <div>
            <div className='row'>
                {speakersData
                    .filter(function (speaker) {
                        return (
                            speaker.first.toLowerCase().includes(searchQuery) || 
                            speaker.last.toLowerCase().includes(searchQuery)  
                        )
                    })
                    .filter(function (speaker) {
                        return speaker.sessions.find((session) => {
                            return session.eventYear === eventYear
                        })
                    })
                }
            </div>
        </div>
    )
}

export default searchQuery
