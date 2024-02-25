import React, { useRef, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory(); 

    const femail = useRef();
    const fpassword = useRef();

    const authenticateUser = async () => {
        try {
            const response = await axios.post('http://localhost:4500/api/doctor/login', { email, password });
            console.log(response.data); 
            history.push('/doctor');
        } catch (error) {
            console.error('Login failed:', error);
            toast.error('Login failed. Please check your credentials.');
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    };

    return (
        <div className="container">
            <div className="row mt-5">
            <div className="col-md-4 mt-5">
                <img src={imgSrc.doctor_login} className='img-fluid' style={{ width: '900px', height: '100%' }} alt="no image" />
            </div>
                <div className="col-md-8 mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h1 className='text-center'>Login</h1>
                        </div>
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={handleFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" ref={femail} id="email" className="form-control" placeholder="Enter Email Id" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass">Password</label>
                                    <input type="password" name="pass" ref={fpassword} id="pass" className="form-control" placeholder="Enter Your Clinic Name" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value="Login" className="btn btn-warning" />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <p className="text-end">
                                <strong>Don't have an account?</strong>
                                <NavLink to="/admin/register" className="btn btn-link">Register Here</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
