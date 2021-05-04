import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Basic from './Basic';
import Size from './Size';
import RefEg from './RefEg';
import PopoverPositions from './PopoverPositions';

storiesOf('Popover', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Popover positions', () => <PopoverPositions />)
  .add('Basic', () => <Basic />)
  .add('Size', () => <Size />)
  .add('Focus on Open', () => <RefEg />);
