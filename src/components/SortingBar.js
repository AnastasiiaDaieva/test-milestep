import { useState } from "react";
import {
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
} from "react-bootstrap";

function SortingBar() {
  const [sortTitle, setSortTitle] = useState("Sort by");
  return (
    <div>
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title={sortTitle}
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#" onClick={() => setSortTitle("Active first")}>
            Active first
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            onClick={() => setSortTitle("Completed first")}
          >
            Completed first
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => setSortTitle(" Due date")}>
            Due date
          </Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => setSortTitle("Priority")}>
            Priority
          </Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </div>
  );
}

export default SortingBar;
