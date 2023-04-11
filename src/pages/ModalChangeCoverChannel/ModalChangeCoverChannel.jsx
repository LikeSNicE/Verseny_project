import React from "react";
import ModalTopSection from "../../Components/modalTopSection/modalTopSection";
import { Modal, Box } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import styles from "./ModalChangeCoverChannel.module.scss";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
// import { ButtonIconText } from "../../Components/ButtonIconText/ButtonIconText";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";


const ModalChangeCoverChannel = ({className}) => {
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

  return (
    <div className={className}>
      {/* <ButtonIconText
        onClick={handleOpen}
        startIcon={<EditOutlinedIcon />}
        children={"Изменить обложку"}
        isFile={false}
        className={styles.editBtn}
      /> */}
      <ButtonCustom
        onClick={handleOpen}
        startIcon={<EditOutlinedIcon />}
        children={"Изменить обложку"}
        className={styles.editBtn}
      />
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
            {/*drag and drop*/}
            <ImageUploader />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalChangeCoverChannel;
