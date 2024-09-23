import { allStyle } from '../static/allStyle';
import assginStyle from './assginStyle';
import makeTag from './makeTag';

export function mainMap(): HTMLElement {
  const mainMapStyle = makeTag('div');
  assginStyle(mainMapStyle, allStyle.mapStyle);
  return mainMapStyle;
}
