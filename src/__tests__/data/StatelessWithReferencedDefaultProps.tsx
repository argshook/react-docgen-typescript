import * as PropTypes from 'prop-types';
import * as React from 'react';

export interface StatelessWithDefaultPropsProps {
  /** sampleJSDoc description
   * @default sampleJSDoc default value
   */
  sampleJSDoc?: string;
  /** sampleProp description */
  sampleProp?: string;
}

const defaultProps = {
  sampleProp: 'sampleProp default value'
};

/** StatelessWithReferencedDefaultProps description */
export const StatelessWithReferencedDefaultProps: React.StatelessComponent<
  StatelessWithDefaultPropsProps
> = props => <div>test</div>;

StatelessWithReferencedDefaultProps.defaultProps = defaultProps;

StatelessWithReferencedDefaultProps.propTypes = {
  sampleProp: PropTypes.string
};
