const withTitle = (WrappedComponent) =>(props) =>{

  return (
    <WrappedComponent {...props} title="HOC Modified Text" />
  )
};

export default withTitle