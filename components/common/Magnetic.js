'use client';

import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';

export default function Magnetic({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    const isTouchDevice =
      'ontouchstart' in window || navigator.msMaxTouchPoints;

    if (isTouchDevice) {
      return;
    }

    const xPos = gsap.quickTo(magnetic.current, 'x', {
      duration: 0.5,
      ease: 'elastic.out(1, 0.8)'
    });

    const yPos = gsap.quickTo(magnetic.current, 'y', {
      duration: 0.5,
      ease: 'elastic.out(1, 0.8)'
    });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xPos(x * 1);
      yPos(y * 1);
    };

    const mouseLeave = () => {
      xPos(0);
      yPos(0);
    };

    const element = magnetic.current;
    if (element) {
      element.addEventListener('mousemove', mouseMove);
      element.addEventListener('mouseleave', mouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', mouseMove);
        element.removeEventListener('mouseleave', mouseLeave);
      }
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
