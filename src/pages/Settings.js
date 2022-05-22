import { Button, CircularProgress, Typography } from "@mui/material"
import { Box } from "@mui/system"
import SelectField from "../components/SelectField"
import NumberField from "../components/NumberField"
import useAxios from "../hooks/useAxios"

const Settings = () => {
  // axios custom hooks
  const { response, error, loading } = useAxios({ url: "/api_category.php" });

  if (loading) {
    return (
      <Box mt={25}>
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Typography variant="h6" color="red" mt={25}>
        Something went wrong
      </Typography>
    )
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" }
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True or False" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label="Category" />
      <SelectField options={difficultyOptions} label="Difficulty" />
      <SelectField options={typeOptions} label="Type" />
      <NumberField />
      <Box mt={3} width="100%">
        <Button variant="contained" fullWidth type="submit">Get Started</Button>
      </Box>
    </form>
  )
}

export default Settings