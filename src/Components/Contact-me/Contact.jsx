import React, { useState } from 'react'
import SectionWrapper from '../SectionWrapper.jsx'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        subject: '',
        message: ''
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.send(
            'service_s0l6pfz',
            'template_o1cb7fp',
            formData,
            'GBKG8x0e_qQ6CZbq9'
        )
        .then(() => {
            toast.success("✅ Message sent successfully!")
            setFormData({
                user_name: '',
                user_email: '',
                user_phone: '',
                subject: '',
                message: ''
            })
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            toast.error("❌ Message can't send!")
            setLoading(false)
        })
    }

    const inputClass =
        "w-60 bg-black text-white placeholder-gray-500 rounded-md px-4 py-2 border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"

    return (
        <div className='p-6 w-full text-white gap-10 md:p-10' id='contact'>

            <ToastContainer position="top-right" autoClose={3000} theme="dark" />

            <div className='w-full min-h-screen flex-col flex justify-center items-center'>

                <SectionWrapper>
                    <h2 className="section-title">
                        Contact <span className='text-gradient'>Me!</span>
                    </h2>
                </SectionWrapper>

                <div className='border border-gray-500 rounded-lg bg-black p-6 mt-6'>
                    <h1 className='font-bold text-white mb-4 text-2xl'>
                        Let's Work Together
                    </h1>

                    <form onSubmit={sendEmail}>

                        <div className='flex flex-col md:flex-row gap-6'>

                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    name="user_name"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className={inputClass}
                                />

                                <input
                                    type="email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className={inputClass}
                                />
                            </div>

                            <div className='flex flex-col gap-4'>
                                <input
                                    type="tel"
                                    name="user_phone"
                                    value={formData.user_phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className={inputClass}
                                />

                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Your Message"
                                required
                                className="w-full bg-black text-white placeholder-gray-500 rounded-md px-4 py-2 border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <div className='mt-6 text-center'>
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-2 px-6 rounded hover:from-purple-700 hover:to-blue-600 transition duration-300 disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact