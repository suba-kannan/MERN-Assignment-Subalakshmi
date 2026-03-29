const withDisable = (WrappedComponent) =>(props) =>{

  return (
    <WrappedComponent {...props} isDisabled={true} />
  )
};

export default withDisable