import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons"
import { deleteRoom } from "../../services/roomsService";

function DeleteRoom(props) {
  const { record, onReload } = props;
  const handleDelete = async () => {
    const res = await deleteRoom(record.id);
    if(res){
      onReload();
      alert("Xóa thành công!")
    }else{
      alert("Xóa k thành công:(")
    }
    
  }
  return (
    <>
      <Popconfirm title="Bạn chắc chắn muốn xóa?" onConfirm={handleDelete}>
        <Button danger icon={<DeleteOutlined />} >

        </Button>

      </Popconfirm>

    </>
  )
}
export default DeleteRoom;