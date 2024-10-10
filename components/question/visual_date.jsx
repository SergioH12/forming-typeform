import styled from "styled-components";
import DatePicker from "react-datepicker";

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

const StyledHeader = styled.div`
  background-color: #0070f3;
  color: white;
  padding: 8px;
  text-align: center;
  font-size: 16px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const StyledDay = styled.div`
  &:hover {
    background-color: #ddd;
  }

  &.react-datepicker__day--selected {
    background-color: #0070f3;
    color: white;
  }
`;
