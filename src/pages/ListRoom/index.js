import { useEffect, useState } from "react";
import { getListRoom } from "../../services/roomsService";
import {UnorderedListOutlined, AppstoreOutlined} from "@ant-design/icons"
import RoomGrid from "./RoomGrid";
import { Button } from "antd";
import RoomTable from "./RoomTable";

function ListRoom() {

  const [rooms, setRooms] = useState([]);
  const [isGrid, setItGrid] = useState(true)

  const fetchApi = async () => {
    const res = await getListRoom();
    setRooms(res)
  }
  useEffect(() => {
    
    fetchApi();
  }, []);

  const handleReload = () =>{
    fetchApi();
  }
  
  return (
    <>
      <Button style={{ marginBottom: 20, marginRight:10 }} onClick={() => setItGrid(false)}>
        <UnorderedListOutlined />
      </Button>
      <Button style={{ marginBottom: 20 }} onClick={() => setItGrid(true)}>
        <AppstoreOutlined />
      </Button>
      {isGrid ? (<>
        <RoomGrid rooms={rooms}/>
      </>) : (<>
        <RoomTable rooms={rooms} onReload = {handleReload}/>
      </>)}


    </>
  )
}
export default ListRoom;