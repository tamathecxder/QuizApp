import { Box, Button, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import useAxios from '../hooks/useAxios'

const Questions = () => {
  const {
    questions_category,
    questions_difficulty,
    questions_type,
    amount_of_question
  } = useSelector(state => state);

  let apiUrl = `/api.php?amount=10`;
  const { response, error, loading } = useAxios({ url: apiUrl });
  console.log(response);

  return (
    <Box>
      <Typography variant="h4">Question 1</Typography>
      <Typography mt={5}>The question will be shown here</Typography>
      <Box mt={2}>
        <Button variant="outlined">Answer 1</Button>
      </Box>
      <Box mt={2}>
        <Button variant="outlined">Answer 2</Button>
      </Box>
      <Box mt={5}>
        Score: 10 / 10
      </Box>
    </Box>
  )
}

export default Questions