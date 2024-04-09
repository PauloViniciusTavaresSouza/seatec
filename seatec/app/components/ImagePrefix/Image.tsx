import React from 'react';

const ImageWithPrefix = ({
  src,
  alt,
  width,
  height,
  id
}: {
  src: string;
  alt: string;
  width: string;
  height: string;
  id?: string | undefined;
}) => {
  // Defina o prefixo da sua rota aqui
  // const prefix = `${process.env.BASE_PATH}`;

  // const prefixedSrc = `${prefix}${src}`;

  return <img id={id} src={src} alt={alt} width={width} height={height} />;
};

export default ImageWithPrefix;
