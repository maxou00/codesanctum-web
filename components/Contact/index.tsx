/* eslint-disable react/no-unescaped-entities */
"use client";
import NewsLetterBox from "./NewsLetterBox";
import { FormEvent, useCallback, useId, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  ContactUsMutation,
  ContactUsMutationVariables,
} from "@/core/gql/graphql";
import { MUTATION_CONTACT_US } from "@/core/mutations";
import { ContactUsSchema } from "@/validations/contact-form";
import Modal from "../Modals/base";
import { Blocks } from "react-loader-spinner";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [contactUs, contactUsResult] = useMutation<
    ContactUsMutation,
    ContactUsMutationVariables
  >(MUTATION_CONTACT_US);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const id = useId()

  const onSubmitMessage = useCallback((ev: FormEvent) => {
    ev.preventDefault();
    if(contactUsResult.loading) {
      return;
    }
    let validation = ContactUsSchema.safeParse({
      name,
      email,
      message,
    });
    if (validation.success === true) {
      contactUs({
        variables: {
          data: {
            ...validation.data,
          },
        },
      }).then((res) => {
        if (res.data.createMessage.id) {
          setMessage("");
          setShowModal(true);
        } else {
          //// toast here
          toast.error("The bird failed to deliver your message. Can you try again ?", { id });
        }
      });
    }
    else {
      console.log(validation.error.flatten().fieldErrors);
      toast.error("Please fill correctly the fields.", { id });
    }
  }, [contactUsResult.loading, name, email, message, contactUs, id]);

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] px-8 py-11 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Reach Out to the Guardians
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                We're here to answer any questions you have
              </p>
              <form onSubmit={onSubmitMessage}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(ev) => {
                          setName(ev.target.value);
                        }}
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-black dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email *
                      </label>
                      <input
                        value={email}
                        onChange={(ev) => {
                          setEmail(ev.target.value);
                        }}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-black dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={message}
                        onChange={(ev) => {
                          setMessage(ev.target.value);
                        }}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-black dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      className="rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                    >
                      Submit your message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLetterBox />
          </div>
        </div>
      </div>
      <Modal
        isOpen={contactUsResult.loading}
        shouldCloseOnEsc={false}
        shouldCloseOnOverlayClick={false}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-8">
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />
          <h1 className="text-center text-xl max-w-[30ch]">
            Please wait while your message is been sent
          </h1>
        </div>
      </Modal>
      <Modal isOpen={(!contactUsResult.loading && showModal)} onRequestClose={() => setShowModal(false)}>
        <div className="flex h-full w-full flex-col items-center justify-center gap-8">
          <h1 className="text-center text-2xl">
            We've got
            <br />
            your message !
          </h1>
          <p className="text-md opacity-80">
            We will get back to you as soon as we can.
          </p>
          <button
            onClick={() => setShowModal(false)}
            className="rounded bg-primary px-4 py-2 text-sm"
          >
            Ok, got it
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Contact;
