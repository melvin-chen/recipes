import PropTypes from "prop-types";
import React from "react";

import {
  IngredientsAndToolsListContainer,
  IngredientsListItem,
  Message,
  ItemsListContainer
} from "./IngredientsListStyles";

import { IndexSubheader } from "../../Index/IndexComponents/IndexComponentsStyles";

const ItemsList = ({ title, listItems }) => {
  const isEmpty = listItems.length === 0;
  return (
    <ItemsListContainer>
      <h1>{title}</h1>
      {!isEmpty &&
        listItems.map(function({ item }) {
          return <ListItem item={item} />;
        })}
      {isEmpty && <Message>None</Message>}
    </ItemsListContainer>
  );
};

const IngredientsAndToolsList = ({ ingredients, tools }) => {
  return (
    <IngredientsAndToolsListContainer xs={24} m={8} lg={8}>
      <ItemsList title="Ingredients" listItems={ingredients} />
      <ItemsList title="Tools" listItems={tools} />
    </IngredientsAndToolsListContainer>
  );
};

const ListItem = ({ item }) => {
  return <IngredientsListItem key={item}>{item}</IngredientsListItem>;
};

export default IngredientsAndToolsList;
