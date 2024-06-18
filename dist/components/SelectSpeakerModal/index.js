function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, TextField, Typography, Box, makeStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const SpeakerModal = ({
  isOpen,
  oldSpeakerName,
  speakers,
  onSetSpeakerName,
  closeModal
}) => {
  const classes = useStyles();
  const [newSpeakerName, setNewSpeakerName] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState('');
  const [localSpeakers, setLocalSpeakers] = useState(speakers);
  useEffect(() => {
    if (isOpen) {
      setNewSpeakerName('');
      setSelectedSpeaker(oldSpeakerName);
    }
  }, [isOpen, oldSpeakerName]);

  const handleAddSpeaker = event => {
    event.preventDefault();

    if (newSpeakerName && !localSpeakers.includes(newSpeakerName)) {
      setLocalSpeakers([...localSpeakers, newSpeakerName]);
      setSelectedSpeaker(newSpeakerName);
    }

    setNewSpeakerName('');
  };

  const handleSave = () => {
    onSetSpeakerName(selectedSpeaker, false); // Pass false as a placeholder for isUpdateAllSpeakerInstances

    closeModal();
  };

  return /*#__PURE__*/React.createElement(Modal, {
    open: isOpen,
    onClose: closeModal,
    className: classes.modal
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.paper
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h6",
    gutterBottom: true
  }, "Change Speaker Name"), /*#__PURE__*/React.createElement(Autocomplete, {
    options: localSpeakers,
    value: selectedSpeaker,
    onChange: (event, newValue) => setSelectedSpeaker(newValue),
    renderInput: params => /*#__PURE__*/React.createElement(TextField, _extends({}, params, {
      label: "Select or add speaker",
      variant: "outlined",
      fullWidth: true
    }))
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleAddSpeaker
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Add new speaker",
    variant: "outlined",
    fullWidth: true,
    value: newSpeakerName,
    onChange: e => setNewSpeakerName(e.target.value),
    margin: "normal"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    color: "primary",
    variant: "contained"
  }, "Add Speaker")), /*#__PURE__*/React.createElement(Box, {
    mt: 2
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleSave,
    color: "primary",
    variant: "contained"
  }, "Save"), /*#__PURE__*/React.createElement(Button, {
    onClick: closeModal,
    color: "secondary",
    variant: "contained",
    style: {
      marginLeft: '10px'
    }
  }, "Cancel"))));
};

SpeakerModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  oldSpeakerName: PropTypes.string.isRequired,
  speakers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSetSpeakerName: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};
export default SpeakerModal;