import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

const Picker = ({ value, onChange, options }) => (
  <Select value={value} onChange={e => onChange(e.target.value)}>
    {options.map(option => (
      <MenuItem value={option} key={option}>
        {option}
      </MenuItem>
    ))}
  </Select>
);

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Picker;
