import { Badge, Button, Dropdown } from 'antd';
import { BellOutlined, MailOutlined, UserAddOutlined, WarningOutlined, SyncOutlined } from "@ant-design/icons";
import "./Notify.css";

function Notify() {
  const items = [
    {
      label: <div className='notify_item'>
        <div className='notify_icon'>
          <MailOutlined />
        </div>
        <div className='notify_content'>
          <div className='notify_title'>
            You received a new message
          </div>
          <div className='notify_time'>
            8 min ago
          </div>
        </div>
      </div>,
      key: '0',
    },
    {
      label: <div className='notify_item'>
        <div className='notify_icon1'>
          <UserAddOutlined />
        </div>
        <div className='notify_content'>
          <div className='notify_title'>
            New user registered
          </div>
          <div className='notify_time'>
            7 hours ago
          </div>
        </div>
      </div>,
      key: '1',
    },
    {
      label: <div className='notify_item'>
        <div className='notify_icon2'>
          <WarningOutlined />
        </div>
        <div className='notify_content'>
          <div className='notify_title'>
            System Alert
          </div>
          <div className='notify_time'>
            8 hours ago
          </div>
        </div>
      </div>,
      key: '2',
    },
    {
      label: <div className='notify_item'>
        <div className='notify_icon3'>
          <SyncOutlined />
        </div>
        <div className='notify_content'>
          <div className='notify_title'>
            You have a new update
          </div>
          <div className='notify_time'>
            2 days ago
          </div>
        </div>
      </div>,
      key: '3',
    }
  ];
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
        dropdownRender={(menu) => (
          <>
            <div className="notify_dropdown">
              <div className="notify_header">
                <div className="notify_header-title" style={{ fontWeight: 600 }}>
                  <BellOutlined /> Notifycation
                </div>
                <Button type='link' style={{ fontSize: 12 }}>View All</Button>
              </div>
              <div className="notify_body">
                {menu}
              </div>
            </div>
          </>
        )}
      >
        <Badge dot>
          <Button type='text' icon={<BellOutlined />}></Button>
        </Badge>

      </Dropdown>
    </>
  )
}
export default Notify;