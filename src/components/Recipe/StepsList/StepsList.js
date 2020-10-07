import PropTypes from "prop-types";
import React from "react";

import {
  StepsListContainer,
  OrderedStep,
  OrderedList
} from "./StepsListStyles";
import Title from "antd/lib/typography/Title";

const StepsList = ({ steps }) => {
  const isMultiSections = steps.section.length > 1;

  return (
    <StepsListContainer>
      <Title level={2}>Steps</Title>
      {steps.section.map(s => (
        <Section section={s} showTitle={isMultiSections} />
      ))}
    </StepsListContainer>
  );
};

const Section = ({ section, showTitle }) => {
  return (
    <div>
      {showTitle && <Title level={3}>{section.title}</Title>}
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
