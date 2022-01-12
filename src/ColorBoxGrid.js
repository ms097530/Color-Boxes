import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorBoxGrid.css';

class ColorBoxGrid extends Component
{
    constructor(props)
    {
        super(props);
        this.generateRandomColor = this.generateRandomColor.bind(this);
        this.pickRandomColor = this.pickRandomColor.bind(this);
    }

    static defaultProps =
        {
            // use to determine number of boxes to render
            numBoxes: 16
        };


    generateRandomColor()
    // used to initialize color of ColorBox components
    {
        const hexVals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        let str = '#';
        for (let i = 0; i < 6; ++i)
        {
            str += hexVals[Math.floor(Math.random() * hexVals.length)];
        }
        return str;
    }

    pickRandomColor(e)
    // sets clicked ColorBox background color to a random hex color
    {
        const hexVals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        let str = '#';
        for (let i = 0; i < 6; ++i)
        {
            str += hexVals[Math.floor(Math.random() * hexVals.length)];
        }

        e.target.style.backgroundColor = str;
    }

    render()
    {
        // array to making mapping easy - values don't matter
        let arr = Array(this.props.numBoxes).fill(1);
        return (
            <div className="ColorBoxGrid">
                {
                    arr.map(x =>
                        <ColorBox
                            color={this.generateRandomColor()}
                            onClick={this.pickRandomColor} />)
                }
            </div>
        );
    }
}

export default ColorBoxGrid;
