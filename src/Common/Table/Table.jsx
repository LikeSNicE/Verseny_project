// import React from "react";
// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Checkbox,
//   Paper,
// } from "@mui/material";
// import GetElementTable from "./GetElementTable/GetElementTable";
// import styles from './Table.module.scss';

// function TableUI({ head, data, isCheckBox = false }) {
//   return (
//     <TableContainer className={styles.table} component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             {isCheckBox ? <TableCell></TableCell> : ""}
//             {head.map((value,index) => (
//               <TableCell key={index} className={styles.tableHead}>{value}</TableCell>
//             ))}
//           </TableRow>
//         </TableHead>

//         <TableBody eBody>
//           {data.map((dataValue, index) => (
//             <TableRow key={index}>
//               {isCheckBox ? (
//                 <TableCell align="left">
//                   <Checkbox
//                     sx={{
//                       color: "#7272D8",
//                       "&.Mui-checked": { color: "#9294C9" },
//                     }}
//                   />
//                 </TableCell>
//               ) : (
//                 ""
//               )}
//               {dataValue.map((value,index) => (
//                 <TableCell key={index}>
//                   <GetElementTable dataElement={value} />
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default TableUI;

import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import GetElementTable from "./GetElementTable/GetElementTable";
import styles from "./Table.module.scss";

function TableUI({ head, data, control }) {
  return (
    <TableContainer className={styles.table}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {head.map((value) => (
              <TableCell className={styles.tableHead}>{value}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((dataValue, index) => (
            <TableRow key={index}>
              {dataValue.map((value, index) => (
                <TableCell key={index}>
                  <GetElementTable dataElement={value} control={control} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableUI;
