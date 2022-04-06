import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserService from "../Services/UserService";

const ListUser = () => {

    const dispatch = useDispatch();

    const getuserData = () => {
        UserService.getUser()
        .then( (res) => {
            dispatch({type: "users", value:res.data});
        });
    }
    useEffect( () => {
        // UserService.getUser()
        // .then( (res) => {
        //     dispatch({type: "users", value:res.data});
        // });
        getuserData();
    },[]);

    const {users} = useSelector( (state) => state);
    console.log(users);

    const deleteUserHandler = (id) => {
        console.log(id);
        UserService.deleteUser(id)
        .then( (res) => {
            getuserData();
        });
    };

    return(
        <div className="container">
            <table className="table table-stiped">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map( (user) => (

                        <tr key={user._id}>
                        <td>{user.fullname}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                            <Link to={`/edit/${user._id}`} className="btn btn-warning m-1 ">
                                Edit
                            </Link>
                            <button type="button" className="btn btn-danger m-1" onClick={ () => deleteUserHandler(user._id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default ListUser;