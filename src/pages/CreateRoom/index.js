import { message, Form, Input, Button, InputNumber, Row, Col, Select, Switch } from "antd";
import { createRoom } from "../../services/roomsService";
const { Option } = Select;
function CreateRoom() {

  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();


  const rule = [
    {
      required: true,
      message: 'Bắt buộc!',
    },
  ]

  const handleSubmit = async (e) => {
    const res = await createRoom(e);
    if(res){
      form.resetFields();
      messageApi.open({
        type: "success",
        content: "Tạo phòng thành công!",
        duration: 5,
      })
    }else{
      messageApi.open({
        type: "error",
        content: ":((((",
        duration:5,
      })
    }
  }

  return (
    <>
    {contextHolder}
      <h2>Thêm phòng mới</h2>

      <Form name="create-room" layout="vertical" onFinish={handleSubmit} form={form}>
        <Row gutter={[20, 20]}>
          <Col span={12} >
            <Form.Item
              label="Tên phòng:"
              name="name"
              rules={rule}
            >
              <Input style={{ width: '70%' }} />
            </Form.Item>
          </Col>

          <Col span={12} >
            <Form.Item
              label="Mô tả:"
              name="describe"
              rules={rule}
            >
              <Input.TextArea showCount maxLength={200} style={{ width: '70%' }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Số lượng giường:"
              name="quantityBed"
              rules={rule}
            >
              <InputNumber min={1} style={{ width: '50%' }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Số người tối đa:"
              name="quantityPeople"
              rules={rule}
            >
              <InputNumber min={1} style={{ width: '50%' }} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Tiện ích thêm:" name="utils" >
              <Select
                label="Tiện ích:"
                style={{
                  width: "55%",

                }}
                mode="multiple"
                allowClear
              >
                <Option value="Wifi">Wifi</Option>
                <Option value="Nóng lạnh">Nóng lạnh</Option>
                <Option value="Điều hòa">Điều hòa</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item valuePropName="checked" label="Trạng thái phòng:" name="status" >
              <Switch checkedChildren="Còn phòng"
              unCheckedChildren="Hết phòng" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item valuePropName="checked" label="Loại phòng:" name="typeRoom" >
              <Switch  checkedChildren="VIP"
              unCheckedChildren="Thường"/>
            </Form.Item>
          </Col>



        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm mới
          </Button>
        </Form.Item>

      </Form>
    </>
  )
}
export default CreateRoom;