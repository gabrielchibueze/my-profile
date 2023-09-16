import React from "react";


function Top() {
    return (
      <div className="top">
        <h2>Gabriel Egwu</h2>
        <h3>FrontEnd Developer</h3>
        <p>nedgabconsult.com</p>
        <div className="buttons">
            <a className="emailMesssage" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQZjttVbwvTJHBDpTcRTNZGPrPTBvTqRllMDjDSkqkxjcRFnpFncNSKqXtTcNJgCjczqzp"><button className="email"><i class="fa-solid fa-envelope"></i>Email</button></a>
            <a className="linkedInMessage" href="https://www.linkedin.com/in/egwu-gabriel-chibueze-ba9b52184/"><button className="linkedIn"><i class="fa-brands fa-linkedin-in"></i>LinkedIn</button></a>
        </div>
      </div>
    )
  }

  export default Top