import React, { useState } from 'react'
import axios from 'axios';

function Register(props) {
    const [data, setdata] = useState({
        Name: '',
        Surname: '',
        Email: '',
        Password: ''

    });

    const apiUrl = "https://localhost:7047/swagger/index.html";
    
    const Registration=(e)=>{
        e.preventDefault();
        debugger;
        const data1 ={Name: data.Name, Surname: data.Surname, Email: data.Email, Password: data.Password};
        axios.post(apiUrl,data1)
            .then((result)=>{
                debugger;
                console.log(result.data);
                if(result.data.Status =="invalid")
                alert('invalid user');
                else
                props.history.push('/Dashboard')
            })
    }

    const onChange = (e) => {
        e.presist();
        debugger;
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <div class="container">
            <div class="row">
                <div class="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>
                    Add New User

                </div>
            </div>
            <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>
                <div class="card-body p-0">
                    <div class="col-lg-12">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">
                                    Create a New User
                                </h1>
                            </div>
                            <form onSubmit={Registration} class="user">
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="text" name="Name" onChange={onChange} value={data.Name} class="form-control" id="Name" placeholder="Name" />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" name="Surname" onChange={onChange} value={data.Surname} class="form-control" placeholder="Surname" id="Surname"></input>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="email" name="Email" onChange={onChange} value={data.Email} placeholder="E-mail" id="Email"></input>
                                    </div>
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" name="Password" onChange={onChange} value={data.Password} placeholder="Password" id="Passwoed"></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Register