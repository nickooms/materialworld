import React from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from 'material-ui/Progress';

import Hex from './Hex';

const MidiEvent = ({
  timeStamp, message, note, velocity,
}) => (
  <tr>
    <td>{(timeStamp / 1000).toFixed(3)}</td>
    <td>
      <Hex>{message}</Hex>
    </td>
    <td>
      <Hex>{note}</Hex>
    </td>
    <td>
      <Hex>{velocity}</Hex>
    </td>
    {message === 0xb0 && (
      <td style={{ width: '100%' }}>
        <LinearProgress color="secondary" mode="determinate" value={velocity} />
      </td>
    )}
  </tr>
);

MidiEvent.propTypes = {
  timeStamp: PropTypes.number.isRequired,
  message: PropTypes.number.isRequired,
  note: PropTypes.number.isRequired,
  velocity: PropTypes.number.isRequired,
};

export default MidiEvent;
