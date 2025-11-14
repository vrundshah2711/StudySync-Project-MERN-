// src/components/BackToTop.jsx
import React, { useEffect, useState } from 'react';

export default function BackToTop(){
  const [show, setShow] = useState(false);
  useEffect(()=>{
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if(!show) return null;
  return (
    <button className="contact_button" style={{position:'fixed', right:20, bottom:30}} onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}>↑</button>
  );
}
