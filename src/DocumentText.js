import React, { Component } from 'react';
import { Text, Group, Shape } from 'react-konva';

class DocumentText extends Component {
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
                        context.moveTo(0, 0);
                        context.lineTo(200, 0);
                        context.lineTo(200, 100);
                        context.bezierCurveTo(100, 100, 80, 150, 0, 100)
                        context.closePath();
                        context.fillStrokeShape(shape);
                    }}
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

export default DocumentText;
