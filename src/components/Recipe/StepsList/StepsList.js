import PropTypes from "prop-types";
import React from "react";

import { StepsListContainer } from "./StepsListStyles";

const StepsList = ( { steps }) => {
    const isMultiSections = steps.section.length > 1;

    return(
        <StepsListContainer span={16}>
        { steps.section.map((s) => <Section section={s} showTitle={isMultiSections}/>)}
        </StepsListContainer>
    );
};

const Section = ({ section, showTitle }) => {
    return (
        <div>
        { showTitle && <h1>{section.title}</h1> }
        <ol>
        { section.stepItems && section.stepItems.map(({step}) => <Step step={step}/>)}
        </ol>
        </div>
    
    );
}

const Step = ({step}) => {
    return(
        <li>{step}</li>
    );
}



export default StepsList;