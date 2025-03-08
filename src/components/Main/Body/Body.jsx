import React, { Component } from "react";
import "./Body.css";
import $ from 'jquery';

class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      array,
      currentBubbleTwo,
      currentQuickTwo,
      pivot,
      currentSwappers,
      currentHeapThree,
      currentSorted,
      currentMergeX,
    } = this.props;

    const numWidth = Math.floor($(document).width() / (array.length * 3));
    const width = `${numWidth}px`;
    const numMargin = array.length < 5 ?
      10 : array.length < 8 ?
        8 : array.length < 11 ?
          6 : array.length < 20 ?
            4 : array.length < 50 ?
              3.5 : array.length < 100 ?
                3 : array.length < 130 ?
                  2.5 : 2;
    const margin = `${numMargin}px`;
    const color = numWidth > 20 ? "white" : "transparent";
    const numFont = numWidth > 70 ?
      20 : numWidth > 60 ?
        18 : numWidth > 50 ?
          16 : numWidth > 40 ?
            14 : numWidth > 30 ?
              12 : numWidth > 20 ?
                10 : 8;
    const fontSize = `${numFont}px`

    return (
      <div id="bodyContainer">
        <div id="leftPanel">
          <h3>Color Legend</h3>
          <ul>
            <li><span className="color-box" style={{backgroundColor: "rgba(219, 57, 57, 0.8)"}}></span> Current Swappers</li>
            <li><span className="color-box" style={{backgroundColor: "rgba(78, 216, 96, 0.8)"}}></span> Current Bubble/Quick/Heap/Merge</li>
            <li><span className="color-box" style={{backgroundColor: "rgba(237, 234, 59, 0.8)"}}></span> Pivot</li>
            <li><span className="color-box" style={{backgroundColor: "rgba(169, 92, 232, 0.8)"}}></span> Current Sorted</li>
            <li><span className="color-box" style={{backgroundColor: "rgba(66, 134, 244, 0.8)"}}></span> Default</li>
          </ul>
        </div>
        <div id="arrayContainer">
          { array.length ? array.map((number, index) => {
            const backgroundColor = currentSwappers.includes(index) ?
                "rgba(219, 57, 57, 0.8)" : currentBubbleTwo.includes(index) ||
                currentQuickTwo.includes(index) || currentHeapThree.includes(index) ||
                currentMergeX.includes(index) ?
                  "rgba(78, 216, 96, 0.8)" : pivot === index ?
                    "rgba(237, 234, 59, 0.8)" : currentSorted.includes(index) ?
                      "rgba(169, 92, 232, 0.8)" : "rgba(66, 134, 244, 0.8)";
            return <div
              className="arrayElement"
              key={index}
              style={{height: `${number * 3}px`, width: width, marginLeft: margin, marginRight: margin, backgroundColor: backgroundColor, color: color, fontSize: fontSize}}>
              {number}
            </div>
          }) : null
          }
        </div>
      </div>
    )
  }
}

export default Body;