import React from 'react';

class MessageInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channel_id: props.channelId,
      body: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let input = document.getElementById("message-input-id");
    input.focus();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      channel_id: newProps.channelId
    }, () => {
      let input = document.getElementById("message-input-id");
      input.focus();
    })
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      body: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if ( this.state.body.length !== 0 ) {
      this.props.createMessage(this.state)
      this.setState({ body: "" });
    }
  }

  render() {
    return (
      <div className="create-message-div">
        <form className="create-message-form">
          <div className="create-message-input">
            <input autoComplete="off" id="message-input-id" value={this.state.body} placeholder="Enter Message!" onChange={this.handleChange} />
          </div>
          <button onClick={this.handleSubmit} className="chatButton"></button>
        </form>
      </div>
    )
  }
}

export default MessageInput;
