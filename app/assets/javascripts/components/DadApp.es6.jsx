class DadApp extends React.Component {

  constructor() {
    super();
    this.startTimer = this.startTimer.bind(this);
    this.state = {
      timer: false,
      gameStart: false
    }
  }

  startTimer() {
    this.setState({timer: true, gameStart: true})
  }

  render() {
    if (this.state.timer) {
      return(
        <div>
          <Timer  start={Date.now()}/>
          <App gameStart={this.state.gameStart} startTimer={this.startTimer}/>

        </div>
      )
    } else {
      return(
        <App startTimer={this.startTimer}/>
      )
    }

  }
}
