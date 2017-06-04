import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

import { colors, TextWithFontSize15 } from '../../styled-components';

export const PointName = styled.span`
  color: ${colors.beige};
`;

export const newIcon = styled(Icon);

export const SavedIcon = styled.span`
  color: ${colors.green};
`;

export const Text = TextWithFontSize15;

export const StrongText = Text.extend`
  font-weight: 600;
`;
