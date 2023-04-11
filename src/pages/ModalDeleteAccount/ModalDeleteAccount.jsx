import React from "react";
import styles from "./ModalDeleteAccount.module.scss";
import {
  Modal,
  Box,
  IconButton,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ModalTopSection from "../../Components/modalTopSection/modalTopSection";
import InputCustom from "../../Components/InputCustom/InputCustom";
import TooltipCustom from "../../Components/ToolTipCustom/ToolTipCustom";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";

const ModalDeleteAccount = () => {
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
    <div>
      <TooltipCustom placement="top" titleText="Удалить Текст">
        <IconButton
          className={styles.modalSectionTopLeftIcon}
          onClick={handleOpen}
        >
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </TooltipCustom>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <ModalTopSection
            icon={<DeleteOutlineOutlinedIcon />}
            iconStyles={styles.modalSectionTopLeftIcon}
            text="Удаление аккаунта"
            onClick={handleClose}
            iconCross={<CloseOutlinedIcon />}
          />
          <div className={styles.modalSectionMain}>
            <h1 className={styles.modalSectionMainTitle}>
              Для удаление вашего аккаунта,требуется подтверждение вашей почтой
            </h1>
            <h2 className={styles.modalSectionMainSubtitle}>
              Мы отправили на вашу почту пин код с 6 значным кодом
            </h2>
            <div className={styles.modalSectionMainWrapEmail}>
              <span>Ваша почта:</span>
              <span>{<EmailOutlinedIcon />}</span>
              bekkozha.ayan@mail.ru
            </div>

            <h4 className={styles.modalSectionMainPinCode}>Пин код</h4>

            <form className={styles.modalSectionForm}>
              <InputCustom label="Введите пин код" type="search" />

              <div className={styles.modalSectionMainWrapWrongCase}>
                <div>Вы не получили пин код?</div>
                <div>Повторить</div>
              </div>

              <div className={styles.modalSectionMainWrapButtons}>
                <div className={styles.modalSectionMainWrapButtonsLeft}>
                  <ButtonCustom className={styles.modalSectionMainDeleteBtn}>
                    Удалить аккаунт
                  </ButtonCustom>
                </div>
                <div className={styles.modalSectionMainWrapButtonsRight}>
                  <ButtonCustom className={styles.modalSectionMainCancelBtn}>
                    Отмена
                  </ButtonCustom>
                </div>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalDeleteAccount;
