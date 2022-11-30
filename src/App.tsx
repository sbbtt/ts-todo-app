import { RecoilRoot } from 'recoil';
import { createGlobalStyle } from 'styled-components';
import TodoList from './components/TodoList';

function App() {
  const GlobalStyle = createGlobalStyle`
    
  `;
  return (
    <>
    <GlobalStyle />
    <RecoilRoot>

    <TodoList />
    </RecoilRoot>
    </>
  );
}

export default App;
