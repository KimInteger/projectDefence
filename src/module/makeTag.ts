export default function makeTag(tagName: string): HTMLElement {
  let result: HTMLElement = document.createElement(tagName);
  return result;
}
