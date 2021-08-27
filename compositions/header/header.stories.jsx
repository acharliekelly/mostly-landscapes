import React from 'react';
import Header from './';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Header,
  title: 'Header'
}

const Template = args => <Header {...args} />

export const Default = Template.bind({})

