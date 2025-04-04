import {useState} from 'react'
import "./Regfrm.css";

const Regfrm = () => {
    const [user,setuser]=useState({name:"Ram",age:25,gender:"male",isMarried:true ,country:"india" ,bio:"write something about yourself"});
    function changeHandler(e){
        const name=e.target.name;
        const value=e.target.type==="checkbox" ? e.target.checked : e.target.value;
        setuser({...user,[name]:value});
    }
  return (
    <>
    {/* <h1> {user.name} ,Age {user.age},{user.gender},{user.isMarried}</h1> */}
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>Is Married</td>
                <td>{user.isMarried ? "Married" : "Not Married"}</td>
            </tr>
            <tr>
                <td>country</td>
                <td>{user.country }</td>
            </tr>
            <tr>
                <td>Bio</td>
                <td>{user.bio }</td>
            </tr>
        </tbody>
    </table>
    <form>
        <input type="text" placeholder="Full Name" value={user.name} onChange={changeHandler} name="name"/>
        <input type="text" placeholder="Age" value={user.age} onChange={changeHandler} name="age"/>
        <div>
            <label htmlFor="male">
                <input type="radio" name="gender" id="male" checked={user.gender =="male"} value="male" onChange={changeHandler} />
                male
            </label>
            <label htmlFor="female">
                <input type="radio" name="gender" id="female" checked={user.gender =="female"} value="female" onChange={changeHandler} />
                female
            </label>
        </div>
        <label htmlFor="isMarried">
            <input type="checkbox" checked={user.isMarried} id="isMarried" onChange={changeHandler} name="isMarried"/>
            is Married
        </label>
        <div className="select-div">
            <label htmlFor="country"> Select Country</label>
            <select name="country" id ="country" value={user.country}  onChange={changeHandler}>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>



            </select>
        </div>
    <textarea name="bio" id="bio" cols="30" rows="5" value={user.bio} placeholder="write about you" onChange={changeHandler}> </textarea>
    </form>

    </>
  )
}

export default Regfrm