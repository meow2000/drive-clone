import React from 'react';
import '../CSS/FileItem.css';
import UserService from '../authHandler/user.service';
import fileDownload from 'js-file-download';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import '../CSS/ContextMenuComponent.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { injectStyle } from "react-toastify/dist/inject-style";
import PopupMsg from '../popup/PopupMsg';


// const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FileItem = ({ id, caption, timestamp, size, setFile }) => {
    if (typeof window !== "undefined") {
        injectStyle();
    }

    const formatDate = (timestamp) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(timestamp).toLocaleDateString(undefined, options)
    }
    const fileDate = formatDate(timestamp);
    const getReadableFileSizeString = (fileSizeInBytes) => {
        let i = -1;
        const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes > 1024);

        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    };
    const DownloadFile = () => {
        // event.preventDefault();
        console.log(caption);
        const formData = new FormData();
        formData.append('fileName', caption);

        UserService.downloadFile(caption).then(response => {
            console.log(response);
            fileDownload(response.data, caption);
        });
    }

    const deleteStar = () => {
        fetch('http://localhost:8080/user/unstar?oid=' + id, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('user')}`
            },
        }).then(() => {
            UserService.listStar().then(res => {
                setFile(res);
            })
        })
    }

    const addStar = () => {
        fetch('http://localhost:8080/user/star?oid=' + id, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('user')}`
            },
        }).then(res => {
            console.log(res);
        })
        // UserService.addStar(id).then(res => {
        //     console.log(res);
        // })
    }

    const DeleteFile = () => {
        // event.preventDefault();
        UserService.deleteFile(id).then(response => {
            console.log(response);
            UserService.getListFile().then(res => {
                toast.dark('Đã xóa thành công', {
                    toastId: 'delete-success',
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                });
                setFile(res);
            })
        });
    }

    const menuItems = [
        {
            iconCss: 'e-cm-icons e-cut',
            text: 'Tải xuống'
        },
        {
            text: 'Chia sẻ tệp'
        },
        {
            text: 'Xoá'
        },
        {
            text: 'Tải tệp lên'
        },
        {
            text: 'Thêm sao'
        },
        {
            text: 'Xóa sao'
        },
        {
            separator: true
        },
        {
            text: 'Ứng dụng khác'
        }
    ];
    const select = (args) => {
        if (args.item.text === 'Tải xuống') {
            DownloadFile();
        } else if (args.item.text === 'Xoá') {
            DeleteFile();
        } else if (args.item.text === 'Chia sẻ tệp') {
            handleOpenForm();
        } else if (args.item.text === 'Thêm sao') {
            addStar();
        } else if (args.item.text === 'Xóa sao') {
            deleteStar();
        }
    };

    const [open, setOpen] = React.useState(false);
    const handleOpenForm = () => {
        setOpen(true);
    }

    const handleCloseForm = () => {
        setOpen(false);
    }

    return (
        <div>
            <PopupMsg isOpen={open} handleCloseForm={handleCloseForm} oid={id} />
            <div id='fileItem' className='fileItem' >
                <a target="_blank" href download>
                    <div className="fileItem--left">
                        <InsertDriveFileIcon />
                        <p>{caption}</p>
                    </div>
                    <div className="fileItem--right">
                        <p>me</p>
                        <p>{fileDate}</p>
                        <p>{getReadableFileSizeString(size)}</p>
                    </div>
                </a>
                <ContextMenuComponent target="#fileItem" items={menuItems} select={select} />
            </div>
        </div>
    )
}

export default FileItem
