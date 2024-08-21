import React from 'react'
interface Params{
    products: string[];
}
interface Prop{
    params:Params;
}

export default function ProductDetail(props:Prop) {
    const {params} = props;
  return (
    <div>
        Trang chi tiết sản phẩm có id là: {params.products[0]}
    </div>
  )
}
