"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const searchParam = useSearchParams();
    const userName = searchParam.get("name");
    console.log("name", userName);
    const userAddress = searchParam.get("address");
    console.log("address", userAddress);
    
    
  return (
    <div>Trang chi tiết user</div>
  )
}
