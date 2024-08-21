import React from 'react'

export default function page(props:any) {
    const {params} = props;
  return (
    <div>Bạn đang xem blog với đường dẫn: /{params.slug[0]}/{params.slug[1]}/{params.slug[2]}</div>
  )
}
