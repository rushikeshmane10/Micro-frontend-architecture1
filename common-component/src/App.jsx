import React, { Suspense } from "react"


export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading Navbar...</div>}>
        
      </Suspense>
    </div>
  )
}
