import AppStyled from './styles/AppStyled';

// Class Component Streaming Lifecycle
import ClassComponent
  from './cases/react-lifecycle/streaming-class-component/ClassComponent';

// Functional Component Streaming Lifecycle
import FunctionalComponent
  from './cases/react-lifecycle/streaming-hooks/FunctionalComponent';

// Wrapper Propagation
import Wrapper from './cases/react-lifecycle/wrapper-propagation/Wrapper';

// Cleaning
import CleaningFuncionalComponent
  from './cases/react-lifecycle/cleaning/CleaningFuncionalComponent';

// Hook useReducer
import HookUseReducer from './cases/hooks/HookUseReducer';

// Hook useCallback
import HookUseCallback from './cases/hooks/HookUseCallback';

// Hook useMemo
import HookUseMemo from './cases/hooks/HookUseMemo';

// Async Await Type
import AsyncAwaitType
  from './cases/promises/AsyncAwaitType';

// Async Await Management
import AsyncAwaitManagement from './cases/promises/AsyncAwaitManagement';

// Tricks ClosureAsWrapper
import ClosureAsWrapper from './cases/tricks/ClosureAsWrapper';

// ClosureAsStateEmulator
import ClosureAsStateEmulator from './cases/tricks/ClosureAsStateSavingEmulator';

// Tricks ClosureAsScopedVariable
import ClosureAsScopedVariable
  from './cases/tricks/ClosureAsScopedVariable';

function App() {
  return (
    <AppStyled>
      <ClassComponent />
    </AppStyled>
  );
}

export default App;
