import React from 'react';
import PropTypes from 'prop-types';
import { NotifyMessage } from 'components/Notification/Notification.styled';

export const Notification = ({ message }) => (
  <NotifyMessage>{message}</NotifyMessage>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
