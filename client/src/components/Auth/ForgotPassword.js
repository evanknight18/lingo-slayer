import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the email to the server to initiate the password reset process.
    // For simplicity, we'll just log the email to the console.
    console.log('Password reset requested for:', email);
    // You can then implement the logic for sending a reset password link to the provided email.
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Request Reset</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
