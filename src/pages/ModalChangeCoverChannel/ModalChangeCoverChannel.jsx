import React, { useRef, useState } from "react";
import ModalTopSection from "../../Components/modalTopSection/modalTopSection";
import { Button, Modal, Box } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import styles from "./ModalChangeCoverChannel.module.scss";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import "./ModalChange.scss";

// get upload box text to file name// 
class ImageUploader1 extends React.Component {
  constructor() {
    super();
    this.handleAddImage = this.handleAddImage.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleCancelUpload = this.handleCancelUpload.bind(this);
    this.state = {
      file: null,
      dragOver: false,
      errorNoficication: null,
      image: null,
    };
  }

  /**
      Drag and Drop Event Handlers
   **/
  handleDragEnter(e) {
    e.preventDefault();
  }
  handleDragOver(e) {
    e.preventDefault();
    if (!this.state.dragOver) {
      this.setState({
        dragOver: true,
      });
    }
  }
  handleDragLeave(e) {
    e.preventDefault();
    this.setState({
      dragOver: false,
    });
  }
  handleDrop(e) {
    e.preventDefault();
    let file = e.dataTransfer.files[0];

    // Validate file is of type Image
    let fileType = file.type.split("/")[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({
        image: reader.result,
      });
    };
    reader.readAsDataURL(file);
    if (fileType !== "image") {
      console.log("Not an image file");
      this.setState({
        file: null,
        errorNotification: "Not an image File",
        dragOver: false,
      });
      return setTimeout(() => {
        this.setState({
          errorNotification: null,
        });
      }, 3000);
    }
    // this.refs.image.files = e.dataTransfer.files;
    // document.getElementById("upload-image-input").fileList =
    //   e.dataTransfer.files[0];
    this.setState({
      file,
      dragOver: false,
    });
  }

  /**
      Handle Manually (File Input) Added Files
   **/
  handleAddImage(e) {
    e.preventDefault();
    let file = this.refs.image.files[0];

    // for image

    const reader = new FileReader();
    reader.onload = () => {
      this.setState({
        image: reader.result,
      });
    };
    reader.readAsDataURL(file);

    // Validate file is of type Image
    let fileType = this.refs.image.files[0].type.split("/")[0];
    if (fileType !== "image") {
      console.log("Not an image file");
      this.setState({
        file: null,
        errorNotification: "Not an image File",
        dragOverClass: "",
      });
      return setTimeout(() => {
        this.setState({
          errorNotification: null,
        });
      }, 3000);
    }

    this.setState({
      file,
    });
  }

  /**
      Handle Upload after Upload Button Clicked
   **/
  handleUploadImage(e) {
    e.preventDefault();
    if (this.refs.image.files[0]) {
      console.log("Uploading Image " + this.refs.image.files[0].name + "");
      /**
            Handle image Upload
         **/
    }
  }
  handleCancelUpload(e) {
    e.preventDefault();
    this.setState({
      file: null,
    });
  }

  render() {
    // Match drag over css to hover css
    let dragOverClass = this.state.dragOver
      ? `display-box drag-over`
      : `display-box`;

    // If file is set, chan
    let uploadText = this.state.file ? (
      <div className={styles.modalSectionMainDropZoneIcon}>
        {/* <div>
          <FileDownloadOutlinedIcon />
        </div>
        <h4>{"Имя файла: " + this.state.file.name}</h4> */}
        <img src={this.state.image} alt="" />
        <h4>{"Имя файла: " + this.state.file.name}</h4>
        <div className={styles.modalSectionMainDropZoneWrapBtns}>
          <button
            className="cancel-upload-button btn btn-warning"
            onClick={this.handleCancelUpload}
          >
            Отменить
          </button>
          <button
            className="upload-button btn btn-primary"
            onClick={this.handleUploadImage}
          >
            Загрузить
          </button>
        </div>
      </div>
    ) : (
      <div>
        <div className={styles.modalSectionMainDropZoneIcon}>
          <FileDownloadOutlinedIcon />
        </div>
        <h1 className={styles.modalSectionMainDropZoneTitle}>
          Перетащите изображение или нажмите кнопки для загрузки
        </h1>

        <h4 className={styles.modalSectionMainDropZoneSubtitle}>
          Советуем использовать файлы высокого качества в формате .jpg (размером
          меньше 5 мб)
        </h4>
      </div>
    );

    // Show Error message if file type is not an image
    let errorNotification = this.state.errorNotification ? (
      <div className="error-notification">
        <p>{this.state.errorNotification}</p>
      </div>
    ) : null;

    return (
      <div className="image-uploader-wrapper">
        <div className={dragOverClass}>
          <div className="icon-text-box">
            <div className="upload-text">{uploadText}</div>
            {errorNotification}
          </div>
          <div>
            <input
              type="file"
              ref="image"
              id="upload-image-input"
              className="upload-image-input"
              accept="image/*"
              onDrop={this.handleDrop}
              onDragEnter={this.handleDragEnter}
              onDragOver={this.handleDragOver}
              onDragLeave={this.handleDragLeave}
              onChange={this.handleAddImage}
            />
          </div>
        </div>
      </div>
    );
  }
}

const ModalChangeCoverChannel = () => {
  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "#fff",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // drag and drop

  const [files, setFiles] = useState(null);

  // const inputRef = useRef();

  const handleDrapOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.files);
    // setFiles(event.dataTransfer.files)
  };

  // if(files) {
  //   <div>
  //     {files.name}
  //   </div>
  // }

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <ModalTopSection
            icon={<EditOutlinedIcon />}
            iconStyles={styles.modalSectionTopIcon}
            text="Изменение обложки"
            onClick={handleClose}
            iconCross={<CloseOutlinedIcon />}
          />
          <div className={styles.modalSectionMain}>
            <ImageUploader />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalChangeCoverChannel;
