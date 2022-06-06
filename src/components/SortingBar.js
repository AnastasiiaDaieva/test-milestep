import { useState } from "react";
import {
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
  Input,
} from "react-bootstrap";

function SortingBar({ sortTasks, sortingOptions, setSortOption, sortOption }) {
  console.log("chosen", sortOption);
  return (
    <div>
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title={sortOption.label}
          id="input-group-dropdown-1"
          as={Dropdown}
        >
          {sortingOptions.map((option) => (
            <Dropdown.Item href="#" onClick={() => setSortOption(option)}>
              {option.label}{" "}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </InputGroup>
    </div>
  );
}

export default SortingBar;
