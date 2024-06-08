import React from 'react'

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div>
        <div className="cpy">
            <h6>© {date} / OM_PARMAR</h6>
        </div>
      
    </div>
  )
}
