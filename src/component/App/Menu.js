import useContextMenu from "./useContext";
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
const Menu = () => {
  const { anchorPoint, show } = useContextMenu();

  if (show) {
    return (
      <ul className="menu" style={{ top: anchorPoint.y, left: anchorPoint.x }}>
        <li className="menu__list-wrapper">
          <div className="menu__list">
            <CreateNewFolderOutlinedIcon size={20} className="menu__icon" />
            <div className="menu__text">Thư mục mới</div>
          </div>
        </li>
        <li className="menu__list-wrapper">
          <div className="menu__list">
          <UploadFileOutlinedIcon size={20} className="menu__icon" />
            <div className="menu__text">Tải tệp lên</div>
          </div>
        </li>
        <li className="menu__list-wrapper">
          <div className="menu__list">
            <DriveFolderUploadOutlinedIcon size={20} className="menu__icon" />
            <div className="menu__text">Tải thư mục lên</div>
          </div>
        </li>
        <hr />
        <li className="menu__list-wrapper" style={{marginTop: "5px"}}>
          <div className="menu__list">
            <div size={20} className="menu__icon" />
            <div className="menu__text" style={{margin: "24px"}}>Ứng dụng khác</div>
          </div>
        </li>
      </ul>
    );
  }
  return <></>;
};

export default Menu;