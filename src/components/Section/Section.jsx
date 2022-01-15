import React from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackSection,
  SectionTitle,
} from 'components/Section/Section.styled';

export const Section = ({ title, children }) => (
  <FeedbackSection>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </FeedbackSection>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
