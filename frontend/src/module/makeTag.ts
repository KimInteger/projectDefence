import insertText from './insertText';

export default function makeTag(
  tagName: string,
  textNode: string = '',
): HTMLElement {
  let result: HTMLElement = document.createElement(tagName);
  insertText(result, textNode);
  return result;
}
