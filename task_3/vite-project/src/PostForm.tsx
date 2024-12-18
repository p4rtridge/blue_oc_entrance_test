import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPost } from './states/posts';
import { AppDispatch } from './states/store';

interface PostFormData {
  title: string;
  body: string;
}

const PostForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<PostFormData>({ title: '', body: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.title.trim() && formData.body.trim()) {
      const newPost = {
        userId: 1,
        id: Date.now(),
        ...formData,
      };

      dispatch(addNewPost(newPost));
      setFormData({ title: '', body: '' });
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Add New Post</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="title" style={labelStyle}>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="body" style={labelStyle}>Body</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
            style={textareaStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Add Post</button>
      </form>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };
  
  const titleStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  };
  
  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };
  
  const formGroupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };
  
  const labelStyle: React.CSSProperties = {
    fontSize: '16px',
    color: '#333 !important',
    marginBottom: '8px',
  };
  
  const inputStyle: React.CSSProperties = {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '100%',
    boxSizing: 'border-box',
  };
  
  const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '100px',
  };
  
  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

export default PostForm;
