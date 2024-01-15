import React from 'react';

function Background() {
    return (
        <>
            <div className='fixed z-[2] w-full h-screen'>
                <div className='absolute top-[2.5%] w-full py-10 flex justify-center text-zinc-500 font-semibold text-xl'>Documents.</div>
                <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] opacity-50 text-[5vw] tracking-tighter leading-none text-zinc-900 font-semibold'>Docs.</h1>
            </div>
        </>
    )
}

export default Background