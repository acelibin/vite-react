import React from "react";
import { List } from "antd";
import { CheckSquareTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { STATUS } from '../config/status'
import './style.css';

const showItem = (props) => {
  const { items = [], onAction, filterStatus } = props;

  // 修改状态
  const handleAction = (type, item) => {
    switch (type) {
      case 'is-delete':
        // 删除
        onAction({
          ...item,
          status: STATUS.IS_DELETE
        });
        break;
      case 'is-done':
        // 勾选，如果已经是勾选状态再次点击恢复初始状态
        onAction({
          ...item,
          status: item.status === STATUS.IS_DONE ? STATUS.IS_CREATE : STATUS.IS_DONE
        });
        break;
      default:
        break;
    }
  }

  // 筛选出符合状态值的展示出来
  const showTodos = items.filter((it) => {
    return filterStatus === it.status;
  })

  return (
    <div className="show-item">
      <List
        dataSource={showTodos}
        renderItem={item => (
          <List.Item className={item.status === STATUS.IS_DONE ? 'list list-done' : 'list'}>
            {item.content}
            <div className="action">
              <CloseCircleTwoTone onClick={() => { handleAction('is-delete', item) }} />
              <CheckSquareTwoTone onClick={() => { handleAction('is-done', item) }} />
            </div>
          </List.Item>
        )}
      ></List>
    </div>
  )
}

export default showItem;