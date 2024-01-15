import React, { useRef, useState } from 'react'
import Card  from './Card'
// import { FaGlassWhiskey, FaSleigh, FaSmileWink } from 'react-icons/fa';


function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "Coming from the united states of america, Data - 1.",
            fileSize: "0.9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green" 
            }, 
        },
        {
            desc: "Coming from the united kingdom ( London ), Data - 2.",
            fileSize: "0.9mb",
            close: true,
            tag: {
                isOpen: false,
                tagTile: "Download Now",
                tagColor: "green" 
            }, 
        },
        {
            desc: "Coming from the francisco from somewhere in earth, Data - 3.",
            fileSize: "0.9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Processing...",
                tagColor: "blue" 
            }, 
        },
];
    useState()

    return (
        <>
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-10 p-5'>
                {/* <Card /> */}
                {data.map((item, index)=>(
                    <Card data={item} refrence={ref}/>
                ))}
            </div>
        </>
    )
}

export default Foreground