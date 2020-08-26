import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import {
  FormContainer,
  Card,
  ImageContainer,
  Description,
  Submission,
  InputContainer,
  Input,
  Upload,
  TextArea,
  ErrorText,
} from './style';
import Preview from '../../assets/desktop-preview.jpg';
import Button from '../../components/Button/Button';
import Active from '../../components/Active/Active';

function SubmitForm({ user, onSubmit }) {
  const { register, handleSubmit, errors } = useForm();

  const [image, setImage] = useState(Preview);
  const [value, setValue] = useState({
    title: 'Recipe App',
    repoLink: 'repo link',
    siteLink: 'Live Link here',
    firstname: 'Uzamaki21',
    lastname: 'miroz',
    email: user.email,
    description: 'this was built using MERN stacks.',
  });

  function handleChange(e) {
    const values =
      e.target.value.length === 0 ? e.target.placeholder : e.target.value;
    setValue({
      ...value,
      [e.target.name]: values,
    });
  }

  function handleImage(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  return (
    <FormContainer>
      <Card>
        <Active />

        <ImageContainer>
          <img alt='preview' src={image}></img>
        </ImageContainer>

        <Description>
          <span>{value.title}</span>
          <p>
            <span className='first'>Link to the Repo </span>
            <span className='second'>: {value.repoLink}</span>
          </p>

          <p>
            <span className='first'>Live Link </span>
            <span className='second'>: {value.siteLink}</span>
          </p>

          <p>
            <span className='first'>Email </span>
            <span className='second'>: {value.email}</span>
          </p>

          <p>
            <span className='first'>Name </span>
            <span className='second'>
              : {user.name} {user.lastName}
            </span>
          </p>

          <p className='desc'>{value.description}</p>

          <Button loading={false} bgColor='#ED2C49' margin='20px 0 0 0'>
            Visit the repository
          </Button>
        </Description>
      </Card>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Submission>
          <span>Submit your Project</span>

          <InputContainer>
            <label>Upload</label>
            <Upload
              type='file'
              onChange={handleImage}
              placeholder='Title of the Project'
            />
          </InputContainer>

          <InputContainer>
            <label>Title of the Project</label>
            <Input
              name='title'
              maxLength='15'
              onChange={handleChange}
              placeholder='Title of the Project'
              ref={register({
                required: 'Title cannot be empty.',
                maxLength: {
                  value: 14,
                  message: 'Cannot exceed 14 words',
                },
                minLength: {
                  value: 3,
                  message: 'Cannot be less than 3 words',
                },
              })}
            />

            <ErrorText>
              <ErrorMessage errors={errors} name='title'>
                {({ message }) => <p>{message}</p>}
              </ErrorMessage>
            </ErrorText>
          </InputContainer>

          <InputContainer>
            <label>Link to the repository</label>
            <Input
              name='repoLink'
              onChange={handleChange}
              placeholder='Link to the repository'
              ref={register({
                required: 'Link to the Repo Site cannot be empty.',
                pattern: {
                  value: /https?:\/\/((?:[\w\d-]+\.)+[\w\d]{2,})/i,
                  message: 'Its not a valid link',
                },
              })}
            />

            <ErrorText>
              <ErrorMessage errors={errors} name='repoLink'>
                {({ message }) => <p>{message}</p>}
              </ErrorMessage>
            </ErrorText>
          </InputContainer>

          <InputContainer>
            <label>Link to the live site</label>
            <Input
              name='siteLink'
              onChange={handleChange}
              placeholder='Link to the live site'
              ref={register({
                required: 'Link to the Live Site cannot be empty.',
                pattern: {
                  value: /https?:\/\/((?:[\w\d-]+\.)+[\w\d]{2,})/i,
                  message: 'Its not a valid link',
                },
              })}
            />

            <ErrorText>
              <ErrorMessage errors={errors} name='siteLink'>
                {({ message }) => <p>{message}</p>}
              </ErrorMessage>
            </ErrorText>
          </InputContainer>

          <InputContainer>
            <label>Description of the project in 30 words</label>
            <TextArea
              name='description'
              onChange={handleChange}
              placeholder='Used netlify for hosting in the live server.'
              ref={register({
                required: 'Description cannot be empty.',
                maxLength: {
                  value: 100,
                  message: 'Cannot exceed 100 words',
                },
                minLength: {
                  value: 10,
                  message: 'Cannot be less than 10 words',
                },
              })}
            />

            <ErrorText>
              <ErrorMessage errors={errors} name='description'>
                {({ message }) => <p>{message}</p>}
              </ErrorMessage>
            </ErrorText>
          </InputContainer>

          <Button bgColor='#00CB5B' margin='20px 0 0 0'>
            Submit your Project
          </Button>
        </Submission>
      </form>
    </FormContainer>
  );
}

export default SubmitForm;
