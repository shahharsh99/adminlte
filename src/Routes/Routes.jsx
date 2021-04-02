import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import Home from "../Components/Home";
import Register from "../Components/SignUp/Register";
import SignIn from "../Components/SignIn/SignIn";
import Roles from "../Components/Roles";
import Employees from "../Components/Employees"
import Rooms from "../Components/Room Database"
import Products from "../Components/Product Database"
import Classes from "../Components/Class"


import Services from "../Components/Services"
import StockComplaints from "../Components/Resolve Stock Complaints"
import Maintenance from "../Components/Maintenance/Maintenance"
import Inspection from "../Components/Maintenance/Inspection"
import DiscardedProducts from "../Components/Maintenance/Discarded Products"
import Invoices from "../Components/Invoices"
import VehicleType from "../Components/Vehicle Management/Vehicle Type"
import Vehicle from "../Components/Vehicle Management/Vehicle"
import License from "../Components/Vehicle Management/Driver License"
import ScheduleOrders from "../Components/Courier Management/Schedule Orders"
import ScheduleOutput from "../Components/Courier Management/Schedule Output"
import VisitorList from "../Components/Visitors"
import AccessControl from "../Components/Access Control"

const Routes = () => {
    return (
    <Router>
        <Switch>
            <Route exact name = "/" path="/" component={Home}/>
            {/* <Route exact name = "/post-list" path="/post-list" component={PostList}/> */}

            <Route exact name = "/dashboard" path="/dashboard" component={Dashboard}/>
            <Route exact name = "/access-control" path="/access-control" component={AccessControl}/>
            <Route exact name = "/visitor-list" path="/visitor-list" component={VisitorList}/>
            <Route exact name = "/schedule-output" path="/schedule-output" component={ScheduleOutput}/>
            <Route exact name = "/schedule-orders" path="/schedule-orders" component={ScheduleOrders}/>
            <Route exact name = "/license" path="/license" component={License}/>
            <Route exact name = "/vehicle" path="/vehicle" component={Vehicle}/>
            <Route exact name = "/vehicle-type" path="/vehicle-type" component={VehicleType}/>
            <Route exact name = "/invoices" path="/invoices" component={Invoices}/>
            <Route exact name = "/discarded-products" path="/discarded-products" component={DiscardedProducts}/>
            <Route exact name = "/inspection" path="/inspection" component={Inspection}/>
            <Route exact name = "/maintenance" path="/maintenance" component={Maintenance}/>
            <Route exact name = "/stock-complaints" path="/stock-complaints" component={StockComplaints}/>
            <Route exact name = "/services" path="/services" component={Services}/>
            <Route exact name = "/classes" path="/classes" component={Classes}/>
            <Route exact name = "/products" path="/products" component={Products}/>
            <Route exact name = "/rooms" path="/rooms" component={Rooms}/>
            <Route exact name = "/employees" path="/employees" component={Employees}/>
            <Route exact name = "/roles" path="/roles" component={Roles}/>
            <Route exact name = "/signup" path="/signup" component={Register}/>
            <Route exact name = "/signin" path="/signin" component={SignIn}/>
        </Switch>
    </Router>)}

export default Routes;