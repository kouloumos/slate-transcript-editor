import { shortTimecode } from '../../timecode-converter/index.js';
import { Node } from 'slate';

const slateToMarkdown = (value, one_sentence_per_line = true) => {
  let markdownContent = '';
  let lastSpeaker = null;
  let lastTimecode = null;
  let currentText = '';

  const breakIntoSentences = (text) => {
    const abbreviationPattern = /(?<!\w\.\w.)(?<![A-Z][a-z]\.)/;
    const sentenceEndPattern = /(?<=\.|\?|…|-)\s/;
    const sentenceSplitPattern = new RegExp(`${abbreviationPattern.source}${sentenceEndPattern.source}`, 'g');
    return text.split(sentenceSplitPattern).map((sentence) => sentence.trim());
  };

  value.forEach((n) => {
    // Check if the element has a chapter field
    if (n.chapter) {
      if (currentText) {
        markdownContent += `${lastSpeaker}: ${lastTimecode}\n\n${currentText}\n\n`;
      }
      markdownContent += `## ${n.chapter}\n\n`;
      lastSpeaker = null;
      lastTimecode = null;
      currentText = '';
    }

    const currentSpeaker = n.speaker ? n.speaker : 'UNKNOWN';
    const currentTimecode = shortTimecode(n.start);
    let text = Node.string(n);

    if (one_sentence_per_line) {
      text = breakIntoSentences(text).join('\n');
    }

    if (currentSpeaker === lastSpeaker && !n.chapter) {
      // concurrent speaker segments signal paragraph break
      currentText += `\n\n${text}`;
    } else {
      if (lastSpeaker !== null) {
        markdownContent += `${lastSpeaker}: ${lastTimecode}\n\n${currentText}\n\n`;
      }
      lastSpeaker = currentSpeaker;
      lastTimecode = currentTimecode;
      currentText = text;
    }
  });

  if (lastSpeaker !== null) {
    markdownContent += `${lastSpeaker}: ${lastTimecode}\n\n${currentText}\n\n`;
  }

  return markdownContent.trim();
};

export default slateToMarkdown;
