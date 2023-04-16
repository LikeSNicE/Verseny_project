import React from "react";
import styles from "./ModalDeleteAccount.module.scss";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InputCustom from "../../Components/InputCustom/InputCustom";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import ModalCustom from "../../Components/Modal/Modal";


const ModalDeleteAccount = () => {
  return (
    <div>
      <ModalCustom
        icon={<DeleteOutlineOutlinedIcon />}
        iconStyles={styles.modalSectionTopLeftIcon}
        text="Удалить аккаунт"
        btnStyles={styles.modalSectionTopLeftIcon}
        btnLabel={<DeleteOutlineOutlinedIcon />}
        label={
          <div>
            <div className={styles.modalSectionMain}>
              <h1 className={styles.modalSectionMainTitle}>
                Для удаление вашего аккаунта,требуется подтверждение вашей
                почтой
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
          </div>
        }
      />
    </div>
  );
};

export default ModalDeleteAccount;
