import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import {Navbar} from "./components/layout/Navbar/Navbar";
import {Sidebar} from "./components/layout/Sidebar";

function App() {

    return (
        <Router>
            <div className="grid grid-cols-12 gap-2 h-screen fixed">
                <div className="col-span-3">
                    <Navbar/>
                </div>
                <div className="col-span-6 relative overflow-auto">
                    <Switch>
                        <Route path="/" exact>
                            <HomePage/>
                        </Route>
                        <Route path="/user/:user">
                            <UserProfilePage/>
                        </Route>
                    </Switch>
                </div>
                <div className="col-span-3">
                    <Sidebar/>
                </div>
            </div>
        </Router>
    )
}

export default App
