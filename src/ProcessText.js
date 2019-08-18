import React, { Component } from 'react';
import { Text, Rect, Group } from 'react-konva';

class ProcessText extends Component {
    render() {
        return (
            <Group
                draggable={this.props.draggable? true: false}
                x={this.props.x}
                y={this.props.y}
            >
                <Rect
                    width={200}
                    height={100}
                    stroke="black"
                    fill="lightblue"
                />
                <Text
                    text={this.props.text}
                    align="center"
                    width={200}
                    height={100}
                    fontSize={16}
                    verticalAlign='middle'
                />
            </Group>

             

        );
    }
}

export default ProcessText;
