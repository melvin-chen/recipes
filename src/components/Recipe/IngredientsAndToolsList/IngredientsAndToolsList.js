import React from "react";

import {
  IngredientsAndToolsListContainer,
  IngredientsListItem,
  Message,
  ItemsListContainer,
  IList
} from "./IngredientsListStyles";

import Title from "antd/lib/typography/Title";

const ItemsList = ({ title, listItems }) => {
  const isEmpty = listItems.length === 0;
  return (
    <ItemsListContainer>
      <Title level={2}>{title}</Title>
      <IList>
        {!isEmpty &&
          listItems.map(function({ item }) {
            return <ListItem item={item} />;
          })}
        {isEmpty && <Message>None</Message>}
      </IList>
    </ItemsListContainer>
  );
};

const IngredientsAndToolsList = ({ ingredients, tools }) => {
  return (
    <IngredientsAndToolsListContainer>
      <ItemsList title="Ingredients" listItems={ingredients} />
      <ItemsList title="Tools" listItems={tools} />
    </IngredientsAndToolsListContainer>
  );
};

const ListItem = ({ item }) => {
  return <IngredientsListItem key={item}>{item}</IngredientsListItem>;
};

export default IngredientsAndToolsList;
