
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import validate from './validate';
import s from "../ContactForm/ContactForm.module.css"
import axios from 'axios';
import { toast } from 'react-toastify';

export default function CreateForm() {
    const dispatch = useDispatch()
    const [error, setError] = useState({})
    const [input, setInput] = useState({
        name: "",
        lastname: "",
        phone: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        setError(validate(({ ...input, [e.target.name]: e.target.value })))
    }

    const isButtonDisabled = () => !(input.name && input.lastname) || (Object.keys(error).length)

    const handleSubmit = async (e) => {
        e.preventDefault()

        await postMessage()
        setInput({ name: "", lastname: "", phone: "", email: "", message: "" })
        toast.success("Thank you! Your message was sent successfully")
    }

    const postMessage = async() => {
        const newMessage = {
            name: input.name.trim(),
            lastname: input.lastname.trim(),
            phone: input.phone,
            email: input.email,
            message: input.message.trim(),
        }
        try {
            const post = await axios.post("https://submit-form.com/RwQl1rfK", newMessage)
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div className={s.background}>
            <div className={s.container}>
                <div className={s.screen}>

                    <div className={s.screenBody}>
                        <div className={s.screenBodyItemLeft}>
                            <div className={s.appTitle}>
                                <span>CONTACT</span>
                                <span>US</span>
                            </div>
                            <div className={s.appContact}>CONTACT INFO : +54 henry-vivero</div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className={s.screenBodyItem}>
                                <div className={s.appForm}>
                                    <div className={s.FormGroup}>
                                        <input className={s.FormControl} placeholder="NAME" value={input.name} name='name' onChange={handleChange} type='text' />
                                        {error.name && <p className={s.error}>{error.name}</p>}
                                    </div>
                                    <div className={s.FormGroup}>
                                        <input className={s.FormControl} placeholder="LASTNAME" value={input.lastname} name='lastname' onChange={handleChange} type='text' />
                                        {error.lastname && <p className={s.error}>{error.lastname}</p>}
                                    </div>
                                    <div className={s.FormGroup}>
                                        <input className={s.FormControl} placeholder="EMAIL@EXAMPLE.COM" value={input.email} name='email' onChange={handleChange} type='text' />
                                        {error.email && <p className={s.error}>{error.email}</p>}
                                    </div>
                                    <div className={s.FormGroup}>
                                        <input className={s.FormControl} placeholder="PHONE NUMBER  +XX XXX XXXXX'" value={input.phone} name='phone' onChange={handleChange} type='text' />
                                        {error.phone && <p className={s.error}>{error.phone}</p>}
                                    </div>
                                    <div className={s.FogitrmGroupMessage}>
                                        <textarea className={s.FormControl} placeholder="Write your message here..." value={input.message} name='message' onChange={handleChange} />
                                    </div>
                                    <div className={s.FormGroupButtons}>
                                        <button disabled={isButtonDisabled()} type='submit' className={s.formButton}>SEND</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
