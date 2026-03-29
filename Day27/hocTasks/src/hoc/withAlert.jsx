const withAlert = (WrappedComponent)=>(props)=>{

    const handleClick =()=>{
        alert("This is an hoc alert");
    }

    return(
        <WrappedComponent {...props} handleClick={handleClick} />
    )
}

export default withAlert;