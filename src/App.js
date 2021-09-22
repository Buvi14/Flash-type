import "./App.css";
import NavBar from "./components/Nav/NavBar";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import ChallengeSection from "./components/Challenge/ChallengeSection";
import React from "react";
import { SAMPLE_PARAGRAPHS } from "./data/sampleParagraph";

const time = 60;
const url = "http://metaphorpsum.com/paragraphs/1/9";
const defaultstate = {
  selectedParagraph: "",
  timerStarted: false,
  timeRemaining: time,
  characters: 0,
  words: 0,
  wpm: 0,
  testInfo: [],
};

class App extends React.Component {
  state = defaultstate;

  fetchNewparagraphFallback = () => {
    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];
    const paragrapharray = data.split("");
    const testInfo = paragrapharray.map((letter) => {
      return {
        testletter: letter,
        status: "notattempted",
      };
    });
    this.setState({ ...defaultstate, testInfo, selectedParagraph: data });
  };
  fetchNewparagraph = () => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {});
  };

  componentDidMount() {
    this.fetchNewparagraphFallback();
  }
  startTimer = () => {
    this.setState({ timerStarted: true });
    const time = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        const timespent = time - this.state.timeRemaining;
        const wpm = timespent > 0 ? (this.state.words / timespent) * time : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(time);
      }
    }, 1000);
  };

  retry = () => {
    this.fetchNewparagraphFallback();
  };
  handlechange = (value) => {
    if (!this.state.timerStarted) {
      this.startTimer();
    }
    const characters = value.length;
    const words = value.split(" ").length;
    const index = characters - 1;
    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testletter: this.state.testInfo[0].testletter,
            status: "notattempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        words,
        characters,
      });
      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words });
      return;
    }
    // Logic of the application
    // testinfo copy
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1)) {
      testInfo[index + 1].status = "notattempted";
    }

    const iscorrect = value[index] === testInfo[index].testletter;

    testInfo[index].status = iscorrect ? "correct" : "incorrect";

    this.setState({ testInfo, characters, words });
  };
  render() {
    return (
      <div className="App">
        {/* Importing the Nav bar component */}
        <NavBar />
        {/* Importing the Landing Page */}
        <Landing />
        {/* Challenge section of the application */}
        <ChallengeSection
          timerStarted={this.state.timerStarted}
          timeRemaining={this.state.timeRemaining}
          characters={this.state.characters}
          words={this.state.words}
          wpm={this.state.wpm}
          testInfo={this.state.testInfo}
          onInputChange={this.handlechange}
          tryagain={this.retry}
        />

        {/* Footer Component */}
        <Footer />
      </div>
    );
  }
}

export default App;
