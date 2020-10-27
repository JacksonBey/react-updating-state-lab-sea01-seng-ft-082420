// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    handleBitClick = () => {
        this.setState({
            ...this.state,settings: {...this.state.settings, bitrate: 12  }
        })
    } 

    handleResClick = () => {
        this.setState({
            ...this.state,settings: {...this.state.settings, video: {resolution: '720p'} }
        })
    }


    render() {
        return(
            <div>
            <button className='bitrate' onClick={this.handleBitClick}>bitRate</button>,
            <button className='resolution' onClick={this.handleResClick}>resolution</button>
            </div>
        )
    }
}