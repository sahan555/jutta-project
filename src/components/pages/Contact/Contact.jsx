import { AiOutlineSend } from "react-icons/ai";
import Button from "../../parts/Button/Button";
import styles from "./Contact.module.css";
import { useState } from "react";

function Contact() {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [details,setDetails] = useState();
  const onsubmit = (event)=>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setDetails(event.target[2].value);
    
  }
  return (
    <>
      <section className={`${styles.contact}`}>
        <div className="section-break">
          <div className="container">
            <div className="contact-group">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <div className={`${styles.contact_box}`}>
                    <article>
                      <h1 className={styles.title}>Contact Us</h1>
                      <p>
                        Please fill out the form below and submit if you have
                        any feedback or queries about our service.
                      </p>
                    </article>
                    <form onSubmit={onsubmit}>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className={`form-group ${styles.form_group}`}>
                            <label>
                              Name<span className={styles.red_required}>*</span>
                            </label>
                            <input
                              className={`form-control ${styles.form_control}`}
                              type="text"
                              placeholder="Your Name"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className={`form-group ${styles.form_group}`}>
                            <label>
                              Email Address
                              <span className={styles.red_required}>*</span>
                            </label>
                            <input
                              className={`form-control ${styles.form_control}`}
                              type="email"
                              placeholder="email@gmail.com"
                            />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className={`form-group ${styles.form_group}`}>
                            <label>
                              enquiry
                              <span className={styles.red_required}>*</span>
                            </label>
                            <textarea
                              className={`form-control ${styles.form_control}`}
                              rows={4}
                              placeholder="Your Details here"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 offset-sm-6">
                          <div className={styles.btn_wrap}>
                            <Button 
                            
                            text="Submit" 
                            color="btn_green"
                            icon={< AiOutlineSend />}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    <div>
                      {name + "" + email+ "" + details}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
