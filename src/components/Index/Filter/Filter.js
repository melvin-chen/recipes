import React from "react";
import {
  FilterContainer,
  FilterInput,
  FilterSelectContainer,
  FilterSelect,
  TextInputTitle,
  TextInputTags,
  InputTitle
} from "./FilterStyles";
import { Select } from "antd";

const { Option } = Select;

const Filter = props => {
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
        <TagsSelect
          tagsCallback={selectedTags => props.tagsFilterCallback(selectedTags)}
          tagsList={props.tagsList}
        />
      </TextInputTags>
      <FilterSelectContainer>
        <InputTitle level={3}>Category:</InputTitle>
        <TypeSelect
          typeCallback={event => props.typeFilterCallback(event)}
          typeList={props.typeList}
        />
      </FilterSelectContainer>
    </FilterContainer>
  );
};

export default Filter;

const TagsSelect = props => {
  let tags = [];
  props.tagsList.items.forEach(element => {
    tags.push(element.name);
  });

  return (
    <Select
      mode="multiple"
      style={{ width: "100%" }}
      placeholder="Please select"
      onChange={selectedTags => props.tagsCallback(selectedTags)}
    >
      {props.tagsList.items.map((tag, index) => (
        <Option key={index} value={tag.name}>
          {tag.name}
        </Option>
      ))}
    </Select>
  );
};

const TypeSelect = props => {
  return (
    <FilterSelect
      style={{ width: "100%" }}
      placeholder="Category"
      onSelect={value => props.typeCallback(value)}
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
          <Option key={index + 1} value={item.type}>
            {item.type}
          </Option>
        ))}
    </FilterSelect>
  );
};
