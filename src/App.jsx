import React, { useState } from 'react'
import InputItem from './components/input-item'
import ShowItem from './components/show-item';
import FilterItem from './components/filter-item';
import { STATUS } from './components/config/status';

function App () {
  // items 是所有的事项列表
  const [items, setItems] = useState([]);

  // 默认是待办列表，filterStatus是默认状态值
  const [filterStatus, setFilterStatus] = useState(STATUS.IS_CREATE);

  // 将输入的事项内容接收并处理
  const handleSubmit = (item) => {
    setItems([
      ...items,
      item
    ]);
  }

  // 筛选操作，将筛选组件状态获取到并赋值给状态
  const handleFilter = (value) => {
    setFilterStatus(value);
  }

  // 事项操作（完成/删除），修改状态后重新赋值
  const handleAction = (item) => {
    items.map((it) => {
      if (it.id === item.id) {
        return it.status = item.status;
      }
    });
    setItems([...items]);
  }

  return (
    <div className="App">
      <h2 className="title">待办事项</h2>
      {/* 输入框部分 */}
      <InputItem onSubmit={handleSubmit}></InputItem>
      {/* 筛选部分 */}
      <FilterItem filterStatus={filterStatus} onFilter={handleFilter}></FilterItem>
      {/* 展示部分 */}
      <ShowItem filterStatus={filterStatus} items={items} onAction={handleAction}></ShowItem>
    </div>
  )
}

export default App
