import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <div className="ColorBox"
                onClick={this.props.onClick}
                style={{ backgroundColor: this.props.color }}>
            </div>
        );
    }
}

export default ColorBox;
