import VariableRender from './components/VariableRender'
import ObjRender from './components/ObjRender'
import ArrayRender from './components/ArrayRender'
import ArrayObj from './components/ArrayObj'
import NestedArray from './components/NestedArray'
import ConditionalRender from './components/ConditionalRender'
import TernaryOperator from './components/TernaryOperator'
import LogicalAnd from './components/LogicalAnd'
import OptionalChaining from './components/OptionalChaining'
import NullishCoalescing from './components/NullishCoalescing'

const App = () => {
  return (
    <>
      <VariableRender />
      <ObjRender />
      <ArrayRender />
      <ArrayObj />
      <NestedArray />
      <ConditionalRender />
      <TernaryOperator />
      <LogicalAnd />
      <OptionalChaining />
      <NullishCoalescing/>
    </>
  );
}

export default App