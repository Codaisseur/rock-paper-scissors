import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';

const labelStyle = {
  fontFamily: 'Roboto',
  marginRight: '1em'
};

const paperStyle = {
  margin: 20,
  padding: 40
};

const buttonStyle = {
  margin: 12
};

class NewPlayerComponent extends React.Component {
  createPlayer(event) {
    event.preventDefault();
    let newPlayer = this.refs.playerName.getValue();
    this.props.onCreate(newPlayer);
  }

  render() {
    return(
      <Paper style={paperStyle} zDepth={1} rounded={false}>
        <div>
          <label style={labelStyle}>Player Name:</label>
          <TextField ref="playerName" hintText="What's your name?"/>
        </div>
        <div>
          <RaisedButton onClick={this.createPlayer.bind(this)} label="Join" style={buttonStyle} primary={true} />
        </div>
      </Paper>
    );
  }
}

export default NewPlayerComponent;
