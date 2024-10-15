import { ChangeEventHandler } from "react";
import { useQuestions, useSharedStates } from "@/contexts";
import {
  BtnContainer,
  Error,
  QuestionBoxPara,
  QuestionInputText,
  QuestionNumHeading,
} from "../index";
import styles from "./Question.module.css";
import classNames from "classnames";
import { SET_SCORE } from "@/reducers";

export function ScoreInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.age ?? "";
  const { score } = state;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (!/^\d+$/.test(value)) return; // Asegurarse de que solo se ingrese números

    setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.score;
        return prevValue;
      });

    dispatch({ type: SET_SCORE, payload: value });
  };

  return (
    <>
      <QuestionNumHeading questionNum={9}>
        {" "}
        ¿Cuál es la puntuacion? *
      </QuestionNumHeading>

      <QuestionBoxPara>
        Por favor ingresa la puntuacion usando únicamente números.
      </QuestionBoxPara>

      <QuestionInputText
        type="number"
        placeholder="Ingresa la puntuación"
        value={score}
        onChange={handleInputChange}
      />

      {errorMsg && <Error message={errorMsg} />}

      {errorMsg === "" && (
        <BtnContainer
          className={classNames(styles["btn-container"], styles["ok"])}
          showPressEnter={true}
          onClick={handleOkClick}
        >
          OK
        </BtnContainer>
      )}
    </>
  );
}
