import { Button } from "@mui/material"
import { Box } from "@mui/system"
import SelectField from "../components/SelectField"

const Settings = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <SelectField label="Category" />
      <SelectField label="Difficulty" />
      <SelectField label="Type" />
      <Box mt={3} width="100%">
        <Button variant="contained" fullWidth type="submit">Get Started</Button>
      </Box>
    </form>
  )
}

export default Settings