import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddNewProduct = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Mobile');
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'products/ADD_PRODUCT',
      payload: {
        name,
        category,
        price,
      },
    });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="m-4">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1"> Product </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Select Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-control"
          id="exampleFormControlSelect1"
        >
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1"> Price </label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter Product Price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddNewProduct;