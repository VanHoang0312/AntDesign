import { Carousel, Col, Row, Collapse, Image, QRCode, Rate } from "antd";
import "./LearGrid.css"
import Cartitem from "../Cartitem";
const { Panel } = Collapse;
function LearnGrid() {

  const List = [
    {
      id: 1,
      title: "Logo 1 là gì....",
      description: "Nội dung logo 1..."
    },
    {
      id: 2,
      title: "Logo 2 là gì....",
      description: "Nội dung logo 2..."
    },
    {
      id: 3,
      title: "Logo 3 là gì....",
      description: "Nội dung logo 3..."
    },
  ]

  return (
    <>
      {/* <Row gutter={[10, 10]}>
        <Col xxl={2} xl={2} lg={3} md={6} sm={12} xs={24}>
          <div className="box">
            Cột 1
          </div>
        </Col>
        <Col xxl={4} xl={4} lg={3} md={6} sm={12} xs={24}>
          <div className="box">
            Cột 2
          </div>
        </Col>
        <Col xxl={8} xl={8} lg={9} md={6} sm={12} xs={24} >
          <div className="box">
            Cột 3
          </div>
        </Col>
        <Col xxl={10} xl={10} lg={3} md={6} sm={12} xs={24}>
          <div className="box">
            Cột 4
          </div>
        </Col>
      </Row> */}

      <Row gutter={[20, 20]}>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <Cartitem title="Box 1" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <Cartitem title="Box 2" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <Cartitem title="Box 3" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <Cartitem title="Box 4" />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <Cartitem title="Box 5" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <Cartitem title="Box 6" style={{ height: "400px" }} />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <Cartitem title="Box 7" style={{ height: "400px" }} />
        </Col>
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <Cartitem title="Box 8" style={{ height: "400px" }} />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <Cartitem title="Box 9" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <Cartitem title="Box 10" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <Cartitem title="Box 11" style={{ height: "400px" }} />
        </Col>
      </Row>

      <Carousel autoplay>
        <div className="slider-item">1</div>
        <div className="slider-item">2</div>
        <div className="slider-item">3</div>
        <div className="slider-item">4</div>
      </Carousel>

      <Collapse defaultActiveKey="1" accordion={true}>
        {List.map(item => (
          <Panel header={item.title} key={item.id}>
            <p>{item.description}</p>
          </Panel>
        ))}
      </Collapse>

      <Image width={200} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/640px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg" />

      <QRCode
        errorLevel="L"
        value="https://www.facebook.com/profile.php?id=100053269818015"
        icon="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/640px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"
      />

      <Rate allowHalf onChange={(e)=> console.log(e)}/>
    </>
  )
}
export default LearnGrid;