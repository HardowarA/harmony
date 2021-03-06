import React from 'react';
import { Link, Route } from 'react-router-dom';
import ServerIndexContainer from './server_index_container';
import ChannelIndexContainer from '../channel/channel_index_container';
import ChannelShowContainer from '../channel/channel_show_container';


class ServerShow extends React.Component {

  componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.server !== undefined) {
      if(this.props.server.id !== prevProps.server.id) {

        this.props.fetchServer(this.props.match.params.serverId);
      }
    }
  }


  // componentWillReceiveProps() {
  //   //
  // }
  //
  // shouldComponentUpdate(nextState, nextProps) {
  //   this.props.fetchServer(this.props.match.params.serverId);
  //
  // }
  //
  // componentWillUpdate(nextProps, nextState) {
  //   //
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //
  // }
  //
  // componentWillUnmount() {
  //   //
  // }


  render() {
    let server_name = '';
    let server_id = -1;
    const server = this.props.server;
    if (server !== undefined) {
      server_name = server.server_name;
      server_id = server.id;
    }
    return (
      <div className="channelIndex"> 
        <br/>
        <ChannelIndexContainer server_id={server_id} server_name={server_name} />
      </div>
    );
  }
}

export default ServerShow;
