import { DropdownButton, Dropdown, InputGroup } from "react-bootstrap";
import { nanoid } from "nanoid";

function SortingBar({ sortTasks, sortingOptions, setSortOption, sortOption }) {
  // console.log("chosen", sortOption);
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
            <Dropdown.Item
              href="#"
              onClick={() => setSortOption(option)}
              key={nanoid()}
            >
              {option.label}{" "}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </InputGroup>
    </div>
  );
}

export default SortingBar;
