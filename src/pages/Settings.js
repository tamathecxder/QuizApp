import { Button } from "@mui/material"
import { Box } from "@mui/system"
import SelectField from "../components/SelectField"
import NumberField from "../components/NumberField"
import useAxios from "../hooks/useAxios"

const Settings = () => {
  // axios custom hooks
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  console.log(response);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <SelectField label="Category" />
      <SelectField label="Difficulty" />
      <SelectField label="Type" />
      <NumberField />
      <Box mt={3} width="100%">
        <Button variant="contained" fullWidth type="submit">Get Started</Button>
      </Box>
    </form>
  )
}

export default Settings