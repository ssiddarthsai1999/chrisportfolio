import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function Contact() {
    const [state, handleSubmit] = useForm("xdkndjap");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className="  w-[60%]  mx-auto flex items-center justify-center h-screen">
            <div className="flex flex-col items-start w-1/2 gap-4 justify-start  h-[50vh]">
                <div className="">
                    <h1 className="text-[50px] font-bold">Contact</h1>
                    <h3 className="font-thin text-[24px]">
                        Looking forward to hearing from you
                    </h3>
                </div>
                <div>
                    <h1 className="text-[50px] font-bold">Phone</h1>
                    <h3 className="font-thin text-[24px]">+91 8220 208 208</h3>
                    <h3 className="font-thin text-[24px]">+91 8220 208 208</h3>
                </div>
                <div>
                    <h1 className="text-[50px] font-bold">Email</h1>
                    <h3 className="font-thin text-[24px]">
                        raajesh20.10@icloud.com
                    </h3>
                </div>
            </div>
            <div className="h-[50vh]  w-1/2 justify-start flex flex-col items-start">
                {" "}
                <form onSubmit={handleSubmit} className="flex-col flex gap-10">
                    <div className="flex items-center align-middle gap-14">
                        <div className="flex flex-col">
                            {" "}
                            <label htmlFor="name">Name</label>
                            <input
                                id="text"
                                type="text"
                                name="name"
                                className="border border-black px-3 py-2 mt-2"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="border border-black px-3 py-2 mt-2"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col h-full">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="border border-black px-3 py-2 mt-2"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <div className="flex justify-center ">
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className=" bg-black px-7 py-2 rouned-none text-white hover:bg-white hover:text-black border-black hover:border-black border duration-200 ease-in-out"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
