import React from 'react';
import { useForm } from 'react-hook-form';
import InputAvatar from '../../InputAvatar/InputAvatar';
import ButtonCustom from '../../ButtonCustom/ButtonCustom';
import AlertCustom from '../../AlertCustom/AlertCustom';

const InputAvatarModal = () => {

  const {handleSubmit,watch,setValue} = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputAvatar getAvatar={(avatar) => setValue('avatar',avatar)} />
      {watch("avatar", "").length !== 0 && (
        <ButtonCustom style={{ marginTop: "10px" }}>Загрузить</ButtonCustom>
      )}
    </form>
  );
};

export default InputAvatarModal;