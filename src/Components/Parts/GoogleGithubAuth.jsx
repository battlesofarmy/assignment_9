import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthoProvider";



export default function GoogleGithubAuth() {
    const { googleRegister, githubRegister} = useContext(AuthContext);

    const handleGoogleRegister = ()=>{
        googleRegister()
        .then(res=>{
          const user = res.user;
          console.log(user)
        })
        .catch(error=>{
          console.log("my Error: ", error.message);
        })
      }
  
      const handleGithubRegister=()=>{
        githubRegister()
        .then(()=>{
          console.log("hi")
        })
        .catch(err=>{
          console.log(err.message)
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

    </>
  )
}
