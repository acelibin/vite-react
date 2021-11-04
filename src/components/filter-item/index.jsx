import React from "react";
import { Radio } from "antd";
import { STATUS } from '../config/status'
import './style.css';

const filterItem = (props) => {
  const { filterStatus, onFilter } = props;

  const options = [
    { label: '待完成', value: STATUS.IS_CREATE },
    { label: '已完成', value: STATUS.IS_DONE },
    { label: '已删除', value: STATUS.IS_DELETE }
  ]

  const handleChange = (event) => {
    onFilter(event.target.value);
  }

  return (
    <div className="filter-item">
      <Radio.Group options={options} onChange={handleChange} value={filterStatus} optionType="button" buttonStyle="solid" />
    </div>
  )
}

export default filterItem;