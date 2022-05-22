import { Box } from "@mui/system"
import { Button, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { handleChangeAmount, handleChangeScore } from "../redux/action";

const FinalScreen = () => {
  const { score } = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleBackToSettings = () => {
    dispatch(handleChangeScore(0));
    dispatch(handleChangeAmount(50));
    navigate('/');
  }
  
  return (
    <Box mt={25}>
      <Typography variant="h3" fontWeight="bold" mt={3}>
        Final Score: {score}

        <Box>
          <Button variant="contained" onClick={handleBackToSettings}>Back to settings</Button>
        </Box>
      </Typography>
    </Box>    
  )
}


export default FinalScreen