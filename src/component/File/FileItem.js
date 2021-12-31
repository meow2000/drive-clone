import React from 'react';
import '../CSS/FileItem.css';
import UserService from '../authHandler/user.service';
import fileDownload from 'js-file-download';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import '../CSS/ContextMenuComponent.css';
import DlgPopup from '../popup/RandomPopup';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FileItem = ({ id, caption, timestamp, size }) => {
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
            // debugger
            // const type = response.headers['content-type'];
            // const blob = new Blob([response.data], { type: type, encoding: 'UTF-8' });
            // const link = document.createElement('a');
            // link.href = window.URL.createObjectURL(blob);
            // link.download = caption;
            // link.click()
        });
    }

    const DeleteFile = () => {
        // event.preventDefault();
        UserService.deleteFile(id).then(response => {
            console.log(response);
            window.location.reload();
        });
    }

    const ShareFile = () => {
        this.DlgPopup.show();
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
            separator: true
        },
        {
            text: 'Ứng dụng khác'
        }
    ];

    const select = (args) => {
        if (args.item.text === 'Tải xuống') {
            alert("Tải rồi");
            DownloadFile();
        } else if (args.item.text === 'Xoá') {
            alert("Xóa đấy")
            DeleteFile();
        } else if (args.item.text === 'Chia sẻ tệp') {
            // DlgPopup.show();
        }
    };

    return (
        <div>
            {/* <DlgPopup ref={dlg}/> */}
            <div id='fileItem' className='fileItem' >
                <a target="_blank" download>
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
