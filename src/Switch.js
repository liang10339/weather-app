import React, { useState } from 'react'
import styled from 'styled-components'

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 35px;
  height: 17px;
  margin: 0 0.75rem;
`

const ToggleSpan = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: #b6b6b6;
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;
  ::before {
    position: absolute;
    content: '';
    left: 1px;
    top: 0.5px;
    width: 16px;
    height: 16px;
    background-color: #333;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`
const ToggleButton = styled.input`
  &:checked + ${ToggleSpan}::before {
    transform: translateX(18px);
    background-color: #333;
  }
  &:checked + ${ToggleSpan} {
    background-color: #2bc6ff;
  }
`

function Switch({ toggleMode, moment }) {
  const [isToggled, setIsToggled] = useState(moment === 'day' ? false : true)
  const onToggle = () => {
    setIsToggled(!isToggled)
    toggleMode()
  }

  return (
    <ToggleSwitch>
      <ToggleButton type="checkbox" checked={isToggled} onChange={onToggle} />
      <ToggleSpan />
    </ToggleSwitch>
  )
}
export default Switch
