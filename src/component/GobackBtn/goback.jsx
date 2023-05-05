import React from 'react'
import {BiUser} from "react-icons/bi"
import { Link, useNavigate } from 'react-router-dom'
import {BiArrowBack} from "react-icons/bi"

function Goback() {
    const navigate = useNavigate();
    const goBack = () =>{
        navigate(-1);
    }
  return (
    <div>
        <div className='w-full max-w-[80%] ml-[70px] pt-7 text-[#00b4b6] font-bold'>
            <div className='flex items-center gap-x-3 '>
                <BiArrowBack size={30}/> 
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    </div>
  )
}

export default Goback