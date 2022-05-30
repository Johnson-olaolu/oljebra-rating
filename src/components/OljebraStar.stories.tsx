import React from 'react';
import { Story, Meta } from '@storybook/react';

import OljebraStar from "./OljebraStar"
import { OljebraStarProps} from "./OljebraStar.types"

export default {
    title: "Oljebra Star",
    component: OljebraStar,
  } as Meta;

  // Create a master template for mapping args to render the OljebraStar component
const Template: Story<OljebraStarProps> = (args) => <OljebraStar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};