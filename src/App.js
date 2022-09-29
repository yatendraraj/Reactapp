import './App.css';
import { useMemo, useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
function App() {
  const [inputField, setInputField] = useState({
    email: '',
    password: '',
    selection: '',
  });
  const [showPassword, setShowPassword] = useState('password');
  console.log('🚀 ~ file: App.js ~ line 10 ~ App ~ inputField', inputField);

  const inputsHandler = e => {
    setInputField(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitButton = () => {
    console.log(inputField);
  };
  const disabled = useMemo(() => {
    if (inputField.selection === 'showPassword') {
      setShowPassword('');
    } else {
      setShowPassword('password');
    }
    return !inputField.email || !inputField.password;
  }, [inputField]);
  return (
    <div >
      <div style={{ height: '100vh', flexDirection: 'row', display: 'flex' }}>
        <div
          style={{
            flex: 1,
            backgroundColor: '#fad0c3',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>
            <p style={{ fontSize: 20 }}>Login</p>
            <div
              style={{
                borderColor: 'blueviolet',
                borderWidth: 2,
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 10,
              }}
            >
              <label>Email</label>
              <br />
              <input
                IconName
                type="email"
                name="email"
                onChange={inputsHandler}
                placeholder="Your email"
                value={inputField.email}
                required={true}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                }}
              />
            </div>

            <br />
            <div
              style={{
                borderColor: 'blueviolet',
                borderWidth: 2,
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 10,
                marginBottom: 20,
              }}
            >
              <label>Password</label>
              <br />
              <input
                type={showPassword}
                name="password"
                onChange={inputsHandler}
                placeholder="Password"
                value={inputField.password}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <input
                type="checkbox"
                onChange={inputsHandler}
                value="showPassword"
                name="selection"
              />{' '}
              Show Password{'      '}
              <input
                type="checkbox"
                onChange={inputsHandler}
                name="selection"
              />{' '}
              Keep me logged in
            </div>

            <br />

            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <button
                onClick={submitButton}
                disabled={disabled}
                style={{
                  textDecoration: 'none',
                  border: 'none',
                  background: 'transparent',
                  backgroundColor: 'gray',
                  width: '70%',
                  height: 40,
                  borderRadius:8,
                  color:'white'
                }}
              >
                Login
              </button>
              <p style={{ marginBottom: 20 }}>OR</p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItem: 'center',
                  justifyContent: 'center',
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: 8,
                  width: '70%',
                  marginBottom: 10,
                }}
              >
                <FaGoogle color="red" style={{ marginTop: 17 }} />

                <p style={{ marginLeft: 10 }}>login with google</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItem: 'center',
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: 8,
                  width: '70%',
                }}
              >
                <FaFacebook color="blue" style={{ marginTop: 17 }} />
                <p style={{ marginLeft: 10 }}>login with facebook</p>
              </div>
              <div style={{display:'flex'}}>

              <p>Dont have an account?</p>
              <p style={{marginLeft:10,color:'blue'}}>Sign Up</p>
              </div>
              <p style={{marginTop:-10,color:'blue'}}>Forgot Password?</p>
              <p style={{textDecoration:'underline'}}>Switch to personal account</p>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            backgroundColor: '#c1e1c5',
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;