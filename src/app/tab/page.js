import React from 'react'
import Link from 'next/link'
function NewTab() {
  return (
    <div>
    <iframe src="https://www.turnintern.com" width="90%" height="500px" style={{marginLeft :"5%"}}></iframe>

    <Link href="/">
    <button style={{width:"50%" , marginLeft:"25%"}}> go back</button>
    </Link>
    </div>
  )
}

export default NewTab