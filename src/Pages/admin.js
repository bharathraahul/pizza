import { BrowserRouter } from "react-router-dom";
import AddPizza from "../Components/Addpizza";
import Pizza from "../Components/Pizza";
import PizzaList from "../Components/PizzaList";

function Admin(){
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/admin" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              Pizza
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/admin/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/pizzalist"]} component={PizzaList} />
          <Route exact path="/addpizza" component={AddPizza} />
          {/* <Route path="/tutorials/:id" component={Pizza} /> */}
        </Switch>
      </div>
    </div>
  );


    
}
export default Admin;