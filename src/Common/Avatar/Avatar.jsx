import { Avatar } from "@mui/material"

export const AvatarSmall = ({src,alt}) => {
  return (
    <Avatar
      src={src}
      alt={alt}
      sx={{
        width: "40px",
        height: "40px",
        objectFit: "cover",
      }}
    />
  ); 
}