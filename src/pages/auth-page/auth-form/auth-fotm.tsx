import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Logo from './logo';
// import PasswordField from './password-field';
import './auth-form.css';

export const AuthForm = () => {
  return (
    // Контейнер формы с белым фоном без изображения
    <div className='auth-form'>

      {/* Логотип */}
      <Logo
      style= {{
        marginBottom: '16px',
      }}
      />

      {/* Заголовок формы */}
      <Typography 
        variant='h5'
        className='auth-form__title'
        sx={{marginBottom: '8px'}}>
        Вход в личный кабинет
      </Typography>

      {/* Форма с React Hook Form  */}
      <form className='auth-form__form' onSubmit={() => null}>

        {/* Поле логина */}
        <TextField
            label='Имя пользователя'
            margin='normal'
            size='medium'
            fullWidth={ true }
            sx={{
              borderRadius: '8px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px', // Применение borderRadius для корневого элемента OutlinedInput
                
              },
            }}
            className='auth-form__input'
          />

        {/* Поле пароля */}
        <TextField
            label='Пароль'
            type='password'
            margin='normal'
            size='medium'
            fullWidth={ true }
            sx={{
              borderRadius: '8px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
            }}
            className='auth-form__input'
          />

        {/* Компонент поля пароля с кнопкой просмотра */}
        {/* <PasswordField /> */}

        {/* Кнопка сабмита */}
        <Button
          type='submit'
          variant='contained'
          fullWidth={ true }
          // size='large' //Перезадаем размер в sx
          disableElevation={ true }
          sx={{
            backgroundColor: '#255CA2',
            height: '56px',
            marginTop: '16px',
            borderRadius: '8px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
          }}
          >
          Войти
        </Button>
      </form>
    </div>
  )
}