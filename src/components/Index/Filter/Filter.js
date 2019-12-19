import React, { useState, useEffect } from "react";
import {
  FilterContainer,
  FilterInput,
  FilterTextInputContainer,
  RadioContainer,
  RadioGroup,
  RadioButton
} from "./FilterStyles";
import { Menu, Dropdown, Icon, AutoComplete, Radio } from "antd";

const Filter = props => {
  console.log(props.typeList);
  console.log(props.tagsList);
  // const [typeList, setTypeList] = useState(props.typeList);

  // pushTag = selectedTag => {};

  return (
    <FilterContainer>
      <FilterTextInputContainer>
        <FilterInput
          placeholder="Search title"
          onChange={event => props.titleFilterCallback(event.target.value)}
        />
        <Complete
          tagsCallback={event => props.tagsFilterCallback(event)}
          tagsList={props.tagsList}
        />
      </FilterTextInputContainer>
      <RadioContainer>
        <RadioGroup defaultValue="0">
          <RadioButton>none</RadioButton>
          {props.typeList.items
            .sort((a, b) => {
              return a.order - b.order;
            })
            .map((item, index) => (
              <RadioButton key={index + 1} value={index}>
                {item.type}
              </RadioButton>
            ))}
        </RadioGroup>
      </RadioContainer>
      {/* <FilterInput placeholder="Filter Tags" /> */}
    </FilterContainer>
  );
};

export default Filter;

const Complete = props => {
  let tags = [];
  props.tagsList.items.forEach(element => {
    tags.push(element.name);
  });
  return (
    <AutoComplete
      style={{ width: "40%" }}
      dataSource={tags}
      placeholder="Search tags"
      onSelect={event => props.tagsCallback(event)}
      filterOption={(inputValue, option) =>
        option.props.children
          .toUpperCase()
          .indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
};
