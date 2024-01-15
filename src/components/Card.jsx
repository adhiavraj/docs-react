import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, refrence }) {
    return (
        <motion.div drag dragConstraints={refrence} whileDrag={{scaleX: 1.1, scaleY: 1.1}} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[30px] text-white px-8 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
            <div className='footer absolute bottom-0  w-full left-0'>
                <div className='flex item-center justify-between px-8 py-4 mb-3'>
                    <h5>{data.fileSize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer'>

                        {data.close ? <IoClose /> : <LuDownload size=".7em" color='#fff' />}

                    </span>
                </div>

                {
                    data.tag.isOpen && (
                    <div className={`tag w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-4 flex items-center justify-center cursor-pointer`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>)
                }

            </div>
        </motion.div>
    )
}

export default Card