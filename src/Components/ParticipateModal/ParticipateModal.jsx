import React, { useState } from "react";
import styles from './ParticipateModal.module.scss';
import ModalCustom from "../Modal/Modal";
import * as Muicon from "@mui/icons-material";
import InputFile from "../InputFile/InputFile";
import FileProgress from "../InputFile/FileProgress";
import { useForm } from "react-hook-form";
import ButtonCustom from "../ButtonCustom/ButtonCustom";

const ModalParticipate = () => {
  const [isOpen,setOpen] = useState();
  const  AddReactionIcon = Muicon['AddReactionOutlined']
  const [progress,setProgress] = useState(0);
  const [file,setFile] = useState([])
  const { setValue, watch, handleSubmit } = useForm();

  const getFile = (fileData) => {
    console.log(fileData);
    setFile(fileData);
    setValue("files", fileData);
    
  }

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalCustom
        open={isOpen}
        setIsOpen={setOpen}
        btnStartIcon={<AddReactionIcon />}
        btnStyles={styles.participateBtn}
        btnLabel="Участие в конкурсе"
        iconTopSection={<AddReactionIcon />}
        iconTopSectionStyles={styles.participateBtnTopSection}
        iconTopSectiontext="Участие в конкурсе"
      >
        <div className={styles.inputFiles}>
          <InputFile
            multiple={true}
            accept={["video/mp4", "image/jpeg", "image/png", "image/jpg"]}
            getFile={getFile}
          />
          <FileProgress
            file={Object.values(watch("files", []))}
            setFile={setValue}
          />

        </div>
        <ButtonCustom>HI</ButtonCustom>
      </ModalCustom>
    </form>
  );
}

export default ModalParticipate;