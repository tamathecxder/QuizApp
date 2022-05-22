import { Box, Button, CircularProgress, Typography } from "@mui/material"
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from '../hooks/useAxios'
import { handleChangeScore } from "../redux/action";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const Questions = () => {
  const {
    questions_category,
    questions_difficulty,
    questions_type,
    amount_of_question,
    score
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let apiUrl = `/api.php?amount=${amount_of_question}`;

  if (questions_category) {
    apiUrl = apiUrl.concat(`&category=${questions_category}`);
  }

  if (questions_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${questions_difficulty}`);
  } 

  if (questions_type) {
    apiUrl = apiUrl.concat(`&type=${questions_type}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  
  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
   
      // mengacak posisi jawaban yang benar
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0, 
        question.correct_answer);
      setOptions(answers);
    }
  }, [response, questionIndex]);

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];

    if (e.target.textContent === question.correct_answer) {
      dispatch(handleChangeScore(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate('/score');
    }
  }
  
  if (loading) {
    return (
      <Box mt={25} width="100%">
        <CircularProgress />
        <Typography variant="h5" mt={3}>Loading...</Typography>
      </Box>
    )
  }

  return (
    <Box>
      <Typography variant="h4">Question {questionIndex + 1}</Typography>
      <Typography mt={5}>{decode(response.results[questionIndex].question)}</Typography>
      {
        options.map((data, id) => (
          <Box mt={2} key={id}>
            <Button variant="outlined" onClick={handleClickAnswer}>{decode(data)}</Button>
          </Box> 
        ))
      }
      <Box mt={5}>
        Score: {score} / {response.results.length}
      </Box>
    </Box>
  )
}

export default Questions