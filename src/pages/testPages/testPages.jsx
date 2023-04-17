import React, { useState } from "react";
import styles from "./testPages.module.scss";

import ModalConcursShare from "../ModalConcursShareWinner/ModalConcursShare";
import {
  IconButton,
  Modal,
  Box,
  Divider,
  Button,
  Breadcrumbs,
  Checkbox,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Avatar,
} from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Popup from "../../Components/Popup/Popup";
import SelectUi from "../../Components/Select/Select";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import { useForm } from "react-hook-form";

const TestPages = () => {
  const [date, setDate] = useState("");




  return (
    <div>
      <ModalConcursShare />
    </div>
  );
};

export default TestPages;
