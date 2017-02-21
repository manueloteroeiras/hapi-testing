const welcome = (props) =>{

    return (
        `<div>
            <h1>Welcome ${ props.name || '' }!</h1>
            <p>${ props.subtitle || '' }</p>
        </div>` 
        )
}

export default welcome;