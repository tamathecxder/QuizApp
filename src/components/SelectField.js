import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react'

const SelectField = props => {
  const { label } = props;
  const [value, setValue] = useState('');

  const handleChange = () => {}

  
  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <InputLabel>{label}</InputLabel>
        <Select onChange={handleChange} label={label} value={value}>
          <MenuItem>Option1</MenuItem>
          <MenuItem>Option2</MenuItem>
          <MenuItem>Option3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectField