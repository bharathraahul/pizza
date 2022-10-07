import React from 'react'

const Home = () => {
  return (
    <>
    <div className='hero py-16'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='w-1/2'>
          <h6 className='text-lg'><em>Pizza Ordering System</em></h6>
          <h1 className='text-3xl md:text-6xl font-bold'>Order your Pizza Now</h1>
          </div>
        <div className='w-1/2'>
          <img className='w-4/5' src="./images/pizza.png" alt="Pizza image" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;