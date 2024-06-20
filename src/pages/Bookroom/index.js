import { Input, Row, Col, Button, Checkbox, Space, DatePicker, Radio, Select } from 'antd';
import { useState } from 'react';
import { bookRoom } from '../../services/bookRoomService';
const { RangePicker } = DatePicker;


function Bookroom() {

  const [data, setData] = useState({
    time: "14 giờ"
  });

  const handleChangeInput = (e) => {
    const object = {
      ...data,
      [e.target.name]: e.target.value
    }
    setData(object);
  }

  const handleSubmit = async () => {
    const response = await bookRoom(data);
    //const response = undefined;
    if(response){
      alert("Chúc mừng bạn đã đặt phòng thành công!")
    }else{
      alert("Vui lòng thử lại :(")
    }
  }

  const handlechangeCheckbox = (e) => {

    const object = {
      ...data,
      services: e,
    }
    setData(object);
  }

  const handleChangeDate = (dates, dateStrings) => {
    const object = {
      ...data,
      date: dateStrings,
    }
    setData(object);
  }

  const handlechangeRadio = (e) => {
    const object = {
      ...data,
      [e.target.name]: e.target.value,
    }
    setData(object);
  }

  const optionsTime =[];

  for(let i=7; i<= 24; i++){
    optionsTime.push({
      value: `${i} giờ`,
      label: `${i} giờ`,
    })
  }

  const handleChangeSelect = (e) =>{
    const object = {
      ...data,
      time: e,
    }
    setData(object);
  }

  return (
    <>
      <h2>Đặt phòng</h2>

      <Row gutter={[20, 20]}>
        <Col span={24}>
          <p> Họ và tên:</p>
          <Input name='fullname' placeholder="Name" onChange={handleChangeInput} />
        </Col>

        <Col span={12}>
          <p> Số điện thoại:</p>
          <Input name='phone' placeholder="Phone number" onChange={handleChangeInput} />
        </Col>

        <Col span={12}>
          <p> Email:</p>
          <Input name='email' placeholder="Email" onChange={handleChangeInput} />
        </Col>

        <Col span={12}>
          <p>Chọn ngày:</p>
          <RangePicker placeholder={["Nhận phòng", "Trả phòng"]} format="DD-MM-YYYY" onChange={handleChangeDate} />
        </Col>

        <Col span={12}>
          <p> Giờ nhận phòng:</p>
          <Select style={{width: 200}} defaultValue={data.time} options={optionsTime} onChange={handleChangeSelect}>

          </Select>
        </Col>

        <Col span={12}>
          <p> Dịch vụ thêm:</p>
          <Checkbox.Group onChange={handlechangeCheckbox}>
            <Space direction='vertical'>
              <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
              <Checkbox value="Thuê oto 6 chỗ">Thuê oto 4 chỗ</Checkbox>
              <Checkbox value="Thuê du thuyền">Thuê du thuyền</Checkbox>
              <Checkbox value="Thuê quần áo">Thuê quần áo</Checkbox>
              <Checkbox value="Thuê phục vụ">Thuê phục vụ</Checkbox>
            </Space>
          </Checkbox.Group>
        </Col>

        <Col span={12}>
          <p> Quà tặng:</p>
          <Radio.Group name="gift" defaultValue="Sổ tay" onChange={handlechangeRadio}>
            <Space direction='vertical'>
              <Radio value="Sổ tay">Sổ tay</Radio>
              <Radio value="Gấu bông">Gấu bông</Radio>
              <Radio value="Túi xách">Túi xách</Radio>
              <Radio value="Áo phông">Áo phông</Radio>
            </Space>
          </Radio.Group>
        </Col>

        <Col span={24}>
          <Button type='primary' onClick={handleSubmit}>Đặt phòng</Button>
        </Col>
      </Row>


    </>
  )
}
export default Bookroom;