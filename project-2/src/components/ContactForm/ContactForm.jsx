import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdChat } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Noman");
  const [email, setEmail] = useState("noman@gmail.com");
  const [text, setText] = useState("Hello From react!");

  const onSubmit = (e) => {
    e.preventDefault();

    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdChat fontSize="24px" />} />
          <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">TEXT</label>
            <textarea name="text" rows={8} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
          <div>{name + " | " + email + " | " + text}</div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="call.png" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
