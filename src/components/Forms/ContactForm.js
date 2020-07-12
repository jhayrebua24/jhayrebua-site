import React, { useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';

import { InputText, Label, Row, InputArea, Warning } from './FormInputs';
import Loading from '../Loading';

const ValidateForm = Yup.object().shape({
  name: Yup.string().trim().min(4).max(50).label('Name').required(),
  subject: Yup.string().trim().nullable().min(5).label('Subject'),
  message: Yup.string()
    .trim()
    .nullable()
    .min(5)
    .max(250)
    .label('Message')
    .required(),
});

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const ContactForm = () => {
  const recaptchaKey = process.env.GATSBY_MY_RECAPTCHA_KEY || 'nokeys';

  const recaptchaRef = useRef(null);
  const formRef = useRef(null);
  const [isLoading, setLoading] = useState(false);

  const handeFormSubmit = () => {
    const values = (formRef.current && formRef.current.values) || null;

    if (values && recaptchaRef.current && recaptchaRef.current.getValue()) {
      const formActions = formRef.current;
      const recaptchaValue =
        (recaptchaRef.current && recaptchaRef.current.getValue()) || null;
      const bodyValues = encode({
        ...values,
        'g-recaptcha-response': recaptchaValue,
      });
      setLoading(true);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: bodyValues,
      })
        .then(() => {
          formActions.resetForm();
          recaptchaRef.current.reset();
        })
        .catch(err => alert(err))
        .finally(() => {
          formActions.setSubmitting(false);
          setLoading(false);
        });
    }
  };
  return (
    <>
      {isLoading && <Loading />}
      <form
        data-netlify="true"
        hidden
        name="contact"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
      >
        <input type="text" name="name" />
        <input type="text" name="subject" />
        <textarea name="message" />
        <input name="bot-field" type="hidden" />
      </form>
      <Formik
        innerRef={formRef}
        initialValues={{
          'form-name': 'contact',
          'bot-field': '',
          name: '',
          email: '',
          subject: '',
          message: '',
        }}
        validationSchema={ValidateForm}
        onSubmit={() => recaptchaRef.current && recaptchaRef.current.execute()}
      >
        {({ values, handleSubmit, isSubmitting }) => (
          <Form
            name="contact"
            className="m-0 mb-10"
            data-netlify-recaptcha="true"
            netlify
            netlify-honeypot="bot-field"
          >
            <Field type="hidden" name="form-name" />
            <Field type="hidden" name="bot-name" />

            <Row>
              <Label>
                name
                <span className="text-red-600">*</span>
              </Label>
              <Field
                value={values.name}
                component={InputText}
                name="name"
                autoComplete="off"
              />
              <ErrorMessage component={Warning} name="name" />
            </Row>
            {/* <Row>
                  <Label>
                    email<span className="text-red-600">*</span>
                  </Label>
                  <Field
                    value={values.email}
                    component={InputText}
                    name="email"
                    autoComplete="off"
                  />
                  <ErrorMessage component={Warning} name="email" />
                </Row> */}
            <Row>
              <Label>Subject</Label>
              <Field
                value={values.subject}
                component={InputText}
                name="subject"
                autoComplete="off"
              />
              <ErrorMessage component={Warning} name="subject" />
            </Row>

            <Row>
              <Label>
                Message
                <span className="text-red-600">*</span>
              </Label>
              <Field
                value={values.message}
                component={InputArea}
                name="message"
                autoComplete="off"
              />
              <ErrorMessage component={Warning} name="message" />
            </Row>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={recaptchaKey}
              size="invisible"
              onChange={handeFormSubmit}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="w-full lg:w-auto  bg-blue-600 text-white py-2 px-8 mt-2 text-xl rounded-full"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
