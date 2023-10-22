import React, { useEffect, useReducer, useState } from "react";
import RoundedContact from "../Rounded/RoundedContact";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const initialData = {
  name: "",
  email: "",
  number: "",
  message: "",
};

export default function Contact() {
  const [send, setSend] = useState(false)

  const reducer = (state, action) => {
    switch (action.type) {
      case `input`: {
        return { ...state, [action.payload.name]: action.payload.value };
      }
      case `reset`:{
        return initialData
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialData);

  const form = useRef();

  const sendEmail = (e) => {
    console.log(state)
    e.preventDefault();

    emailjs
      .sendForm(
        "service_850zsoq",
        "template_su18iuy",
        form.current,
        "ZPQCuUKKY-arsTQOA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      dispatch({
        type:"reset"
      })

      setSend(true)
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: `input`,
      payload: { name, value },
    });
  };

  // console.log(state);
  useEffect(() => {
    setTimeout(() => {
        setSend(false)
    }, 25000)
}, [send])


  return (
    <div className="container-fluid py-4 grayBg" id="contact">
      <h2 className="text-center me-lg-5">Contact <span className="themeColor">Me</span> </h2>
      <div className="row py-4 ">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <RoundedContact />
        </div>
        <div className="col-md-6  mt-5 mt-lg-0">
          <form className="" ref={form} onSubmit={sendEmail}>
            <h3 className="text-center text-lg-start mb-4">Connect with me</h3>
            <input
              name="name"
              className="form-control my-2 my-lg-3 rounded-0 w-75 d-block m-auto m-lg-0"
              type="text"
              placeholder="Full Name" onChange={handleInput} value={state.name} required
            />

            <input
              name="email"
              className="form-control my-2 my-lg-3  rounded-0 w-75 d-block m-auto m-lg-0"
              type="email" 
              placeholder="Email" onChange={handleInput} value={state.email} required
            />

            <input
              name="number"
              className="form-control my-2 my-lg-3  rounded-0 w-75 d-block m-auto m-lg-0"
              type="number"
              placeholder="Contact Number" onChange={handleInput} value={state.number} required
            />

            <textarea
                 name="message"
              className="form-control my-2 my-lg-3  rounded-0 w-75 d-block m-auto m-lg-0"
              type="text"
              placeholder="" onChange={handleInput} value={state.message} required
            />
          <button
            type="submit"
            className="btn rounded-0 d-block m-auto m-lg-0" disabled={send}
          >
            Send Message
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}
