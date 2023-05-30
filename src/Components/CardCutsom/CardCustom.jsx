import React,{useState} from "react";
import CardTopSection from "./CardTopSection/CardTopSection";
import styles from "./CardCustom.module.scss";
import AvatarCustom from "../AvatarCustom/AvatarCustom";
import { ReactComponent as People } from "../../assets/images/icons/people.svg";
import IconCustom from "../IconCustom/IconCustom";
import { Link } from "react-router-dom";
import { Grid, MenuItem } from "@mui/material";
import ButtonDropdown from "../../Components/ButtonDropDownCustom/ButtonDropdown";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import * as Muicon from "@mui/icons-material";
import TagScience from "../TagScience/tagScience";
import ModalCustom from "../Modal/Modal";
import DeleteContestModal from "../ModalComponents/DeleteContestModal/DelereContest";

export default function CardCustom({ dataCard, children, role }) {
  const PeopleIcon = Muicon["PeopleOutline"];
  const DeleteIcon = Muicon["DeleteOutlineOutlined"];
  const [open, setIsOpen] = useState(false);

  return (
    <div className={styles.containerCard}>
      <CardTopSection data={dataCard} />
      <img
        src={dataCard.concurs.img}
        alt={dataCard.concurs.name}
        style={{ objectFit: "cover" }}
        height="170px"
        width="100%"
      />
      <div className={styles.blockCard + " " + styles.blockBoxShadow}>
        {/* <BorderContext> */}
        <h4 className={styles.textCard}>{dataCard.concurs.name}</h4>
        {/* </BorderContext> */}
        <AvatarCustom
          data={dataCard.author}
          sizeAvatar={{ width: "30px", height: "30px" }}
          fontSize={{ name: "16px", description: "13px" }}
        />
        <div style={{ width: "100%", overflow: "hidden" }}>
          <h4 className={styles.textTypeCard + " " + styles.textOverflow}>
            Тип участия:
            <IconCustom icon={dataCard.concurs.type.icon} />{" "}
            {dataCard.concurs.type.text}
          </h4>
        </div>
        <div className={styles.containerCardFlex}>
          <TagScience backgroundColor={dataCard.concurs.category.color}>
            {dataCard.concurs.category.text}
          </TagScience>
          <div className={styles.containerPeopleFlex}>
            <People />
            <h4>{dataCard.concurs.participant}</h4>
          </div>
        </div>
        <div>
          {role === "admin" ? (
            <>
              <Grid container spacing={0.5}>
                <Grid item xs={8}>
                  <ButtonCustom
                    style={{ fontSize: "13px", width: "100%" }}
                    color="primary"
                    startIcon={<IconCustom icon={"PeopleAltOutlined"} />}
                  >
                    Участники
                  </ButtonCustom>
                </Grid>
                <Grid item xs={4}>
                  <ButtonDropdown
                    buttonChildren="Еще"
                    style={{ backgroundColor: "#D9D9D9", fontSize: "13px" }}
                  >
                    <MenuItem>
                      <IconCustom icon="ModeEditOutlineOutlined" />
                      Редактировать
                    </MenuItem>
                    <MenuItem>
                      <div onClick={() => setIsOpen(true)}>
                        <IconCustom icon="DeleteOutlineOutlined" />
                        Удалить
                      </div>
                    </MenuItem>
                  </ButtonDropdown>
                </Grid>
              </Grid>
            </>
          ) : (
            <Link to={"/concurs/id"}>
              <ButtonCustom
                className={styles.cardSectionShowUserBtn}
                startIcon={<PeopleIcon />}
              >
                Перейти к конкурсу
              </ButtonCustom>
            </Link>
          )}
        </div>
      </div>
      <ModalCustom
        iconTopSection={<DeleteIcon />}
        TopSectiontext="Удаление конкурса"
        open={open}
        setIsOpen={setIsOpen}
        iconTopSectionStyles={styles.topIcon}
      >
        <DeleteContestModal />
      </ModalCustom>
    </div>
  );
}
