import React from 'react'

const Card = ({children, className}) => {
  return (
    <div className={`${className} py-6 px-5`}>
        {children}
    </div>
  )
}

export default Card