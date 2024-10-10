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
import { SET_AGE } from "@/reducers";

export function AgeInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.age ?? "";
  const { age } = state;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (!/^\d+$/.test(value)) return; // Asegurarse de que solo se ingrese números

    setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.age;
        return prevValue;
      });

    dispatch({ type: SET_AGE, payload: value });
  };

  return (
    <>
      <QuestionNumHeading questionNum={7}>
        {" "}
        ¿Cuál es tu edad? *
      </QuestionNumHeading>

      <QuestionBoxPara>
        Por favor ingresa tu edad usando únicamente números.
      </QuestionBoxPara>

      <QuestionInputText
        type="number"
        placeholder="Ingresa tu edad"
        value={age}
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
