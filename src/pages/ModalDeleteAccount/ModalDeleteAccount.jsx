import React from "react";
import styles from "./ModalDeleteAccount.module.scss";
import {
  Button,
  Modal,
  Typography,
  Box,
  IconButton,
  TextField,
  Tooltip,
  tooltipClasses,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import styled from "@emotion/styled";
import ModalTopSection from "../../Components/modalTopSection/modalTopSection";
import InputCustom from '../../Components/InputCustom/InputCustom';

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

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} placement="top" />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  return (
    <div>
      <BootstrapTooltip title="Удалить канал">
        <IconButton
          className={styles.modalSectionTopLeftIcon}
          onClick={handleOpen}
        >
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </BootstrapTooltip>
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
              {/* <TextField
                className={styles.modalSectionMainInputCode}
                label="Введите пин код"
                placeholder="Введите пин код"
              /> */}
              <InputCustom label='Введите пин код' type="search"/>

              <div className={styles.modalSectionMainWrapWrongCase}>
                <div>Вы не получили пин код?</div>
                <div>Повторить</div>
              </div>

              <div className={styles.modalSectionMainWrapButtons}>
                <div className={styles.modalSectionMainWrapButtonsLeft}>
                  <Button className={styles.modalSectionMainDeleteBtn}>
                    Удалить аккаунт
                  </Button>
                </div>
                <div className={styles.modalSectionMainWrapButtonsRight}>
                  <Button
                    className={styles.modalSectionMainCancelBtn}
                    variant="outlined"
                    onClick={handleClose}
                  >
                    Отмена
                  </Button>
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
