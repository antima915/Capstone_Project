import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserService from "../Services/UserService";

const AddUser = () => {

    const {fullname,useremail,userpassword,userphone,usergender} = useSelector( (state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
       
        UserService.postUser({
            fullname:fullname,
            email:useremail,
            password:userpassword,
            phone:userphone,
            gender:usergender
        }).then( (res) => {
            console.log(res);
            if(res.status === 200){
                navigate("/list");
            }
        })

    };
    return(
        <div className="container m-2">
            <h3>Create New User</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">    
                    <label htmlFor="fullname">Full Name</label>
                    <input 
                    type="text" 
                    name="fullname" 
                    id="fullname" 
                    className="form-control" 
                    placeholder="Enter Full Name"
                    onChange={(e) => dispatch({type:"fullname",value:e.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="form-control" 
                    placeholder="Enter Email"
                    onChange={(e) => dispatch({type:"useremail",value:e.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="form-control" 
                    placeholder="Enter password"
                    onChange={(e) => dispatch({type:"userpassword",value:e.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone No</label>
                    <input 
                    type="text" 
                    name="phone" 
                    id="phone" 
                    className="form-control" 
                    placeholder="Enter phone"
                    onChange={(e) => dispatch({type:"userphone",value:e.target.value})}
                    />
                </div>

                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input 
                        type="radio" 
                        name="gender" 
                        id="male" 
                        value="Male" 
                        className="form-check-input" 
                        checked={usergender === 'Male'}
                        onChange={(e) => dispatch({type:"usergender",value:e.target.value})}
                        />
                        <label htmlFor="male" className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                        type="radio" 
                        name="gender" 
                        id="female" 
                        value="Female" 
                        className="form-check-input"
                        checked={usergender === 'Female'}
                        onChange={(e) => dispatch({type:"usergender",value:e.target.value})}
                        />
                        <label htmlFor="female" className="form-check-label">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                        type="radio" 
                        name="gender" 
                        id="others"
                        value="Others" 
                        className="form-check-input"
                        checked={usergender === 'Others'}
                        onChange={(e) => dispatch({type:"usergender",value:e.target.value})}
                        />
                        <label htmlFor="others" className="form-check-label">Others</label>
                    </div>
                </div>
                <div className="form-group">
                    <input 
                    type="submit" 
                    value="Add User" 
                    className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}

export default AddUser;