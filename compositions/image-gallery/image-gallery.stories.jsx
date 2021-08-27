import React from 'react';
import ImageGallery from './';

import { resources } from '../../_mock/plein-air-acrylic.json'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: ImageGallery,
  title: 'Image Gallery'
}

const mockSelect = index => {
  console.log(`Image index ${index} selected`)
}

const Template = args => <ImageGallery {...args} />

export const Default = Template.bind({})
Default.args = {
  galleryImages: resources,
  selectThumbnail: mockSelect,
  currentImageIdx: 0,
  thumbSize: 80
}
