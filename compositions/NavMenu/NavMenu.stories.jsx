import React from 'react';
import NavMenu from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: NavMenu,
  title: 'NavMenu'
}

const Template = args => <NavMenu {...args} />

export const Default = Template.bind({})