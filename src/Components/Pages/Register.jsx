import { useContext, useState } from "react";
import { AuthContext } from "../AuthoProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleGithubAuth from "../Parts/GoogleGithubAuth";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { updateProfile } from "firebase/auth";



export default function Register() {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [passShowHide, setPassShowHide] = useState(true);
  


    const handleFormSubmit =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const imgURL = e.target.photo.value;
        const password = e.target.password.value;

        if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
          toast("Password must contain at least one uppercase and lowercase letter");
          return; // Stop the form submission
        }

        // createUser(email, password)
        // .then(()=>{

        //     updateUserProfile(name)
        //     .then(() => {
        //       // Profile updated!
        //       // ...
        //       console.log("successfully")
        //     }).catch((error) => {
        //       // An error occurred
        //       // ...
        //       console.log(error.message)
        //     });


        //     toast("Registraion Completed Successfully");
        // })
        // .catch(err=>{
        //     console.log(err.message)
        //     toast(err.message)
        // })


      createUser(email, password, name, imgURL)
      .then(() => {
          toast("Registraion Completed Successfully");
      })
      .catch((err) => {
          toast(err.message)
      });


    }


    return (
      <>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Register a new account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                  Your Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Photo URL
                </label>
                <div className="mt-2">
                  <input
                    id="photo"
                    name="photo"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2 flex items-center">
                  <input
                    id="password"
                    name="password"
                    type={passShowHide ? "password" : "text"}
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                  <div style={{marginLeft: "-30px", cursor: "pointer"}}>
                  {
                    passShowHide ? 
                    <div onClick={()=>setPassShowHide(!passShowHide)}>
                      <FaRegEye className="text-xl"></FaRegEye>
                    </div>
                    :
                    <div onClick={()=>setPassShowHide(!passShowHide)}>
                      <FaEyeSlash className="text-xl"></FaEyeSlash >
                    </div>
                  }
                  </div>
                  
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
              {/* Google Github login button  */}
            </form>
             <div className="mt-5">
                <GoogleGithubAuth></GoogleGithubAuth>
             </div>
  
            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Already a member?{' '}
              <Link to='/login' className="font-semibold text-indigo-600 hover:text-indigo-500">
                Login Now
              </Link>
            </p>
          </div>
        </div>


        <ToastContainer />
      </>
    )
  }
  