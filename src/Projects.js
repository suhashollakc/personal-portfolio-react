import React, { Component } from "react";
import PROJECTS from "./data/projects";

class Project extends Component {
  render() {
    console.log("this.props", this.props);
    const { title, image, description, link } = this.props.project;

    return (
      <div style={{ display: "inline-block", width: 300, margin: 10 }}>
        <h3>{title}</h3>
        <img src={image} alt="profile" style={{ width: 200 }} />
        <p>{description}</p>
        <a href={link}>{link}</a>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="site-heading text-center">
        <h2>
          HIGHLIGHTED <span>PROJECTS</span>
        </h2>
        </div>
       
        <div>
          {PROJECTS.map((PROJECT) => {
            return <Project key={PROJECT.id} project={PROJECT} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
