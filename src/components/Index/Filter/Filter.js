import React, { useState, useEffect } from "react";
import { FilterContainer, FilterInput } from "./FilterStyles";
import { Menu, Dropdown, Icon, AutoComplete } from "antd";

const Filter = props => {
  console.log(props.typeList);
  console.log(props.tagsList);
  // const [typeList, setTypeList] = useState(props.typeList);

  // pushTag = selectedTag => {};

  return (
    <FilterContainer>
      <FilterInput
        placeholder="Search title"
        onChange={event => props.titleFilterCallback(event.target.value)}
      />
      <Dropdown overlay={menu(props.typeList)} trigger={["click"]}>
        <a className="ant-dropdown-link" href="#">
          Filter Type <Icon type="down" />
        </a>
      </Dropdown>
      <Complete
        tagsCallback={event => props.tagsFilterCallback(event)}
        tagsList={props.tagsList}
      />
      {/* <FilterInput placeholder="Filter Tags" /> */}
    </FilterContainer>
  );
};

export default Filter;

const menu = typeList => {
  return (
    <Menu>
      {typeList.items.map((item, index) => (
        <Menu.Item key={index}>
          <a href="">{item.type}</a>
        </Menu.Item>
      ))}
    </Menu>
  );
};

const Complete = props => {
  let tags = [];
  props.tagsList.items.forEach(element => {
    tags.push(element.name);
  });
  return (
    <AutoComplete
      style={{ width: 200 }}
      dataSource={tags}
      placeholder="try to type `b`"
      onSelect={event => props.tagsCallback(event)}
      filterOption={(inputValue, option) =>
        option.props.children
          .toUpperCase()
          .indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
};
