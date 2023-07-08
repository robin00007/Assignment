import Image from 'next/image'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className='w-screen bg-white text-black h-screen flex flex-row'>
        <div className='w-2/5 bg-black text-white h-screen flex justify-center items-center'>Board.</div>
        <div className='w-3/5  text-black h-screen flex justify-center items-center'>
          <div className='w-1/2 h-3/4 bg-yellow-400 text-black flex flex-col justify-center items-center'>
            <div>Sign In</div>
            <div>Sign in to your account</div>
            <div className='flex flex-row'>
                 <div>Sign with google </div> 
                 <div>Sign in with Apple</div>
            </div>
            <div className='flex flex-col '>
              <label htmlFor="email">Email Address </label>
              <input type="text" value="" name="email"  />
            </div>
            <div className='flex flex-col '>
              <label htmlFor="password">Password</label>
              <input type="password " name="password "value=""/>
            </div>
            <p>Forgot password?</p>
            <button className='bg-black text-white w-1/2 '>Sign In</button>
            <p>Don't have an account? register here </p>
            
          </div>
        </div>
    </div>
    
  )
}
 