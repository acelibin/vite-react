import React, { useState } from "react";
import { Button, Input } from 'antd';
import { STATUS } from '../config/status'
import './style.css';

const inputItem = (props) => {
  const { onSubmit } = props;

  const [item, setItem] = useState({});

  const handleChange = (event) => {
    setItem({
      id: Math.random().toFixed(5),
      content: event.target.value,
      status: STATUS.IS_CREATE
    });
  }

  const handleSubmit = () => {
    onSubmit(item);
    setItem({});
  }

  return (
    <div className="input-item">
      <Input placeholder="请输入待办事项" value={item.content} onPressEnter={handleSubmit} onChange={handleChange}></Input>
      <Button type="primary" onClick={handleSubmit}>按钮</Button>
    </div>
  )
}

export default inputItem