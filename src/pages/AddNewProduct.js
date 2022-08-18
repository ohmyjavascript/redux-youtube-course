import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveProducts } from '../store/products/actions';

const AddNewProduct = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('Mobile');
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      title,
      description: desc,
      image,
      category,
      price,
    };
    setStatus('saving');
    await dispatch(saveProducts(product));
    setStatus('');
    navigate('/');
  };

  return (
    <>
      {status === 'saving' && (
        <div className="alert alert-dismissible alert-info">
          <strong>Info ! </strong> Saving form data..
        </div>
      )}
      <form onSubmit={handleSubmit} className="m-4">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"> Product </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"> Description </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Name"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1"> Image URL </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Name"
            onChange={(e) => setImage(e.target.value)}
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
    </>
  );
};

export default AddNewProduct;
