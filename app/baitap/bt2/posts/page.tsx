"use client"
import { useRouter } from 'next/navigation';
import React, {useState} from 'react'

export default function page() {
    const [valueInput,setValueInput] = useState<any>();

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value;
        setValueInput(value);
    }
    const router = useRouter();

    const handleClick = ()=>{
        router.push(`/baitap/bt2/posts?search=${valueInput}`);
    }

  return (
    <div>
        <input className='border border-black' type="text" onChange={handleChange}/>
        <button onClick={handleClick}>Tìm kiếm</button> <br />
        <p>Search Value: {valueInput}</p>
    </div>
  )
}
