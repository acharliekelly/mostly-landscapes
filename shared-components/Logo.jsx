import React from 'react';
import { Image } from 'cloudinary-react';


export default function Logo() {
    return (
        <Image 
            cloudName="cantimaginewhy" 
            publicId="icon/logo" 
            className="logo"
            alt="Logo" 
            height={80} 
        />
    )
}