"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function page() {
    const [valueInput,setValueInput] = useState<any>();

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value;
        setValueInput(value);
    }
    const router = useRouter();

    const handleClick = () =>{
        router.push(`/baitap/bt1/posts?search=${valueInput}`)
    }
  return (
    <div>
        <input className='border border-black' type="text" onChange={handleChange}/>
        <button onClick={handleClick}>Tìm kiếm</button>
        {/* 
            1. lấy giá trị người dùng nhập
            2. tạo sự kiện khi nhấn vào button tìm kiếm
            3. bắn giá trị người dùng nhập lên URL
            3.1. sử dụng router.push
         */}
    </div>
  )
}
