import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthoProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function GoogleGithubAuth() {
    const { googleRegister, githubRegister} = useContext(AuthContext);

    const handleGoogleRegister = ()=>{
        googleRegister()
        .then((res)=>{
          const user = res.user;
          console.log(user)
          toast("Successfully Login");
        })
        .catch(error=>{
          // console.log("my Error: ", error.message);
          toast(error.message)
        })
      }
  
      const handleGithubRegister=()=>{
        githubRegister()
        .then(()=>{
          // console.log(user)
          toast("Successfully Login");
        })
        .catch(error=>{
          // console.log("my Error: ", error.message);
          toast(error.message)
        })
      }


  return (
    <>
        <button onClick={handleGoogleRegister} className="p-3 mr-3 bg-gray-200 text-2xl"> 
            <FaGoogle/>
        </button>
        <button onClick={handleGithubRegister} className="p-3 mr-3 bg-gray-200 text-2xl">
            <FaGithub/>
        </button>
        <ToastContainer></ToastContainer>

    </>
  )
}
