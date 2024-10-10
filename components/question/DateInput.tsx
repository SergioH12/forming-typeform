import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import DatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale";
import { useQuestions, useSharedStates } from "@/contexts";
import {
  BtnContainer,
  Error,
  QuestionBoxPara,
  QuestionNumHeading,
} from "../index";
import styles from "./Question.module.css";
import classNames from "classnames";
import { format } from "date-fns";
import { SET_DATE } from "@/reducers";

// Sobrescribir estilos globales del calendario
const DatePickerGlobalStyles = createGlobalStyle`
  .react-datepicker {
    font-size: 14px;
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    width: 100%;
    max-width: 400px; /* Máximo ancho del calendario */
  }

  .react-datepicker__header {
    background-color: #291850;
    color: #ffffff;
    padding: 0;
    border-bottom: none;
  }

  /* Cambiar color de los días en el encabezado */
  .react-datepicker__day-name {
    color: #ffffff; /* Cambiar a blanco */
    font-weight: bold; /* Otras propiedades que desees */
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: 32px;
    height: 32px;
    line-height: 32px;
    margin: 4px;
    text-align: center;
    border-radius: 50%;
  }

  .react-datepicker__day:hover {
    background-color: #0070f3;
    color: #ffffff;
  }

  .react-datepicker__day--selected {
    background-color: #005bb5;
    color: #ffffff;
  }

  .react-datepicker__input-container input {
    font-size: 16px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 1px solid #ddd;
    background: #f0f4f8;
  }

  .react-datepicker__navigation {
    border: none;
    background: none;
    cursor: pointer;
  }

  .nav-button {
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;
    padding: 0 10px;
  }

  .nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px; 
  }

  .header-row {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px; 
  }

  .nav-select {
    margin: 0 10px; 
  }

  /* Asegúrate de que el contenedor del DatePicker ocupe el 100% del ancho */
  .datepicker-container {
    display: flex;
    justify-content: center; /* Centra el calendario horizontalmente */
    margin: 20px 0; /* Espaciado arriba y abajo */
    width: 100%; /* Asegura que el contenedor ocupe todo el ancho */
    max-width: 400px; /* Ancho máximo del contenedor */
  }
`;

// Estilos personalizados usando styled-components
const StyledDatePicker = styled(DatePicker)`
  width: 150%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  background-color: white;

  &:focus {
    border-color: #0070f3;
    box-shadow: 0 4px 8px rgba(0, 112, 243, 0.2);
    outline: none;
  }

  .react-datepicker__input-container input {
    width: 100%;
    border: none;
    font-size: 16px;
    padding: 8px;
    border-radius: 4px;
    box-shadow: none;
    background: #f0f4f8;
  }
`;

export function DateInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.date ?? "";
  const { date } = state;

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.date;
        return prevValue;
      });

    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      dispatch({ type: SET_DATE, payload: formattedDate });
    }
  };

  return (
    <>
      <DatePickerGlobalStyles />

      <QuestionNumHeading questionNum={8}>
        {" "}
        ¿Cuál es tu fecha de nacimiento? *
      </QuestionNumHeading>
      <QuestionBoxPara>
        Por favor selecciona tu fecha de nacimiento.
      </QuestionBoxPara>

      <div className={styles["datepicker-container"]}>
        <StyledDatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          className={styles["custom-datepicker"]}
          placeholderText="YYYY-MM-DD"
          locale={es}
          showYearDropdown
          showMonthDropdown
          dropdownMode="select"
          showPopperArrow={false}
          calendarStartDay={0}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
          }: ReactDatePickerCustomHeaderProps) => (
            <div className="nav-container">
              <button
                className="nav-button"
                onClick={() => changeMonth(date.getMonth() - 1)}
              >
                {"⏪"}
              </button>
              <select
                value={format(date, "MMMM", { locale: es })}
                onChange={({ target: { value } }) =>
                  changeMonth(
                    new Date(Date.parse(value + " 1, 2020")).getMonth()
                  )
                }
                className="nav-select"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option
                    key={i}
                    value={format(new Date(2020, i), "MMMM", { locale: es })}
                  >
                    {format(new Date(2020, i), "MMMM", { locale: es })}
                  </option>
                ))}
              </select>
              <select
                value={date.getFullYear()}
                onChange={({ target: { value } }) => changeYear(Number(value))}
                className="nav-select"
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i} value={date.getFullYear() - i}>
                    {date.getFullYear() - i}
                  </option>
                ))}
              </select>
              <button
                className="nav-button"
                onClick={() => changeMonth(date.getMonth() + 1)}
              >
                {"⏩"}
              </button>
            </div>
          )}
        />
      </div>

      {errorMsg && <Error message={errorMsg} />}

      {selectedDate && errorMsg === "" && (
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
