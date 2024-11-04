import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import TaskList from './taskList';

const App = () => {
  return (
    <Provider store={store}>
      <TaskList />
    </Provider>
  );
};

export default App;
