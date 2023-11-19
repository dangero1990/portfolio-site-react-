import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import useTypewritter from '../hooks/useTypewriter';
import { useState } from 'react';
import MuteButton from '../components/MuteButton';

function Contact() {
  const text = useTypewritter("Send me a message. I'd love to hear from you!");
  const successMessage = 'Thank you for your message. I will be sure to reach back out to you soon :)';
  const errorMessage = 'Something went wrong. Please try again later.';
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invaild email address').required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(process.env.REACT_APP_serviceID, process.env.REACT_APP_templateID, values, process.env.REACT_APP_publicKey)
        .then(() => {
          setSent(true);
          setMessage(successMessage);
          resetForm({ values: '' });
        })
        .catch((error) => {
          if (error.status !== 200) {
            setSent(true);
            setMessage(errorMessage);
          }
        });
    },
  });

  return (
    <section className='contact'>
      <h2>Contact Me</h2>
      <MuteButton />
      {!sent && (
        <>
          <p>{text}</p>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input id='name' name='name' type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} placeholder='Your Name' />
            {formik.touched.name && formik.errors.name ? <div className='required'>{formik.errors.name}</div> : null}
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' type='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} placeholder='email@email.com' />
            {formik.touched.email && formik.errors.email ? <div className='required'>{formik.errors.email}</div> : null}
            <label htmlFor='message'>message</label>
            <textarea name='message' id='message' cols='30' rows='10' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} placeholder="Hello, Andrew I'd like to talk" />
            {formik.touched.email && formik.errors.email ? <div className='required'>{formik.errors.message}</div> : null}
            <button type='submit'>Submit</button>
          </form>
        </>
      )}
      {sent && (
        <>
          <p className='status-message'>{message}</p>
        </>
      )}
      <Link to={'/home'} id='home'>
        go home
      </Link>
    </section>
  );
}

export default Contact;
