import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react'

const SelectField = (props) => {
  const { label, options } = props;
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <InputLabel>{label}</InputLabel>
        <Select onChange={handleChange} label={label} value={value}>
          {options && options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectField;