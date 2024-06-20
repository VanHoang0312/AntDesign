import { Button } from 'antd';
import { useState } from 'react';
import { SaveOutlined, OpenAIOutlined } from '@ant-design/icons'

function LearnButton() {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      const result = {
        code: 200,
        data: []
      }
      if (result && result.code === 200) {
        setLoading(false)
      }
    }, 3000);
  }
  return (
    <>
      <Button type='primary'>Content</Button>
      <Button type='primary' loading={loading} onClick={handleClick} disabled={loading} icon={<SaveOutlined />} style={{ marginLeft: 50 }}>Save</Button>
      <Button icon={<OpenAIOutlined spin={true} />} style={{ marginLeft: 50 }}>Open AI</Button>
    </>
  )
}
export default LearnButton;