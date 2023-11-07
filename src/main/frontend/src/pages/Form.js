import React, { useState } from 'react';
import "./Form.css";
import axios from 'axios';

function Form() {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { name: '', email: '' };

        if (!formData.name) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!formData.email.includes('@')) {
            newErrors.email = 'Email should contain the "@" symbol';
            valid = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                 const response = await axios.post('http://localhost:8080/api/user-details', formData);

                 console.log("---response--",response)

                if (response && response.status == 200) {
                setFormData({ name: '', email: '' })
                setErrors({ name: '', email: '' })
                    const serverErrorPageUrl = 'http://localhost:8080/success';
                    window.location.href = serverErrorPageUrl
                }
                else if (response && response.status == 500) {
                setFormData({ name: '', email: '' })
                 setErrors({ name: '', email: '' })
                    const successPageUrl = 'http://localhost:8080/servererror';
                    window.location.href = successPageUrl
                } else {
                setFormData({ name: '', email: '' })
                setErrors({ name: '', email: '' })
                }
                alert("Form submitted successfully.......")

            } catch (error) {
                console.error('Error while submitting the form:', error);
            }
        }
    };

    return (
        <div>
            <h2>Demo App Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <span className="error">{errors.name}</span>
                </div>
                <div>
                    <div>
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="error email-error">{errors.email}</span>}
                    </div>


                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
