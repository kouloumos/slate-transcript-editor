import SlateHelpers from '../index';
/**
 * Adds a new chapter field to the paragraph that the cursor is currently in.
 * 
 * @param {Object} editor - The Slate editor instance.
 * @param {string} chapter - The chapter to be added to the paragraph.
 * @return {boolean} - Returns true if the chapter was successfully added.
 */

function addChapterToParagraph(editor, chapter = "Chapter Title") {
  const [blockNode, path] = SlateHelpers.getClosestBlock(editor);

  if (!blockNode) {
    console.info('No block node found at the current selection');
    return false;
  } // Create a new block node with the chapter field added


  const updatedBlockNode = { ...blockNode,
    chapter
  }; // Remove the original block node

  SlateHelpers.removeNodes({
    editor,
    options: {
      at: path
    }
  }); // Insert the updated block node with the new chapter field

  SlateHelpers.insertNodesAtSelection({
    editor,
    blocks: [updatedBlockNode],
    moveSelection: false,
    options: {
      at: path
    }
  });
  return true;
}

export default addChapterToParagraph;