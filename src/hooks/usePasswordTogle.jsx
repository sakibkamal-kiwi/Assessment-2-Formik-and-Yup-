import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const usePasswordTogle = () => {
const [visible, setVisible]  = useState(false)

const Icon = (
     <FontAwesomeIcon icon={visible ? "eye" : "eye-slash"}
     onClick = { ()=> setVisible(visible => !visible)}

/>
)

const InputType = visible ? "text" : "password" ; 


return [InputType , Icon];
}

export default usePasswordTogle;