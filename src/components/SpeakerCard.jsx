import React from 'react'

function SpeakerCard(props) {
  return (
    <div id={`${props.id}`} className='mb-6'>
                        <div className="font-bold mb-1">{props.role}</div>
        <div className='flex flex-col md:flex-row md:gap-2 gap-4 p-4 items-center'>
            {props.photo&&<div className='w-[10rem] h-[10rem]'><img className='w-[10rem] h-[10rem] object-cover' src={props.photo} /></div>}
            <div className='flex flex-col gap-2  md:p-2'>
<div className='font-bold'>{" "}<span className=''>{props.name}</span></div>
<div className='font-bold'>{" "}<span className=''>{props.title}</span></div>
<div className='font-bold'>Institution:{" "}<span className='font-normal'>{props.institution}</span></div>

            </div>
        </div>
    </div>
  )
}

export default SpeakerCard