import React, { Component } from "react";

const TITLES = [
  "a freelancer",
  "a software developer",
  "an entrepreneur",
  "a designer",
];

class title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeOut = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    console.log("Title component has mounted");

    this.animateTitles();
  }

  componentWillUnmount() {
    console.log("Title component unmounted");
    clearInterval(this.titleInterval);
    clearTimeout(this.timeOut);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex, fadeIn: true });
      setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 3000);
    console.log("this.titleInterval", this.titleInterval);
  };

  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = TITLES[titleIndex];
    return (
      <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
        I am {title}
      </p>
    );
  }
}

export default title;
