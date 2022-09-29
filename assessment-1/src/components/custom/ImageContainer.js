import { ShadedButton } from "../Buttons";

export function ImageContainer(props) {
    return (
        <div className='img_container'>
            <img src={props.src} />
            <div className='floater'>
                <p className={props.description ? "subtitle" : ""}>{props.title}</p>
                {props.options && (
                    <div className='btn_group'>
                        {(props.options || []).map((k, i) => (
                            <ShadedButton key={i}>{k}</ShadedButton>
                        ))}
                    </div>
                )}
                {props.description && <p className={props.description ? "subtitle" : ""}>{props.description}</p>}
            </div>
        </div>
    )
}