import React, { useCallback } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";

import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import { searchProducts } from "../../../redux/actions";

function SearchBar() {
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      dispatch(searchProducts(e.target.value));
    },
    [dispatch]
  );

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        onChange={(e) => handleChange(e)}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}

export default SearchBar;
