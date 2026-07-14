import { useEffect, useState } from "react";
import Member from "@/models/Member"; 
import useUserStore from "@/store/useUserStore";
import { Link, useNavigate } from "react-router-dom";
import { loginService } from "@/services/auth.service";
import "./Login.css"; 

export default function Login() {
  const [member, setMember] = useState(new Member('', '', ''));
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const currentUser = useUserStore((state) => state.user);
  const setCurrentUser = useUserStore((state) => state.setCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.id) navigate('/admin');
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!member.username || !member.password) return;

    setLoading(true);
    loginService(member)
      .then((response) => {
        setCurrentUser(response.data);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("아이디 또는 패스워드가 일치하지 않습니다.");
        setLoading(false); 
      });
  };

  return (
    <div className="login-full-screen">
      <div className={`login-card ${submitted ? 'was-validated' : ''}`}>
        <div className="login-header">
          <img src="/images/common/logo.svg" alt="LOGO" className="login-logo" 
               onError={(e) => e.target.style.display='none'} />
          <h2>Admin Login</h2>
        </div>

        <form onSubmit={handleLogin} noValidate>
          <div className="input-field">
            <label>아이디</label>
            <input 
              type="text" 
              name="username" 
              placeholder="username" 
              value={member.username}
              onChange={handleChange}
              required 
            />
            {submitted && !member.username && <span className="error-text">아이디를 입력해주세요</span>}
          </div>

          <div className="input-field">
            <label>비밀번호</label>
            <input 
              type="password" 
              name="password" 
              placeholder="password" 
              value={member.password}
              onChange={handleChange}
              required 
            />
          </div>
          {submitted && !member.password && <span className="error-text">비밀번호를 입력해주세요</span>}
          {errorMessage && <div className="custom-alert-error">{errorMessage}</div>}
          <button className="login-submit-btn" disabled={loading}>
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>

      </div>
    </div>
  );
}