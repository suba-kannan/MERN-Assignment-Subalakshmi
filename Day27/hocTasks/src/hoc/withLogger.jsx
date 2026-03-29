const withLogger = (WrappedComponent) =>(props) =>{

    const handleChange =(e)=>{
      console.log("Input:",e.target.value)
    }

  return (
    <WrappedComponent {...props} handleChange={handleChange} />
  )
};

export default withLogger