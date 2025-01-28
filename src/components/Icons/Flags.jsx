import React from 'react';

export const ArgentinaFlag = ({ className = "h-5 w-5" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    {/* Franja superior celeste */}
    <rect y="6" width="32" height="6.67" fill="#74ACDF"/>
    {/* Franja central blanca */}
    <rect y="12.67" width="32" height="6.66" fill="#FFFFFF"/>
    {/* Franja inferior celeste */}
    <rect y="19.33" width="32" height="6.67" fill="#74ACDF"/>
    {/* Sol de Mayo */}
    <g transform="translate(16,16) scale(0.11)">
      <circle cx="0" cy="0" r="20" fill="#F6B40E"/>
      <g id="rays">
        <polygon points="0,0 -4,-60 4,-60" fill="#F6B40E"/>
        <polygon points="0,0 -4,60 4,60" fill="#F6B40E"/>
        <polygon points="0,0 60,4 60,-4" fill="#F6B40E"/>
        <polygon points="0,0 -60,4 -60,-4" fill="#F6B40E"/>
        <polygon points="0,0 -42,-42 -36,-48" fill="#F6B40E"/>
        <polygon points="0,0 42,42 48,36" fill="#F6B40E"/>
        <polygon points="0,0 42,-42 48,-36" fill="#F6B40E"/>
        <polygon points="0,0 -42,42 -36,48" fill="#F6B40E"/>
      </g>
      {/* Cara del sol */}
      <circle cx="0" cy="0" r="16" fill="#F6B40E"/>
      <circle cx="-5" cy="-5" r="2" fill="#85340A"/>
      <circle cx="5" cy="-5" r="2" fill="#85340A"/>
      <path d="M -8,4 Q 0,10 8,4" stroke="#85340A" strokeWidth="2" fill="none"/>
    </g>
  </svg>
);

export const USAFlag = ({ className = "h-5 w-5" }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <rect y="6" width="32" height="20" fill="#FFFFFF"/>
    <rect y="8" width="32" height="2" fill="#B22234"/>
    <rect y="12" width="32" height="2" fill="#B22234"/>
    <rect y="16" width="32" height="2" fill="#B22234"/>
    <rect y="20" width="32" height="2" fill="#B22234"/>
    <rect y="24" width="32" height="2" fill="#B22234"/>
    <rect y="6" width="16" height="11" fill="#3C3B6E"/>
  </svg>
);
