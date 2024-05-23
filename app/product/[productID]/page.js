import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <h1>This is the {params.productID} page of product page.</h1>
    </div>
  )
}

export default page
