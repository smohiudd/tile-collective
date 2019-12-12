import React from "react"

function RangeSelectThree(props){

  return(
    <div className="mb24">
      <div className='range range--s'>
        <input
          type="range"
          onChange={props.handle}
          min={props.min}
          max={props.max}
          defaultValue={props.default}
          id = {props.id}
        />
      </div>
      <div className='flex-parent flex-parent--space-between-main'>
        <div className='flex-child'>{props.left}</div>
        <div className='flex-child'>{props.middle}</div>
        <div className='flex-child'>{props.right}</div>
      </div>
    </div>

  )

}

export default RangeSelectThree;
