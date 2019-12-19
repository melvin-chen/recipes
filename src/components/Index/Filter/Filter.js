import React, { useState, useEffect } from "react";
import { FilterContainer, FilterInput } from "./FilterStyles";

const Filter = (props) => {
  
  return (
    <FilterContainer>
      <FilterInput
        placeholder="Search title"
        onChange={event => props.titleFilterCallback(event.target.value)}
      />
    </FilterContainer>
  );
};

export default Filter;
