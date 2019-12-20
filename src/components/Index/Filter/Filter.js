import React, { useState, useEffect } from "react";
import {
  FilterContainer,
  FilterInput,
  FilterSelectContainer,
  FilterSelect,
  TextInputTitle,
  TextInputTags,
  InputTitle
} from "./FilterStyles";
import { AutoComplete, Select } from "antd";

const { Option } = Select;

const Filter = props => {
  console.log(props.typeList);
  console.log(props.tagsList);
  // const [typeList, setTypeList] = useState(props.typeList);

  // pushTag = selectedTag => {};

  return (
    <FilterContainer>
      <TextInputTitle>
        <InputTitle level={3}>Search Title:</InputTitle>
        <FilterInput
          placeholder="Search title"
          onChange={event => props.titleFilterCallback(event.target.value)}
        />
      </TextInputTitle>
      <TextInputTags>
        <InputTitle level={3}>Search Tags:</InputTitle>
        <Complete
          tagsCallback={event => props.tagsFilterCallback(event)}
          tagsList={props.tagsList}
        />
      </TextInputTags>
      <FilterSelectContainer>
        <InputTitle level={3}>Food Type:</InputTitle>
        <TypeSelect typeList={props.typeList} />
      </FilterSelectContainer>
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
      style={{ width: "100%" }}
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

const TypeSelect = props => {
  return (
    <FilterSelect
      showSearch
      style={{ width: 200 }}
      placeholder="Food Type"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option key={0} value="none">
        none
      </Option>
      {props.typeList.items
        .sort((a, b) => {
          return a.order - b.order;
        })
        .map((item, index) => (
          <Option key={index + 1} value={index}>
            {item.type}
          </Option>
        ))}
    </FilterSelect>
  );
};

// ReactDOM.render(
//   <Select
//     showSearch
//     style={{ width: 200 }}
//     placeholder="Select a person"
//     optionFilterProp="children"
//     onChange={onChange}
//     onFocus={onFocus}
//     onBlur={onBlur}
//     onSearch={onSearch}
//     filterOption={(input, option) =>
//       option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
//     }
//   >
//     <Option value="jack">Jack</Option>
//     <Option value="lucy">Lucy</Option>
//     <Option value="tom">Tom</Option>
//   </Select>,
//   mountNode,
// );
