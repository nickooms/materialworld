import React, { Component } from 'react';

import MidiEvent from './MidiEvent';

class MidiEvents extends Component {
  state = { events: [] };

  componentDidMount() {
    // const { inputs } = await navigator.requestMIDIAccess();
    navigator.requestMIDIAccess().then(({ inputs }) => {
      const midiInputs = Array.from(inputs).map(([, input]) => input);
      midiInputs.forEach((input) => {
        input.addEventListener('midimessage', (event) => {
          const { data, timeStamp } = event;
          const [message, note, velocity] = Array.from(data);
          const midiEvent = {
            message,
            note,
            velocity,
            timeStamp,
          };
          this.setState({
            events: [midiEvent, ...this.state.events.slice(0, 9)],
          });
        });
      });
    });
  }

  render() {
    const { events } = this.state;
    const midiEvents = events.map(event => (
      <MidiEvent key={event.timeStamp} {...event} />
    ));
    return (
      <table>
        <tbody>
          <tr>
            <th>Timestamp</th>
            <th>Message</th>
            <th>Note</th>
            <th>Velocity</th>
          </tr>
          {midiEvents}
        </tbody>
      </table>
    );
  }
}

export default MidiEvents;
