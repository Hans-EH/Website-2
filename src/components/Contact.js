import "../App.css";

const Contact = () => {
  return (
    <body>
      <title>Feel free to contact me</title>
      <h1>
      <a href="#contact"><span>06.</span></a> Contact
      </h1>
      <h2>
        Even though I'm not actively looking for new opportunities, both my
        linkedIn and email mailbox are always available. Whether it be
        interesting offers or simply to ask a question, anything is welcomed.{" "}
      </h2>
        <center>
      <a href="mailto:Hansheje@hotmail.com" class="btnDown">Email</a>•	
      <a href="https://www.linkedin.com/in/heje/" class="btnDown">LinkedIn</a>•
      <a href="https://github.com/Hans-EH" class="btnDown">Github</a>•
      <a href="Hans-cv.pdf" class="btnDown" download="Hans Heje Resume">Resume</a>
      </center>
    </body>
  );
};

//const Colors = {
//    color: 'red',
//    backgroundColor: 'black'
//}

export default Contact;
