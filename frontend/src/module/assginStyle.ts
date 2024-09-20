export default function assginStyle(
  element: HTMLElement,
  styles: Partial<CSSStyleDeclaration>,
): void {
  for (let key in styles) {
    element.style[key] = styles[key] as string;
  }
}
