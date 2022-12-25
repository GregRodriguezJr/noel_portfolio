import React from 'react'

const Albums = () => {
  return (
    <div id='albums' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <h2 className='uppercase text-center p-5 text-xl'>Photo Albums</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 duration-150 cursor-pointer'>
                    <img src="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='rounded-xl' />
                </div>
                <div className='flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 duration-150 cursor-pointer'>
                    <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='rounded-xl' />
                </div>
                <div className='flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 duration-150 cursor-pointer'>
                    <img src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='rounded-xl' />
                </div>
                <div className='flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 duration-150 cursor-pointer'>
                    <img src="https://images.unsplash.com/photo-1599732494971-a6110ea1ad20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='rounded-xl' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Albums