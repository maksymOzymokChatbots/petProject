import * as React from 'react';
import { SVGIconProps } from './svg-icon.props';
import { ReactSVG } from 'react-svg';

/**
 * Renders SVGIcon
 */
const SVGIcon: React.FC<SVGIconProps> = props => (
  <ReactSVG {...props} src={require(`public/img/svg/${props.src}`)} />
);

export { SVGIcon };
