
import './App.css';
import Content from './Component/Content';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </div>

  );
}

export default App;
