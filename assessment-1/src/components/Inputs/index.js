import { forwardRef } from 'react'

export const FormInput = forwardRef((props, ref) => {
    return (
        <div className="form_input">
            <label>{props.label}</label>
            <input ref={ref} {...props} />
        </div>
    )
}) 