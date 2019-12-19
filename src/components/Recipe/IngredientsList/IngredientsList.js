import PropTypes from "prop-types";
import React from "react";

import { IngredientsContainer } from './IngredientsListStyles';

import { IndexSubHeader } from '../../Index/IndexComponents/IndexComponentsStyles';

const IngredientsList = ( { listItems }) => {
    return(
        <IngredientsContainer span={8} >
            <IndexSubHeader>Ingredients</IndexSubHeader>

        </IngredientsContainer>
    );
};


export default IngredientsList;