'use client'

import { useState } from "react"

const Editbutton = () => {
    const [toggleEdit, settoggleEdit] = useState(false)
  return (
    <button onClick={() => settoggleEdit(!toggleEdit)}>✏️</button>
  )
}

export default Editbutton