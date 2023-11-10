import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';
import ApiService from "./services/ApiService";
toast.configure();

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('userDataToken');
    if (token) {
      ApiService.getToken().then((res) => {
        if (res.data.status === 'token_error') {
          localStorage.removeItem('userDataToken');
          localStorage.removeItem('isLoggedIn');
          toast.success(res.data.message, { position: toast.POSITION.TOP_RIGHT });
          window.location.reload(false);
        }
      });
    }
  }
  render() {
    return (
      <div>
        <ToastContainer />
        <Routes />
      </div>
    );
  }
}

export default App;
