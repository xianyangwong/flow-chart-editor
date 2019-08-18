import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import "./App.css"
import DocumentText from './DocumentText';
import FlowText from './FlowText';
import ProcessText from './ProcessText';

import processInit from './process.png';
import flowInit from './flow.png';
import documentInit from './document.png';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        type: "",
        shapes: [
          {
            shape: "process",
            positionX: 20,
            positionY: 50,
            name: "Process"
          },
          {
            shape: "flow",
            positionX: 400,
            positionY: 100,
            name: "Flow"
          },
          {
            shape: "document",
            positionX: 500,
            positionY: 200,
            name: "Document"
          }
        ]
    }

    this.stageRef = React.createRef()
    this.exportJSON = this.exportJSON.bind(this)
  
  }

  componentDidMount(){
    const con = document.querySelector('.konvajs-content')
    const dragItems = document.getElementById('drag-items')

    var self = this;

    
    dragItems.addEventListener('dragstart', (e) => {
        self.setState({ type: e.target.alt });
      });

    con.addEventListener('drop', (e) => {
      console.log(e)
      console.log(this.state.type)
      // this.stageRef. (e);
      var newShape;

      switch (this.state.type) {
        case 'process':
          newShape = {
            shape: "process",
            positionX: e.layerX/2,
            positionY: e.layerY/2,
            name: "Process"
          }
          break;
        case 'flow':
          newShape = {
            shape: "flow",
            positionX: e.layerX/2,
            positionY: e.layerY/2,
            name: "Flow"
          }
          break;
        case 'document':
          newShape = {
            shape: "document",
            positionX: e.layerX/2,
            positionY: e.layerY/2,
            name: "Document"
          }
          break;
      
        default:
          break;
      }

      this.setState({
        shapes: [
          ...this.state.shapes,
          newShape
        ]
      }, ()=>{
        console.log(this.state.shapes)
      })

    })

    con.addEventListener('dragover', function (e) {
      e.preventDefault(); // !important
    });
  }

  async exportJSON(){
    const { shapes } = this.state; 
    const fileName = "file";
    const json = JSON.stringify(shapes);
    const blob = new Blob([json], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  render() {

    const { shapes } = this.state;

    return (
      <div className="wrapper">
        <div className="wrapper__left" id="drag-items">
          <h1>Shape</h1>
          <img alt='process' src={processInit} width="200"/>
          <img alt='flow' src={flowInit} width="200" />
          <img alt='document' src={documentInit} width="200" />
        </div>
        <div className="wrapper__right">
          <div className="wrapper__right--header">
            <h1>Canvas</h1>
            <button onClick={this.exportJSON}>Export JSON</button>
          </div>
          
          <Stage width={800} height={500} ref={this.stageRef}>
            <Layer>

              {
                shapes.map((s, index) => {
                  switch (s.shape) {
                    case 'process':
                      return <ProcessText draggable key={index} x={s.positionX} y={s.positionY} text={s.name} />
                    case 'flow':
                      return <FlowText draggable key={index} x={s.positionX} y={s.positionY} text={s.name} />
                    case 'document':
                      return <DocumentText draggable key={index} x={s.positionX} y={s.positionY} text={s.name} />
                    default:
                      return null
                  }
                })
              }
            </Layer>
          </Stage>
        </div>
      </div>
    );
  }
}

export default App;
