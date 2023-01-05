import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { db } from "../../lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";

const Contact = () => {
  const { t } = useTranslation("common");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function submitForm(event) {
    event.preventDefault();
    setSuccess(true);
    const docRef = await addDoc(collection(db, "contacts"), {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
      timestamp: serverTimestamp(),
    }).catch((error) => {
      console.log(error);
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "post",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify({ name: name, email: email, phone: phone }),
    };

    fetch(
      "https://v1.nocodeapi.com/haskup/pipedrive/KRbRnyujBQpadyBI/leads",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    const docReftoUpdate = doc(db, "contacts", docRef.id);
    await updateDoc(docReftoUpdate, {
      id: docRef.id,
    }).then(() => {
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    });
  }

  return (
    <div>
      {/* Banner */}
      <div className="w-full h-[40vh]  bg-[url('../public/images/Media/banner.jpg')] bg-cover bg-center">
        <div className="bg-black/[.33] p-4 w-full h-full flex items-center justify-center">
          <div className="px-5 lg:w-1/2 text-center text-white font-playflair leading-10 tracking-wide	text-5xl lg:text-6xl  drop-shadow-xl">
            {t("contact-title")}
          </div>
        </div>
      </div>
      {/* Content Section */}
      <section className="max-w-3xl mx-auto p-10">
        <h1 className="text-4xl text-center font-playflair  mb-5">
          Get in Touch
        </h1>
        {!success ? (
          <form className="w-full mt-10" onSubmit={submitForm}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                  id="email"
                  type="email"
                  placeholder="janedoe@mailprovider.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="phone"
                  type="number"
                  placeholder="+ 1 123 123"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                  id="subject"
                  type="text"
                  placeholder="Property"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                  id="message"
                  type="text"
                  placeholder="Your message"
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-black py-2 px-4 rounded-sm text-white"
            >
              Submit Form
            </button>
          </form>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-3xl font-bold">Thank you</p>
            <p className="font-light">
              Your information has been submitted and we will contact you within
              one business day.
            </p>
          </div>
        )}

        {/* <div>
          <h1>Pipedrive Test</h1>
            <iframe
              src="https://webforms.pipedrive.com/f/6b4X9lgAO0qk71J6EYYlV5fIAyfZUZiygyv3bar4dgJQL9BIcDLHUTyUzRbSJCsohl"
              scrolling="no"
              seamless="seamless"
              className="w-full h-[100vh]"
              style={{
                border: "none",
                overflow: "hidden",
                width: "100%",
                maxWidth: "768px",
                minWidth: "320px",
                height: "100vh",
                position: "relative",
              }}
            />
        </div> */}
      </section>
    </div>
  );
};

export default Contact;

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
