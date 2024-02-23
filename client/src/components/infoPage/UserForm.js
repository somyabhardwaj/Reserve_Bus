import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserName, addEmail, addGender, addAge, addContact } from '../../redux/reducers/bookingDetailsSlice'; // Import your addUserName, addEmail, addGender, addAge actions

function UserForm() {
  const dispatch = useDispatch();
  
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    email: '',
    contact: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Dispatch actions based on input changes
    switch (name) {
      case 'name':
        dispatch(addUserName(value));
        break;
      case 'email':
        dispatch(addEmail(value));
        break;
      case 'gender':
        dispatch(addGender(value));
        break;
      case 'age':
        dispatch(addAge(value));
        break;
        case 'contact':
        dispatch(addContact(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className='col mt-2' style={{ width: "100%" }}>
      <form className=' p-4 d-flex flex-column border shadow rounded' style={{ width: "100%" }} >
        <h5 className='mb-3'>Enter Traveller's details</h5>
        <div className="mb-3 row">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder='Enter Your Name' name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="col-md-3">
            <select className="form-select" name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <div className="col-md-3">
            <input type="number" className="form-control" placeholder='Age' name="age" value={formData.age} onChange={handleChange} />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder='Example@gmail.com' name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder='Contact' name="contact" value={formData.contact} onChange={handleChange} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
