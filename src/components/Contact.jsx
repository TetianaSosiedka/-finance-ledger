import { useEffect, useState, useCallback } from 'react';

import { handleBackdropClick, handleEscClick } from 'js/modalHelpers';
import Modal from 'components/Modal';

import Container from './Container';
import Form from './Form';
import contact from 'images/contact/contact.jpg';
import contactWebP from 'images/contact/contact.webp';
import contact2x from 'images/contact/contact@2x.jpg';
import contactWebP2x from 'images/contact/contact@2x.webp';

const Contact = () => {
  const [values, setValues] = useState({});
  const [modalOupen, setModalOupen] = useState(false);

  const handleModalToggle = useCallback(() => {
    setModalOupen(!modalOupen);
  }, [modalOupen]);

  useEffect(() => {
    const ecsClose = handleEscClick(handleModalToggle);
    return () => ecsClose();
  }, [handleModalToggle]);

  const handleFormDate = values => {
    if (values) {
      handleModalToggle();
      setValues(values);
    }
  };
  return (
    <section
      id="contact"
      className="section section_contact section--left-image"
    >
      <Container>
        <picture className="section_image">
          <source
            srcSet={`${contactWebP} 1x, ${contactWebP2x} 2x`}
            type="image/webp"
          />
          <source srcSet={`${contact} 1x, ${contact2x} 2x`} type="image/jpeg" />
          <img src={contact} alt="people" />
        </picture>
        <div className="section_wrap">
          <h2 className="section_title">Request Callback</h2>
          <Form getFormDate={handleFormDate} />
        </div>
      </Container>
      {modalOupen && (
        <Modal
          onClick={e => handleBackdropClick(e, handleModalToggle)}
          values={values}
        />
      )}
    </section>
  );
};

export default Contact;
