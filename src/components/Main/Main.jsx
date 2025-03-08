import React, { Component } from "react";
import Toolbar from "./Toolbar/ToolbarContainer.js";
import Body from "./Body/BodyContainer.js";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      steps: [],
      isRunning: false,
    };
    this.nextStep = this.nextStep.bind(this);
    this.sort = this.sort.bind(this);
  }

  sort(algorithm, array, speed) {
    // Implement the sorting algorithm and store the steps in the state
    const steps = this.generateSortingSteps(algorithm, array); // Generate steps for the sorting algorithm
    this.setState({ steps, currentStep: 0, isRunning: true });
  }

  generateSortingSteps(algorithm, array) {
    // This function should generate and return an array of steps for the sorting algorithm
    // For demonstration purposes, let's assume it returns an array of steps
    const steps = []; // Replace this with actual steps generation logic
    return steps;
  }

  nextStep() {
    const { currentStep, steps } = this.state;
    if (currentStep < steps.length) {
      // Perform the next step of the sorting algorithm
      console.log("Next step of the sorting algorithm", steps[currentStep]);
      this.setState({ currentStep: currentStep + 1 });
    } else {
      this.setState({ isRunning: false });
    }
  }

  render() {
    const { isRunning } = this.state;
    return (
      <div>
        <Toolbar
          nextStep={this.nextStep}
          sort={this.sort}
          isRunning={isRunning}
        />
        <Body />
      </div>
    );
  }
}

export default Main;