import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

import { login } from "../../services/authService";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        try {
            const result = await login(formData);

            // Save JWT token
            localStorage.setItem("token", result.token);

            // Save logged in user
            localStorage.setItem(
                "user",
                JSON.stringify({
                    fullName: result.fullName,
                    email: result.email,
                    role: result.role,
                })
            );

            // Redirect based on role
            if (result.role === "Admin") {
                navigate("/dashboard");
            } else {
                navigate("/home");
            }

        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Login failed."
            );
        }
    };

    return (
        <>
            <h3 className="text-center mb-4">
                Login
            </h3>

            {error && (
                <Alert variant="danger">
                    {error}
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>

                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </Form.Group>

                <Button
                    variant="dark"
                    type="submit"
                    className="w-100"
                >
                    Login
                </Button>

                <div className="text-center mt-3">
                    <span>Don't have an account? </span>

                    <Link to="/register">
                        Register
                    </Link>
                </div>

            </Form>
        </>
    );
}

export default Login;