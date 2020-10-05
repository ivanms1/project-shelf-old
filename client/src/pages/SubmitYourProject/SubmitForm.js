import React, { useState } from 'react';
import ReactToolTip from 'react-tooltip';
import Zoom from 'react-medium-image-zoom';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import IMG_Social from '../../assets/social.png';
import Rick from '../../assets/rick.png';

import { ReactComponent as Spinner } from '../../assets/spinner.svg';

import {
  CardOuter,
  CardInner,
  HeaderCollection,
  Links,
  Profile,
} from '../../components/Card/style';

import {
  FormContainer,
  Submission,
  InputContainer,
  Input,
  Upload,
  TextArea,
  ErrorText,
} from './style';

import Button from '../../components/Button/Button';
import Active from '../../components/Active/Active';

const MUTATION_UPLOAD_IMAGE = loader('./mutationUploadImage.graphql');

const EMAIL_STRING = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=';

function getCurrentDate() {
  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const newDate = new Date();
  return newDate.toLocaleDateString('en-us', dateOptions);
}

function SubmitForm({ user, onSubmit }) {
  const { register, handleSubmit, setValue: setFormValue, errors } = useForm();
  const [value, setValue] = useState({
    title: 'Recipe App',
    preview: IMG_Social,
    repoLink: 'repo link',
    siteLink: 'Live Link here',
    firstname: 'Uzamaki21',
    lastname: 'miroz',
    email: user.email,
    description:
      'This was built using MERN stacks. Used cloudaniary for image hosting. Used netlify for hosting in the live server. A nightmare 👻 Dm for collaboration 🙏',
  });

  const [uploadImage, { data, loading }] = useMutation(MUTATION_UPLOAD_IMAGE);

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
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = async (e) => {
        const res = await uploadImage({
          variables: {
            path: reader.result,
          },
        });
        setValue({
          ...value,
          preview: res.data ? res.data.image.url : null,
        });
        setFormValue('preview', res.data ? res.data.image.url : '');
      };
    }
  }

  return (
    <FormContainer>
      <CardOuter>
        <ReactToolTip className='notActivated' id='notActivated'>
          <span>Active</span>
        </ReactToolTip>

        <div data-tip data-for='notActivated'>
          <div className='activeContainer'>
            <Active active='true' />
          </div>
        </div>

        <CardInner>
          <HeaderCollection>
            <span>{value.title}</span>
          </HeaderCollection>

          <Links>
            <a href={value.siteLink}>Live Link</a>
            <a href={value.repoLink}>Repo Link</a>
            <a href={EMAIL_STRING + value.email}>Contact</a>
          </Links>

          <div className='imgContainer'>
            <Zoom wrapStyle={{ display: 'block' }}>
              {(loading && (
                <p className='loading'>
                  <Spinner />
                </p>
              )) || (
                <img
                  alt={value.preview}
                  src={value.preview}
                  width='100%'
                  height='100%'
                ></img>
              )}
            </Zoom>
          </div>

          <Profile>
            <div className='profileContainer'>
              <img alt={Rick} src={Rick} width='100%' height='100%'></img>
            </div>

            <div className='profileDetails'>
              <p>
                {user.name} {user.lastName}
              </p>

              <p>4th weekly project</p>
            </div>
          </Profile>
          <p className='date'>Published Date : {getCurrentDate()}</p>

          <p className='description'>{value.description}</p>
        </CardInner>
      </CardOuter>
      <Submission onSubmit={handleSubmit(onSubmit)}>
        <span>Submit your Project</span>

        <Upload for='file-upload'>
          <input id='file-upload' type='file' onChange={handleImage} />
          Upload
        </Upload>

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
          <label>Description of the project in 50 words</label>
          <TextArea
            name='description'
            onChange={handleChange}
            placeholder='Used netlify for hosting in the live server.'
            maxLength='150'
            ref={register({
              required: 'Description cannot be empty.',
              maxLength: {
                value: 150,
                message: 'Cannot exceed 150 words',
              },
              minLength: {
                value: 50,
                message: 'Cannot be less than 50 words',
              },
            })}
          />

          <ErrorText>
            <ErrorMessage errors={errors} name='description'>
              {({ message }) => <p>{message}</p>}
            </ErrorMessage>
          </ErrorText>
        </InputContainer>

        <Button kind='edit' fontSize='big' size='big'>
          Submit your Project
        </Button>
      </Submission>
    </FormContainer>
  );
}

export default SubmitForm;
