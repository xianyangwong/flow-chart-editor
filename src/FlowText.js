import React, { Component } from 'react';
import { Text, Group, Shape } from 'react-konva';

class FlowText extends Component {
    render() {
        return (
            <Group
                x={this.props.x}
                y={this.props.y}
                draggable={this.props.draggable ? true : false}
            >
                <Shape
                    sceneFunc={(context, shape) => {
                        context.beginPath();
                        context.moveTo(0, 25);
                        context.lineTo(150, 25);
                        context.lineTo(150, 0);
                        context.lineTo(200, 50);
                        context.lineTo(150, 100);
                        context.lineTo(150, 75);
                        context.lineTo(0, 75);
                        context.closePath();
                        context.fillStrokeShape(shape);
                    }}
                    stroke="black"
                    fill="lightblue"
                    strokeWidth={2}
                />
                <Text
                    text={this.props.text}
                    align="center"
                    width={150}
                    height={100}
                    fontSize={16}
                    verticalAlign='middle'
                />
            </Group>
        );
    }
}

export default FlowText;
