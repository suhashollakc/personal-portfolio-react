import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "./assets/profile.jpg";
import Services from './Services'
class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div>
        <span>
          <img src={profile} alt="profile" className="profile" />
        </span>
        <h1>Hello!</h1>
        <p>My name is Suhas Holla. I am a Freelancer. </p>
        <p> JavaScript | ReactJS | Flutter | Django | Python | C# </p>
        {this.state.displayBio ? (
          <div>
            <p>I own a software product and also run an ecommerce website</p>
            <p>And I also teach coding in freetime</p>
            <p>Right Now, I am busy with the project The Badam Halwa House</p>
            <button className="btn btn-danger" onClick={this.toggleDisplayBio}>
              Show less
            </button>
          </div>
        ) : (
          <div>
            <button className="btn btn-danger" onClick={this.toggleDisplayBio}>
              Read more
            </button>
          </div>
        )}
        <hr />
<Services/>
        <hr/>
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
