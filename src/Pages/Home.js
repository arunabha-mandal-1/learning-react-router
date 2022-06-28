import React, { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    <h1>
      This is Home page
    </h1>
  )
}
