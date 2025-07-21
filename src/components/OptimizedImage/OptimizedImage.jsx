import React from 'react';
import LazyImage from '../LazyImage/LazyImage';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '',
  webpSrc,
  avifSrc,
  ...props 
}) => {
  // Si no se proporcionan versiones optimizadas, generar automáticamente
  const baseSrc = src.replace(/\.(jpg|jpeg|png)$/i, '');
  const extension = src.match(/\.(jpg|jpeg|png)$/i)?.[1];
  
  const webpSource = webpSrc || `${baseSrc}.webp`;
  const avifSource = avifSrc || `${baseSrc}.avif`;

  return (
    <picture>
      {/* Formato AVIF (más moderno y eficiente) */}
      <source srcSet={avifSource} type="image/avif" />
      
      {/* Formato WebP (amplio soporte) */}
      <source srcSet={webpSource} type="image/webp" />
      
      {/* Fallback a formato original */}
      <LazyImage
        src={src}
        alt={alt}
        className={className}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
