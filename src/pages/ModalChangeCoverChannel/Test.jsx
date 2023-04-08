// import React,{useState} from 'react';

// const ImageUploader = () => {
//   const [file, setFile] = useState(null);
//   const [dragOver, setDragOver] = useState(false);
//   const [errorNotification, setErrorNotification] = useState(null);

//   //Drag and Drop Event Handlers

//   const handleDragEnter = (e) => {
//     e.preventDefault();
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     if (!dragOver) {
//       setDragOver(true);
//     }
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     setDragOver(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     let file = e.dataTransfer.files[0];

//     // Validate file is of type Image
//     let fileType = file.type.split("/")[0];

//     if (fileType !== "image") {
//       console.log("Not an image file");
//       setFile(null);
//       setErrorNotification("Не файл изображения");
//       setDragOver(false);
//       return setTimeout(() => {
//         setErrorNotification(null);
//       }, 3000);
//     }
//     document.getElementById("upload-image-input").fileList =
//       e.dataTransfer.files[0];
//     setFile(file);
//   };

//   //  Handle Manually (File Input) Added Files

//   const handleAddImage = (e) => {
//     e.preventDefault();
//     let file = e.dataTransfer.files;
//     // Validate file is of type Image
//     let fileType = e.dataTransfer.files[0].type.split("/")[0];
//     if (fileType !== "image") {
//       console.log("Not an image file");
//       setFile(null);
//       setErrorNotification("Not an image file");
//       setDragOver("");
//     }
//     return setTimeout(() => {
//       setErrorNotification(null);
//     }, 3000);
//   };
//   setFile(file);

//   const handleUplodaImage = (e) => {
//     e.preventDefault();
//     if (e.dataTransfer.files[0]) {
//       console.log("Uploading Image " + e.dataTransfer.files[0].name + "");
//     }
//   };

//   const handleCancelUpload = (e) => {
//     e.preventDefault();
//     setFile(null);
//   };

//    let dragOverClass = dragOver
//          ? `display-box drag-over`
//          : `display-box`;

//       // If file is set, change upload box text to file name
//       let uploadText = file
//          ? <div>
//               <h4>{file.name}</h4>
//               <button
//                  className="cancel-upload-button btn btn-warning"
//                  onClick={handleCancelUpload}
//               >
//                  Cancel
//              </button>
//               <button
//                  className="upload-button btn btn-primary"
//                  onClick={this.handleUploadImage}
//               >
//                  Upload
//               </button>
//            </div>
//          : <div>
//               <h4>Choose Files to Upload</h4>
//            </div>;

//       // Show Error message if file type is not an image
//       let errorNotificationState = errorNotification
//          ? <div className="error-notification">
//               <p>{errorNotification}</p>
//            </div>
//          : null;

render() {
    // Match drag over css to hover css
    let dragOverClass = this.state.dragOver
      ? styles.displayBox + " " + styles.dragOver
      : styles.displayBox;

    // If file is set, change upload box text to file name
    let uploadText = this.state.file ? (
      <div className={styles.modalSectionMainDropZoneIcon}>
        <div>
          <FileDownloadOutlinedIcon />
        </div>
        <h4>{"Имя файла: " + this.state.file.name}</h4>
        <div className={styles.modalSectionMainDropZoneWrapBtns}>
          <Button
            variant="contained"
            className={
              styles.uploadButton + " " + styles.btn + " " + styles.btnPrimary
            }
            onClick={this.handleUploadImage}
          >
            Загрузить
          </Button>
          <Button
            variant="contained"
            className={
              styles.cancelUploadButton +
              " " +
              styles.btn +
              " " +
              styles.btnWarning
            }
            onClick={this.handleCancelUpload}
          >
            Отменить
          </Button>
        </div>
      </div>
    ) : (
      <div>
        <div className={styles.modalSectionMainDropZoneIcon}>
          <FileDownloadOutlinedIcon />
        </div>
        <h1 className={styles.modalSectionMainDropZoneTitle}>
          Переташите изображение или нажмите кнопки для загрузки
        </h1>

        <h4 className={styles.modalSectionMainDropZoneSubtitle}>
          Советуем использовать файлы высокого качества в формате .jpg (размером
          меньше 5 мб)
        </h4>
      </div>
    );

    // Show Error message if file type is not an image
    let errorNotification = this.state.errorNotification ? (
      <div className={styles.errorNoticication}>
        <p>{this.state.errorNotification}</p>
      </div>
    ) : null;

    return (
      <div className={styles.imageUploaderWrapper}>
        <div className={dragOverClass}>
          <div className={styles.iconTextBox}>
            <div className={styles.uploadText}>{uploadText}</div>
            {errorNotification}
          </div>
          <div>
            <input
              type="file"
              ref="image"
              id={styles.uploadImageInput}
              className={styles.uploadImageInput}
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