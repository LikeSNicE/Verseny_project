// header default image
export const isFileByUrl = (filename) => {
  const typeFilesImage = ["jpg", "jpeg", "png"];
  return typeFilesImage.includes(filename.split(".").pop());
};
