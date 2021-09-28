import { NavLink } from "react-router-dom";
import { StyledDropDown } from "./styles";

export default function DropDown ({ title, children }) {
  

  return (
    <StyledDropDown>
      <h3 as="div" className="button">{title}<span>^</span></h3>
      <ul>
        {children}
      </ul>
    </StyledDropDown>
  )

} 