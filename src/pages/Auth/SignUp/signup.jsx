import React from 'react'

function Signup() {
  return (
    <div>
        <div className="form-wrapper min-h-screen [ p-4 md:p-6 lg:p-8 ] [ flex justify-center items-center ]">
            <form className="signup-form max-w-sm rounded-2xl text-[#1A2421] backdrop-blur-lg [ p-8 md:p-10 lg:p-10 ] [ bg-gradient-to-b from-white/60 to-white/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ]">
             <h3 className="mb-1 text-md text-[#1A2421]/80">SignUp Required</h3>
                <h1 className="mb-6 uppercase font-bold [ text-xl md:text-2xl lg:text-2xl ]">Register for Free</h1>
                <p className="mb-6
              [ text-sm text-[#1A2421]/70 text-opacity-50 ]">Enter your valid email and password for fields below</p>

<label
         for="email"
         className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]">

    <svg className="label-icon 
                transition pointer-events-none
                [ w-6 h-6 ] 
                [ absolute top-1/2 left-3 ] 
                [ transform -translate-y-1/2 ]">
      ...
    </svg>
    <input 
      className="form-input 
             block w-full rounded-lg leading-none
             focus:outline-none placeholder-black/50 
             [ transition-colors duration-200 ] 
             [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
             [ bg-black/20 focus:bg-black/25 ] 
             [ text-[#333] focus:text-black ]" 
      type="email" name="email" id="email" placeholder="Email" />
  </label>
  <button
    class="form-input w-full rounded-lg font-bold text-white focus:outline-none
           [ p-3 md:p-4 lg:p-4 ] 
           [ transition-colors duration-500 ] 
           [ bg-blue-800 hover:bg-blue-700 ]">Continue
           </button>


           <div class="form-footer mt-8 text-center">
    <p class="text-xs">...</p>
      <ul class="form-list mt-4 flex justify-center">
      <li class="mx-1">
        <a href="#"
           class="rounded-full bg-[#DB4437] hover:shadow-lg
                  [ transform transition hover:-translate-y-1 ]
                  [ w-10 h-10 ]
                  [ flex justify-center items-center ]">
          <svg class="[ w-3 h-3 ] fill-white">...</svg>
        </a>
      </li>
      ...
    </ul>
  </div>



  </form>
        </div>
    </div>
  )
}

export default Signup