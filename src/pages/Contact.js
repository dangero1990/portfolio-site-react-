import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import useTypewritter from '../hooks/useTypewriter';

function Contact() {
  const text = useTypewritter("Send me a message! I'd love to hear from you");

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
      console.log(process.env.REACT_APP_testEnv);
      emailjs.send(process.env.REACT_APP_serviceID, process.env.REACT_APP_templateID, values, process.env.REACT_APP_publicKey);
      resetForm({ values: '' });
    },
  });

  return (
    <section className='contact'>
      <h2>Contact Me</h2>
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
      <Link to={'/home'} id='home'>
        go home
      </Link>
    </section>
  );
}

export default Contact;
