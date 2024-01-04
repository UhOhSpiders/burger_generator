import React from 'react'

type SettingsButtonProps = {
    text: string;
  
    onClick: () => void;
}

const SettingsButton = ({text, onClick}:SettingsButtonProps) => {
   
  return (
    <button onClick={onClick} className={`p-2 m-1 bg-red-400 rounded-lg`}>
       {text}
    </button>
  )
}

export default SettingsButton