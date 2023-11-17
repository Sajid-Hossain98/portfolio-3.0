import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let&apos;s work together</h1>

        <div className="item">
          <h2>Mail</h2>
          <span>hello@there.dev</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Dhaka, Bangladesh</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>01891-875288</span>
        </div>
      </div>

      <div className="formContainer">
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows={8} placeholder="Message" required />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
