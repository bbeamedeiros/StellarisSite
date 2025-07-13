import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

export default function ImagemParceiro({ nome }) {
  const cld = new Cloudinary({ cloud: { cloudName: 'dpc8oscuf' } });

  const img = cld.image(nome)
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(100).height(100));

  return <AdvancedImage cldImg={img} />;
}