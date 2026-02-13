import React from 'react';
import windIcon from '/src/assets/Wind.png';           // Capital W
import humidityIcon from '/src/assets/humidity.png';   // lowercase (matches)
import visibilityIcon from '/src/assets/visibility.png'; // lowercase (matches)
import sunriseIcon from '/src/assets/Sunrise.png';     // Capital S
import sunsetIcon from '/src/assets/Sunset.png';       // Capital S

const Icon = ({ src, alt, className }) => (
    <img src={src} alt={alt} className={`h-8 w-8 inline-block ${className}`} />
)

export const WindIcon = () => <Icon src={windIcon} alt="Wind" className='animate-icon svg-hover' />
export const HumidityIcon = () => <Icon src={humidityIcon} alt="Humidity" className='powerful-pulse svg-hover' />
export const VisibilityIcon = () => <Icon src={visibilityIcon} alt="Visibility" className='powerful-pulse svg-hover' />
export const SunriseIcon = () => <Icon src={sunriseIcon} alt="Sunrise" className='powerful-pulse svg-hover' />
export const SunsetIcon = () => <Icon src={sunsetIcon} alt="Sunset" className='powerful-pulse svg-hover' />