import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({title, className, to}) => {
  return (
    <Link to={to} className={`${className} p-2 bg-blue-300 text-white hover:text-blue-900 hover:bg-blue-50 border border-blue-50 hover:border-blue-950 rounded-2xl transition duration-300`}>{title}</Link>
  )
}

export default Button