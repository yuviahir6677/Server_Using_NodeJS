import React,{useEffect,useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import Register from './RegisterForm';

export default function Table() {

    const navigate = useNavigate();
    const [tabledata, settabledata] = useState([]);
    useEffect(() => {
        getdata();
    }, []);

    const getdata=()=>{
        const options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          };
          fetch('http://localhost:8000/registration', options)
            .then(response => response.json())
            .then((response) => {
                settabledata(response)
                
            })
            .catch((err) => {
              alert("Server Down")
              console.error(err)
    
            });
    }

    const Randertabe=(props)=>{
        var i=0;
        return props.tabledata.map((element)=>{
            i++;
            return (
                <tr className='text-center'>
                    <td>{i}</td>
                    <td>{element.fname}</td>
                    <td>{element.lname}</td>
                    <td>{element.email}</td>
                    <td>{element.mob}</td>
                    <td>{element.website}</td>
                    <td>{element.pass}</td>
                    <td align="center ">
                        <a class="btn btn-default" onClick={()=>editdata(element._id)}><em class="fa fa-pencil"></em></a>
                        <a class="btn btn-danger" onClick={()=>deletedata(element._id)}><em class="fa fa-trash"></em></a>
                    </td>
                </tr>
            )
        })
    }

    const editdata=(id)=>{
        navigate("/register",{state:{ id:id}})
    }

    const deletedata=(id)=>{
        let isconfirm= window.confirm("Do You Want To Delete Data ?");
        if(isconfirm){
            const options = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
              };
              fetch(`http://localhost:8000/registration?id=${id}`, options)
                .then(response => response.json())
                .then((response) => {

                    if(response.status==1){
                        getdata()
                        alert(response.message);
                    }else{
                        alert(response.message);
                    }
                })
                .catch((err) => {
                  alert("Server Down")
                  console.error(err)
        
                });
        }
        
    }
  return (
    <>
       <div class="row">
            <div class="col-md-10 col-md-offset-1 mt-5">

                <div class="panel panel-default panel-table">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col col-xs-6">
                                <h3 class="panel-title">DATA TABLE</h3>
                            </div>
                            <div class="col col-xs-6 text-right">
                            <Link to="/register">
                                <button type="button" class="btn btn-sm btn-primary btn-create" >NEW ADD</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <table class="table table-striped table-bordered table-list">
                            <thead>
                                <tr>
                                    <th class="hidden-xs">ID</th>
                                    <th>FristName</th>
                                    <th>LastName</th>
                                    <th>Email</th>
                                    <th>Contect</th>
                                    <th>Website</th>
                                    <th>Password</th>
                                    <th align='center'><em class="fa fa-cog"></em></th>
                                </tr>
                            </thead>
                            <tbody> 
                            <Randertabe tabledata={tabledata} />
                            </tbody>
                        </table>

                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col col-xs-4">Page 1 of 5
                            </div>
                            <div class="col col-xs-8">
                                <ul class="pagination hidden-xs pull-right">
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                </ul>
                                <ul class="pagination visible-xs pull-right">
                                    <li><a href="#">«</a></li>
                                    <li><a href="#">»</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </>
  )
}
