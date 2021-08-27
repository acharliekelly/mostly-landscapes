import React from 'react'
import { Image, Transformation } from 'cloudinary-react'
import { defaultImg } from '../../utils/cloudinaryApi'
import styles from './image-gallery.module.css'

export default function ImageGallery({ galleryImages, selectThumbnail, currentImageIdx, thumbSize }) {
  
  const {
    galleryContainer,
    thumbnailImage,
    selectedImage
  } = styles


  return (
    <div className={galleryContainer}>
      {galleryImages.map((thumb, index) => (
        <Image key={index}
          className={index === currentImageIdx ? selectedImage : thumbnailImage}
          title={thumb.caption}
          alt={thumb.description}
          publicId={thumb.public_id}
          onClick={() => selectThumbnail(index)} >
          <Transformation height={thumbSize} width={thumbSize} crop="fill" />
          <Transformation defaultImage={defaultImg} />
        </Image>
      ))}
    </div>
  )
}


