// Reusable Button Component
function Button({

    // Function prop
    onClick,

    // Opening closing tag ka content
    children

}) {

    return (

        <button onClick={onClick}>

            {children}

        </button>

    );

}

export default Button;