import { Link, Outlet } from "react-router-dom";
import { MainHeader } from "./shared";

const App = () => {
  return (
    <>
      <MainHeader text="React state management with Router" />
      <div className="wrapper">
        <aside className="aside">
          <Link to="/feedback" className="button nav-link bg-secondary">
            feedback
          </Link>
          <Link to="/anecdotes" className="button nav-link bg-secondary">
            anecdotes
          </Link>
        </aside>
        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default App;
