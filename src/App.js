import Counter from "./PracticeComponents/CustomHooks/Counter";
import DebouncedSearch from "./PracticeComponents/Debouncing/DebouncedSearch";
import UsersList from "./PracticeComponents/FetchAPIandRender/UsersList";
import LazyLoadingComponent from "./PracticeComponents/LazyLoading/LazyLoadingComponent";
import ServerSidePaginatedUsers from "./PracticeComponents/Pagination/ServerSidePaginatedUsers";
import TodoList from "./PracticeComponents/ToDoListCRUD/TodoList";

function App() {

  return <div>
    {/* <UsersList/> */}
    {/* <ServerSidePaginatedUsers /> */}
    {/* <TodoList /> */}
    {/* <LazyLoadingComponent / > */}
    {/* <Counter /> */}
    <DebouncedSearch />
  </div>
}

export default App;