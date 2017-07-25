import React from 'react'

export default class Panoroma extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <input type="button" value='BACK TO GALLERY' style={{
                    position: 'absolute',
                    zIndex: 1
                }} onClick={this.props.close} />
                <a-scene>
                    <a-sky crossOrigin='anonymous' src={this.props.img} rotation="0 -130 0"></a-sky>
                </a-scene>
            </div>
        )
    }
}