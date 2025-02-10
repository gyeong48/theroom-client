import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postLoginAsyncThunk } from '../../slices/loginSlice';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginFormData = new FormData();

        loginFormData.append("username", formData.username);
        loginFormData.append("password", formData.password);

        const action = await dispatch(postLoginAsyncThunk(loginFormData));

        if (action.payload.username && action.payload.roles === "ROLE_ADMIN") {
            navigate({ pathname: "/admin" })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold text-center mb-4">관리자 로그인</h2>
                <form className="flex flex-col space-y-3">
                    <input
                        type="text"
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="아이디"
                        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="비밀번호"
                        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-black text-white p-2 rounded hover:bg-gray-500 transition"
                        onClick={handleSubmit}
                    >
                        로그인
                    </button>
                </form>
            </div>
        </div>
    );
}
