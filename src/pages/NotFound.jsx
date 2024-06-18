import React from 'react'
import { Button } from '../component'

const NotFound = () => {
  return (
    <section>
      <div className="flex justify-center items-center h-screen flex-col gap-9">
        <h1 className="text-4xl font-bold text-red-500">404 Not Found</h1>
        <Button title="Go Back" to="/" className=" bg-red-500" />
      </div>
    </section>
  )
}

export default NotFound