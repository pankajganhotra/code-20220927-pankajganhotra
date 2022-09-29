import { forwardRef, useEffect, useRef } from 'react';

export function MenuButton({ state, setState }) {
    const menuIconRef = useRef(null)

    useEffect(() => {
        if (state) {
            menuIconRef.current.classList.add("open")
        } else {
            menuIconRef.current.classList.remove("open")
        }
    }, [state])

    return (
        <div onClick={() => setState(b => !b)} ref={menuIconRef} className="menu_icon">
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export const ShadedButton = forwardRef(({ children, search, ...props }, ref) => {
    return <div className={`form_input shaded_button ${search && "search"}`}>
        <button ref={ref} {...props}>{children}</button>
    </div>
})        