import PropTypes from "prop-types";
import React from "react";

import {
  StepsListContainer,
  OrderedStep,
  OrderedList
} from "./StepsListStyles";

const StepsList = ({ steps }) => {
  const isMultiSections = steps.section.length > 1;

  return (
    <StepsListContainer xs={24} m={16} lg={16}>
      <h1>Steps</h1>
      {steps.section.map(s => (
        <Section section={s} showTitle={isMultiSections} />
      ))}
    </StepsListContainer>
  );
};

const Section = ({ section, showTitle }) => {
  return (
    <div>
      {showTitle && <h1>{section.title}</h1>}
      <OrderedStep>
        {section.stepItems &&
          section.stepItems.map(({ step }) => <Step step={step} />)}
        {!showTitle && !section.stepItems && <Step step={section.title} />}
      </OrderedStep>
    </div>
  );
};

const Step = ({ step }) => {
  return <OrderedList>{step}</OrderedList>;
};

export default StepsList;
