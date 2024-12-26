import React from 'react'

const CategoryPage = ({ params }: { params: { category: string } }) => {
    console.log(params)
  return (
    <div> 
      <p>{params.category}</p>
    </div>
  )
}

export default CategoryPage