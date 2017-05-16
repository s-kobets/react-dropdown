import Select from 'react-select'
import React from 'react';

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];

function logChange(val) {
  console.log("Selected: " + val);
}

export default (props) => {
    <Select
      name="form-field-name"
      value="one"
      options={options}
      onChange={logChange}
    />
}