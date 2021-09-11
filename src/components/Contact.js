import "../App.css";

const Greeting = () => {
  return (
    <body>
        <title>Get in touch with me</title>
      <h1>
        <span>06.</span> Contact
      </h1>
      <h2>
        Even though I'm not actively looking for new opportunities, both my
        linkedIn and email mailbox are always available. Whether it be
        interesting offers or simply to ask a question, anything is welcomed.{" "}
      </h2>

      <a href="mailto:Hansheje@hotmail.com" class="btnDown">Email
      </a>
      <a href="https://www.linkedin.com/in/hans-heje-529849199/" class="btnDown"> LinkedIn </a>
      <a href="https://github.com/Hans-EH" class="btnDown"> Github </a>
      <a href="Hans-CV.pdf" class="btnDown" download="Hans Heje Resume"> Resume↓ </a>
    </body>
  );
};

//const Colors = {
//    color: 'red',
//    backgroundColor: 'black'
//}

export default Greeting;
