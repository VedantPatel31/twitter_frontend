import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import { useForm } from 'react-hook-form'
import axios from 'axios';

export const HomeSection = () => {
    const {register,handleSubmit} = useForm();
    const [uploadingImage, setuploadingImage] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const submitHandler = async (data)=>{

    }
    const handleSelectImage=async (event)=>{
        setuploadingImage(true)
        const file=event.target.files[0]
        setImageFile(file);
        // const res = await axios.post("",data);
        setuploadingImage(false);
    }
  return (
    <div>
        <section>
        <h1>Home</h1>
        </section>
        <section>
            <div>
                <Avatar/>
                <div>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div>
                            <input 
                            {...register('content')}
                            type="text" 
                            placeholder='What is happening' />
                        </div>
                    </form>
                </div>
                {/* <div>
                    <img src="" alt="" />
                </div> */}
                <div>
                    <div>
                        <label>
                        <ImageIcon/>
                        <input 
                        type="file" 
                        accept="image/*" 
                        {...register('imageFile')}
                        className='hidden'
                        onChange={handleSelectImage}/>
                        </label>
                    </div>
                    <div>
                        <imageFile/>
                    </div>
                </div>
            </div>
        </section>
       
    </div>
  )
}
