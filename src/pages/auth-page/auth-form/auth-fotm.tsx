import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Logo from './logo';
import { useForm, useFormState, Controller, SubmitHandler } from 'react-hook-form';
// import PasswordField from './password-field';
import './auth-form.css';

// определяем через TS содержимое полей
type Inputs = {
  login: string;
  password: string;
} 

export const AuthForm = () => {
  // через дженерик useForm<Inputs>() показываем, что login: string и password: string
  const { handleSubmit, control } = useForm<Inputs>();
  const { errors } = useFormState({
    control
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
      <form className='auth-form__form' onSubmit={handleSubmit(onSubmit)}>
        {/* Поле логина c React Hook Form */}
        <Controller
          control={ control }
          name='login'
          rules={{ required: 'Ошибка' }}
          render={( { field } ) => (
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
              onChange = {(e) => field.onChange(e)}
              value={ field.value }
              error={ !!errors.login?.message }
              helperText={ errors.login?.message }
            />
          )}
        />

        {/* Поле логина без React Hook Form */}
        {/* <TextField
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
          /> */}


        {/* Поле пароля c React Hook Form */}
        <Controller
          control={ control }
          name='password'
          rules={{ required: 'Ошибка' }}
          render={( { field } ) => (
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
              onChange = {(e) => field.onChange(e)}
              value={ field.value }
              error={ !!errors.password?.message }
              helperText={ errors.password?.message }
            />
          )}
        />

        {/* Поле пароля без React Hook Form*/}
        {/* <TextField
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
          /> */}

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