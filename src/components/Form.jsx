import { User, Mail, Phone, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "../components/ui/label.tsx";
import { Input } from "../components/ui/input";
import { cn } from "../utils/cn.ts";
import PropTypes from 'prop-types';

export function SignupFormDemo() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      message === "" ||
      phoneNumber === ""
    ) {
      alert("Please fill all the fields");
    }
    // checking if the email is valid
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    // checking if the phone number is valid
    if (!/^[0-9]{10}$/.test(phoneNumber)) {
      alert("Please enter a valid phone number");
      return;
    }
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("phonenumber", phoneNumber);
    formData.append("message", message);

    fetch(
      "https://script.google.com/macros/s/AKfycbyyK4BqsPukMnwFOf_4oH3gUU_7Bqgui1UM95cCL2qQIff02P9pDYiQ8_KYNtDuYj2zCw/exec",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    )
      .then(() => {
        alert("Form Submitted Successfully");
        setFirstname("");
        setLastname("");
        setEmail("");
        setMessage("");
        setphoneNumber("");
      })
      .catch((error) => {
        alert("Error in submitting the form");
        console.log(error);
      });
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8  shadow-input bg-white dark:bg-neutral-900">
      <form className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="firstname"
                name="Firstname"
                placeholder="Tyler"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="pl-10"
              />
            </div>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="lastname"
                name="Lastname"
                placeholder="Durden"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="pl-10"
              />
            </div>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="email"
              name="Email"
              placeholder="projectmayhem@fc.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
            />
          </div>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="PhoneNumber">Phone Number</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="PhoneNumber"
              name="phoneNumber"
              placeholder="91XXXXXXXXXX"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
              className="pl-10"
            />
          </div>
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Send Us a Message</Label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <textarea
              id="message"
              name="Message"
              placeholder="Enter your message here..."
              className="flex w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400 pl-10 min-h-[80px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </LabelInputContainer>

        <motion.button
          whileTap={{ scale: 0.985 }}
          className="bg-accent block w-full text-white rounded-md py-4 px-8 md:py-3 md:px-6 font-medium shadow-lg shadow-accent/50 transition-all duration-300 hover:bg-accent/80 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-neutral-100 dark:focus-visible:ring-offset-neutral-800 dark:focus-visible:ring-accent flex items-center justify-center"
          type="submit"
          onClick={handleSubmit}
        >
          <Send className="mr-2 h-4 w-4" />
          <span>SEND &rarr;</span>
          <BottomGradient />
        </motion.button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="opacity-0 blur-sm absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-4 w-full md:mx-2", className)}>
      {children}
    </div>
  );
};

LabelInputContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
