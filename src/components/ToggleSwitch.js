import { useState } from "react";
import { styled } from "twin.macro";
import Icon from "./Icon";

const ToggleSwitch = ({ content, iconId }) => {
  const [checked, setChecked] = useState(false); // store value

  const handleChange = (e) => setChecked(e.target.checked);

  return (
    <Label>
      <div className="flex gap-2">
        <Icon id={iconId} size={24} />
        {checked ? content : content}
      </div>
      <Input type="checkbox" onChange={handleChange} />
      <Switch />
    </Label>
  );
};

export default ToggleSwitch;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 30px;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative; /* <-- Add relative positioning */
  width: 40px;
  height: 18px;
  /* background: #5fc7fa; */
  background: lightgray;
  border-radius: 32px;
  padding: 4px; /* <!-- Add padding */
  transition: 300ms all;

  /* Add pseudo element */
  &:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 35px;
    top: 50%;
    left: -1px; /* <!-- Make up for padding */
    background: #016fd0;
    /* transform: translate(0, -50%); */
    transform: translate(20px, -50%);
    transition: 300ms all;
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: #016fd0;

    &:before {
      /* transform: translate(20px, -50%); */
      transform: translate(0, -50%);
    }
  }
`;
