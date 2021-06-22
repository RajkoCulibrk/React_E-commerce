import React, { useState } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation } from "react-router";

const Search = () => {
  const location = useLocation();

  let params = new URLSearchParams(location.search);
  const history = useHistory();
  const like = params.get("like") ? params.get("like") : "";
  const [showSearch, setShowSerch] = useState(
    params.get("like") ? true : false
  );

  const handleChange = (like, fromHandleClose) => {
    if (!fromHandleClose) {
      params.set("page", 1);
    }
    params.set("like", like);
    history.push({
      search: params.toString()
    });
  };
  const handleClose = () => {
    handleChange("", true);
    setShowSerch(false);
  };
  return (
    <>
      {!showSearch && (
        <Button
          size="sm"
          onClick={() => setShowSerch(!showSearch)}
          variant="light"
        >
          {" "}
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      )}
      {showSearch && (
        <InputGroup style={{ width: "150px" }}>
          <FormControl
            placeholder="Search"
            onChange={(e) => handleChange(e.target.value)}
            value={like}
          />
          <InputGroup.Append onClick={() => handleClose()}>
            <Button variant="light" size="sm">
              <FontAwesomeIcon icon={faWindowClose} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      )}
    </>
  );
};

export default Search;
