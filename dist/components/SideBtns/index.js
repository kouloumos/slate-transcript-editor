import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import KeyboardReturnOutlinedIcon from '@material-ui/icons/KeyboardReturnOutlined';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import TitleIcon from '@material-ui/icons/Title';
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import RedoIcon from '@material-ui/icons/Redo';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import EmojiSymbolsOutlinedIcon from '@material-ui/icons/EmojiSymbolsOutlined';
import subtitlesExportOptionsList from '../../util/export-adapters/subtitles-generator/list.js';

function SideBtns({
  handleExport,
  isProcessing,
  isContentModified,
  isContentSaved,
  setIsProcessing,
  insertTextInaudible,
  handleInsertMusicNote,
  handleSplitParagraph,
  handleNewChapter,
  handleRestoreTimecodes,
  handleReplaceText,
  handleSave,
  handleAnalyticsEvents,
  REPLACE_WHOLE_TEXT_INSTRUCTION,
  optionalBtns,
  handleUndo,
  handleRedo,
  isEditable,
  buttonConfig
}) {
  const [anchorMenuEl, setAnchorMenuEl] = useState(null); // used by MUI export menu

  const handleMenuClose = () => {
    setAnchorMenuEl(null);
  }; // used by MUI export menu


  const handleMenuClick = event => {
    setAnchorMenuEl(event.currentTarget);
  };

  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    item: true,
    xs: 12,
    sm: 1,
    md: 1,
    lg: 1,
    xl: 1,
    alignContent: "flex-start"
  }, buttonConfig.export && /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: /*#__PURE__*/React.createElement(Typography, {
      variant: "body1"
    }, "Export options")
  }, /*#__PURE__*/React.createElement(Button, {
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    onClick: handleMenuClick
  }, /*#__PURE__*/React.createElement(SaveAltIcon, {
    color: "primary"
  }), " ", /*#__PURE__*/React.createElement(KeyboardArrowDownIcon, {
    color: "primary"
  }))), /*#__PURE__*/React.createElement(Menu, {
    id: "simple-menu",
    anchorEl: anchorMenuEl,
    keepMounted: true,
    open: Boolean(anchorMenuEl),
    onClose: handleMenuClose
  }, /*#__PURE__*/React.createElement(MenuItem, {
    onClick: handleMenuClose,
    disabled: true
  }, /*#__PURE__*/React.createElement(Link, {
    style: {
      color: 'black'
    }
  }, "Text Export")), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: () => {
      handleExport({
        type: 'text',
        ext: 'txt',
        speakers: false,
        timecodes: false,
        isDownload: true
      });
      handleMenuClose();
    }
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary"
  }, "Text (", /*#__PURE__*/React.createElement("code", null, ".txt"), ")")), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: () => {
      handleExport({
        type: 'text',
        ext: 'txt',
        speakers: true,
        timecodes: false,
        isDownload: true
      });
      handleMenuClose();
    }
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary"
  }, "Text (Speakers)")), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: () => {
      handleExport({
        type: 'text',
        ext: 'txt',
        speakers: false,
        timecodes: true,
        isDownload: true
      });
      handleMenuClose();
    }
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary"
  }, "Text (Timecodes)")), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: () => {
      handleExport({
        type: 'text',
        ext: 'txt',
        speakers: true,
        timecodes: true,
        isDownload: true
      });
      handleMenuClose();
    }
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary"
  }, " Text (Speakers & Timecodes)")), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: () => {
      handleExport({
        type: 'text',
        ext: 'txt',
        speakers: true,
        timecodes: true,
        atlasFormat: true,
        isDownload: true
      });
      handleMenuClose();
    }
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary"
  }, " Text (Atlas format)")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: () => {
      handleExport({
        type: 'word',
        ext: 'docx',
        speakers: false,
        timecodes: false,
        isDownload: true
      });
      handleMenuClose();
    }
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary"
  }, ' ', "Word (", /*#__PURE__*/React.createElement("code", null, ".docx"), ")")), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: () => {
      handleExport({
        type: 'word',
        ext: 'docx',
        speakers: true,
        timecodes: false,
        isDownload: true
      });
      handleMenuClose();
    }
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary"
  }, " Word (Speakers)")), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: () => {
      handleExport({
        type: 'word',
        ext: 'docx',
        speakers: false,
        timecodes: true,
        isDownload: true
      });
      handleMenuClose();
    }
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary"
  }, " Word (Timecodes)")), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: () => {
      handleExport({
        type: 'word',
        ext: 'docx',
        speakers: true,
        timecodes: true,
        isDownload: true
      });
      handleMenuClose();
    }
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary"
  }, " Word (Speakers & Timecodes)")), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: () => {
      handleExport({
        type: 'word',
        ext: 'docx',
        speakers: false,
        timecodes: false,
        inlineTimecodes: true,
        hideTitle: true
      });
      handleMenuClose();
    }
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary"
  }, " Word (OHMS)")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: () => {
      handleExport({
        type: 'markdown',
        ext: 'md',
        isDownload: true
      });
      handleMenuClose();
    }
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary"
  }, "Markdown (", /*#__PURE__*/React.createElement("code", null, ".md"), ")")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: handleMenuClose,
    disabled: true
  }, /*#__PURE__*/React.createElement(Link, {
    style: {
      color: 'black'
    }
  }, "Closed Captions Export")), subtitlesExportOptionsList.map(({
    type,
    label,
    ext
  }, index) => {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: index + label,
      onClick: () => {
        handleExport({
          type,
          ext,
          isDownload: true
        });
        handleMenuClose();
      }
    }, /*#__PURE__*/React.createElement(Link, {
      color: "primary"
    }, label, " (", /*#__PURE__*/React.createElement("code", null, ".", ext), ")"));
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: handleMenuClose,
    disabled: true
  }, /*#__PURE__*/React.createElement(Link, {
    style: {
      color: 'black'
    }
  }, "Developer options")), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: () => {
      handleExport({
        type: 'json-slate',
        ext: 'json',
        speakers: true,
        timecodes: true,
        isDownload: true
      });
      handleMenuClose();
    }
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary"
  }, "SlateJs (", /*#__PURE__*/React.createElement("code", null, ".json"), ")")), /*#__PURE__*/React.createElement(MenuItem, {
    onClick: () => {
      handleExport({
        type: 'json-digitalpaperedit',
        ext: 'json',
        speakers: true,
        timecodes: true,
        isDownload: true
      });
      handleMenuClose();
    }
  }, /*#__PURE__*/React.createElement(Link, {
    color: "primary"
  }, "DPE (", /*#__PURE__*/React.createElement("code", null, ".json"), ")")))), isEditable && /*#__PURE__*/React.createElement(React.Fragment, null, buttonConfig.save && /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: /*#__PURE__*/React.createElement(Typography, {
      variant: "body1"
    }, "save")
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: isProcessing,
    onClick: handleSave,
    color: "primary"
  }, /*#__PURE__*/React.createElement(SaveOutlinedIcon, {
    color: isContentSaved ? 'primary' : 'secondary'
  })))), buttonConfig.newChapter && /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: `To insert a chapter, put the cursor at the first paragraph of the new chapter and click this button `
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: isProcessing,
    onClick: handleNewChapter,
    color: "primary"
  }, /*#__PURE__*/React.createElement(TitleIcon, {
    color: "primary"
  })))), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement("br", null)), buttonConfig.textInaudible && /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: /*#__PURE__*/React.createElement(Typography, {
      variant: "body1"
    }, "Put the cursor at a point where you'd want to add [INAUDIBLE] text, and click this button")
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: isProcessing,
    onClick: insertTextInaudible,
    color: "primary"
  }, /*#__PURE__*/React.createElement(EmojiSymbolsOutlinedIcon, {
    color: "primary"
  })))), buttonConfig.musicNote && /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: /*#__PURE__*/React.createElement(Typography, {
      variant: "body1"
    }, "Insert a \u266A in the text")
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: isProcessing,
    onClick: handleInsertMusicNote,
    color: "primary"
  }, /*#__PURE__*/React.createElement(MusicNoteOutlinedIcon, {
    color: "primary"
  })))), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement("br", null)), buttonConfig.undoRedo && /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: /*#__PURE__*/React.createElement(Typography, {
      variant: "body1"
    }, "Undo ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("code", null, "cmd"), " ", /*#__PURE__*/React.createElement("code", null, "z"))
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleUndo,
    color: "primary"
  }, /*#__PURE__*/React.createElement(UndoOutlinedIcon, {
    color: "primary"
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    title: /*#__PURE__*/React.createElement(Typography, {
      variant: "body1"
    }, "Redo ", /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("code", null, "cmd"), " ", /*#__PURE__*/React.createElement("code", null, "shift"), " ", /*#__PURE__*/React.createElement("code", null, "z"))
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleRedo,
    color: "primary"
  }, /*#__PURE__*/React.createElement(RedoIcon, {
    color: "primary"
  })))), buttonConfig.restoreTimecodes && /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: ' Restore timecodes. At the moment for transcript over 1hour it could temporarily freeze the UI for a few seconds'
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: isProcessing,
    onClick: async () => {
      try {
        setIsProcessing(true);
        await handleRestoreTimecodes();

        if (handleAnalyticsEvents) {
          // handles if click cancel and doesn't set speaker name
          handleAnalyticsEvents('ste_handle_restore_timecodes_btn', {
            fn: 'handleRestoreTimecodes'
          });
        }
      } finally {
        setIsProcessing(false);
      }
    },
    color: "primary"
  }, /*#__PURE__*/React.createElement(CachedOutlinedIcon, {
    color: isContentModified ? 'secondary' : 'primary'
  })))), buttonConfig.replaceText && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: /*#__PURE__*/React.createElement(Typography, {
      variant: "body1"
    }, REPLACE_WHOLE_TEXT_INSTRUCTION)
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleReplaceText,
    color: "primary"
  }, /*#__PURE__*/React.createElement(ImportExportIcon, {
    color: "primary"
  })))))), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, optionalBtns));
}

export default SideBtns;