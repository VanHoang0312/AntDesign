import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Modal, Form, Input, Button, InputNumber, Row, Col, Select, Switch, notification, Spin } from "antd";
import {  updateRoom } from "../../services/roomsService";
const { Option } = Select;
function EditRoom(props) {

  const {record, onReload }= props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  }

  const [form] = Form.useForm();
  const [notiApi, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);

  const rule = [
    {
      required: true,
      message: 'Bắt buộc!',
    },
  ]

  const handleSubmit = async (e) => {
    setSpinning(true);
    const res = await updateRoom(record.id, e);
    setTimeout(() =>{
      if(res){
        notiApi.success({
          message: "Update thành công!",
          description: `Bạn đã cập nhật thành công ${record.name}`,
          
        })
        setIsModalOpen(false);
        onReload();
      }else{
        notiApi.error({
          message: "Update thất bại!",
          description: ":((((((",
          
        })
      }
      setSpinning(false);
    }, 3000)
   
  }


  return (
    <>
    {contextHolder}
      <Button style={{ marginLeft: 10 }} type="primary" icon={<EditOutlined />} onClick={showModal} >

      </Button>
      <Modal title="Sửa thông tin phòng!" open={isModalOpen} onCancel={handleCancel} footer={null}>
      <Spin spinning={spinning} tip="Đang cập nhật...">
      
        <Form name="create-room" layout="vertical" onFinish={handleSubmit} form={form} initialValues={record}>
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
                <Switch checkedChildren="VIP"
                  unCheckedChildren="Thường" />
              </Form.Item>
            </Col>



          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>

        </Form>
      </Spin>
      </Modal>
    </>
  )
}
export default EditRoom;