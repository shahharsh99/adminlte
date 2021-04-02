
import React, {useEffect} from 'react'
import Common from '../Common/Common'
// import { fetchMoviesList } from "../actions/moviesListAction";
// import { fetchDeleteMovies } from "../actions/deleteMoviesAction";
import { connect } from "react-redux";
import {fetchRolesList} from "../../Actions/Room Database/RolesListAction"
import DataTable from "react-data-table-component";
import { Link } from 'react-router-dom';


const getList = props => {
    props?.fetchRolesList()?.then(() => {
    const { rolesListData, moviesListError } = props;
    })}

function RolesList(props) {

    useEffect(() => {
        getList(props);
    },props);

    const { rolesListData, history } = props;
console.log(rolesListData);
        const columns = [
        {
            name: "ID",
            selector: "id",
            sortable: true
        },
        {
            name: "Room Name",
            selector: "room_name",
            sortable: true
        },
        {
            name: "Company Id",
            selector: "company_id",
            sortable: true
        },
        ];

return (
    <Common>
        <div className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                <h1 className="m-0">Rooms</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Rooms</li>
                </ol>
                </div>{/* /.col */}
            </div>{/* /.row */}
            </div>{/* /.container-fluid */}
        </div>
            {/* <div className={classes.root}>
                <Navigation/>
                <main className={classes.content}>
                <div className={classes.toolbar} />
                <Divider/> */}
                    {/* <Card> */}
                        <DataTable
                        title= {props.rolesListData.response_message}
                        // actions = {<div className='m-2' onClick={() => history.push("add-movie")}>{FloatingActionButtons()}</div>}
                        striped
                        columns={columns}
                        data={props.rolesListData.response_data?.rooms}
                        defaultSortField="room_name"
                        // sortIcon={<SortIcon />}
                        sortable
                        pagination
                        highlightOnHover
                        responsive
                        // selectableRows
                        // onSelectedRowsChange={handleChange}
                        />
                    {/* </Card>
                </main>
            </div> */}
    </Common>

    )
}


const mapStateToProps = (state) => {
return {
    rolesListLoading: state.rolesList.isLoading,
    rolesListData: state.rolesList?.data|| [],
    rolesListError: state.rolesList?.error || {},
};
};

const mapDispatchToProps = {
fetchRolesList,
};

export default connect(mapStateToProps, mapDispatchToProps)(RolesList);