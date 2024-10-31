import { useContext, useState } from "react"
import { AuthContext } from "../AuthoProvider"
import auth from "../FireBase.Config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

export default function UpdateProfile() {
    const {user} = useContext(AuthContext)
    const [inputValue, setInputValue] = useState(user.displayName);
    const [imgURL, setImgURL] = useState(user.photoURL);
    
    const handleNameChange=(e)=>{
        setInputValue(e.target.value);
    }
    const handlePhotoChange=(e)=>{
        setImgURL(e.target.value);
    }

    const updateName=()=>{
        updateProfile(auth.currentUser, {
            displayName: inputValue,
        })
        .then(() => {
            toast("Relod The page to see update");
          }).catch((err) => {
            toast(err.message);

          });
    }

    const updatePhoto=()=>{
        updateProfile(auth.currentUser, {
            photoURL: imgURL,
        })
        .then(() => {
            toast("Relod The page to see update");
          }).catch((error) => {
            toast(error.message);
          });
    }



  return (
    <>
        <section className="flex justify-center items-center py-20">
            <div>
                <div className="flex flex-col items-center my-4">
                    <img src={user.photoURL} alt="" />
                    <h2 className="text-3xl font-semibold">Welcome {user.displayName}</h2>
                </div>

                <div className="flex justify-center" style={{width: '500px'}}>


                   <div>
                      {/* change name  */}
                        <div className="flex mt-4">
                            <div className="flex items-center text-xl">
                                <p className="mr-4 font-semibold">Name: </p>
                                <input type="text"
                                name = "name"
                                onChange={handleNameChange}
                                className="w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 "
                                style={{width: "250px", fontSize: '18px'}}
                                value={inputValue} />
                            </div>
                            <button className="btn ml-4" onClick={updateName}>Update</button>
                        </div>
                        {/* change url  */}
                        <div className="flex mt-4">
                            <div className="flex items-center text-xl">
                                <p className="mr-4 font-semibold">Photo: </p>
                                <input type="text"
                                name = "name"
                                onChange={handlePhotoChange}
                                className="w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 "
                                style={{width: "250px", fontSize: '18px'}}
                                value={imgURL} />
                            </div>
                            <button className="btn ml-4" onClick={updatePhoto}>Update</button>
                        </div>

                   </div>


                </div>
            </div>
        </section>
        <ToastContainer></ToastContainer>
    </>
  )
}
