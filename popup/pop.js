import React from 'react'

function Pop({hide}) {
  return (
    <>
    <div>
    <iframe src="https://www.kohlercatalog.co.in/projectlookbook/page/1" width="90%" height="500px" style={{marginLeft :"5%"}}></iframe>
    </div>

    <button onClick={()=>{hide(false)}} style={{width :"50%" , marginLeft: "25%"
    }} > Hide popUp </button>
    </>
  )
}

export default Pop