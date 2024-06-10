// import React from 'react'
// import './Contact.css'

// import theme_pattern from '../../assets/theme_pattern.svg'
// import mail_icon from '../../assets/mail_icon.svg'
// import location_icon from '../../assets/location_icon.svg'
// import call_icon from '../../assets/call_icon.svg'

// const Contact = () => {


//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "42e6cc3a-6ec8-4069-a158-448b9fe38beb");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       alert(res.message);
//     }
//   };


//   return (
//     <div className='contact' id='contact'>
//       <div className="contact-title">
//         <h1>Get in touch</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//       <div className="contact-section">
//         <div className="contact-left">
//             <h1>Let's talk</h1>
//             <p>I'm currently available to take new projects, feel free to contact me now!</p>
//             <div className="contact-details">
//                 <div className="contact-detail">
//                     <img src={mail_icon} alt=''/>
//                     <p>Jamalnasirone52@gmail.com</p>
//                 </div>
//                 <div className="contact-detail">
//                     <img src={call_icon} alt=''/>
//                     <p>0546573849</p>
//                 </div>
//                 <div className="contact-detail">
//                     <img src={location_icon} alt=''/>
//                     <p>Kumasi, Ghana</p>
//                 </div>
//             </div>
//         </div>
//         <form onSubmit={onSubmit} className="contact-right">
//             <label htmlFor='name'>Your Name</label>
//             <input type='text' placeholder='Enter you name' name='name'/>
//             <label htmlFor='email'>Your Email</label>
//             <input type='email' placeholder='Enter you email' name='email'/>
//             <label htmlFor='email'>Write Your Message here</label>
//             <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
//             <button type='submit' className='contact-submit'>Submit Now</button>
//         </form>
//       </div>
//     </div>
//   )
// }





import styles from './ContactStyles.module.css';

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1cf21e4e-6690-4f63-8b2f-7db23799e0ff");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      alert(res.message)
    }
  };


  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;

