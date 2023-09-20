import './Card.css'

const Card = (props) => {
    // taking "className" from props
    const classes = 'card ' + props.className;

    // "props.children" is a reserved name, will always be the content between the opening and closing tags of your custom component
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;