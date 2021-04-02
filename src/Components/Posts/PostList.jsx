import React, {useEffect} from 'react'
// import useStyles from '../../assets/main';
// import Navigation from '../../Navigation'
// import { Card, Divider } from '@material-ui/core';
import { connect } from "react-redux";
// import DataTable from "react-data-table-component";
// import SortIcon from "@material-ui/icons/ArrowDownward";
// import { FloatingActionButtons } from '../../AddFloatingButton';
// import bootbox from 'bootbox/bootbox';
import {fetchPostsList} from '../../Actions/Posts/PostsListAction'


const getList = props => {
    props?.fetchPostsList()?.then(() => {
    const { postsListData, postsListError } = props;
    })}

function PostsList(props) {

    useEffect(() => {
        getList(props);
    },props);

    console.log(props.postsListData);
    // const classes = useStyles();
//     const { moviesListData, history } = props;

//         const columns = [
//         {
//             name: "ID",
//             selector: "_id",
//             sortable: true
//         },
//         {
//             name: "Title",
//             selector: "title",
//             sortable: true
//         },
//         {
//             name: "Daily Rental Rate",
//             selector: "dailyRentalRate",
//             sortable: true
//         },
//         {
//             name: "Actions",
//             cell: row => <div data-tag="allowRowEvents">
//                             <a style={{color : "#0099ff", fontSize : "15px"}} className="m-3 fa fa-pencil" onClick={() => handleEdit(row._id)}></a> 
//                             <a style={{color : "#ff0000", fontSize : "15px"}} className="m-3 fa fa-trash" onClick={() => deleteMovies(row._id)}></a>
//                         </div>,

//         },
//         ];

// function handleChange(){
//     console.log("handle Change")
// }
return (
        <div>
            <h1>Hi</h1>
            {/* <div className={classes.root}>
                <Navigation/>
                <main className={classes.content}>
                <div className={classes.toolbar} />
                <Divider/>
                    <Card>
                        <DataTable
                        title= "Movies"
                        actions = {<div className='m-2' onClick={() => history.push("add-movie")}>{FloatingActionButtons()}</div>}
                        striped
                        columns={columns}
                        data={moviesListData}
                        defaultSortField="title"
                        sortIcon={<SortIcon />}
                        sortable
                        pagination
                        highlightOnHover
                        responsive
                        // selectableRows
                        onSelectedRowsChange={handleChange}
                        />
                    </Card>
                </main>
            </div> */}
        </div>
    )
}


const mapStateToProps = (state) => {
return {
    postsListLoading: state.postsList.isLoading,
    postsListData: state.postsList?.data?.data || [],
    postsListError: state.postsList?.error || {},

};
};

const mapDispatchToProps = {
fetchPostsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);






