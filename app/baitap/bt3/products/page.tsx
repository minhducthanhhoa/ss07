"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function page() {
    const [nameValue,setNameValue] = useState<any>();
    const [categoryValue,setCategoryValue] = useState<any>();

    const handleChangeName = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setNameValue(event.target.value);
    }
    const handleChangeCategory = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setCategoryValue(event.target.value);
    }

    const router = useRouter();
    const handleClick = () =>{
        router.push(`/baitap/bt3/products?name=${nameValue}&category=${categoryValue}`);
    }
  return (
    <div>
        <input className='border border-black' type="text" placeholder='Tìm kiếm theo tên' onChange={handleChangeName}/> <br />
        <input className='border border-black' type="text" placeholder='Tìm kiếm theo danh mục' onChange={handleChangeCategory}/> <br />
        <button onClick={handleClick}>Tìm kiếm</button>
    </div>
  )
}
