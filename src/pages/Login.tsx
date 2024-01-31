import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="main">
      <div className="flex justify-around items-center">
        <div className="hidden md:flex  md:py-2">
          {/* side galery start */}
          <img src="/g1.png" alt="sunset" width={350} height={600} />
        </div>
        {/* side galery end */}
        {/* signup form start */}
        <div className="py-2 md:py-4 md:px-10 items-center">
          <div className="flex-col px-7 py-5 border-2 border-gray-300 rounded-lg shadow-lg shadow-gray-500">
            <div className="text-center leading-10 text-2xl font-extrabold tracking-wider my-0.5">
              Login page
            </div>
            <div className="py-4">
              <div className="text-center text-sm font-light text-gray-600">
                Don't have an account?
                <Link to="/signup" className="px-1.5 text-blue-600 font-light">
                  Signup
                </Link>
              </div>
            </div>
            <div className="my-1 border-b-2 border-gray-300" />
            {/* Google button start */}
            <div className="py-3">
              <button className="min-w-full border rounded-xl border-gray-300 flex-row justify-center bg-white text-black">
                <div className="flex h-8 items-center">
                  <div className="flex m-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="w-5 h-5"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      ></path>
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      ></path>
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-light text-center justify-center truncate mx-1">
                    Login with Google
                  </div>
                </div>
              </button>
            </div>
            {/* Google button end */}
            {/* Facebook button start */}
            <div className="py-3">
              <button className="min-w-full border rounded-xl border-gray-300 flex-row justify-center bg-white text-black">
                <div className="flex h-8 items-center">
                  <div className="flex m-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 40 40 "
                      className="w-5 h-5"
                    >
                      <linearGradient
                        id="a"
                        x1="-277.375"
                        x2="-277.375"
                        y1="406.6018"
                        y2="407.5726"
                        gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#0062e0" />
                        <stop offset="1" stop-color="#19afff" />
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
                      />
                      <path
                        fill="#fff"
                        d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
                      />
                    </svg>
                  </div>
                  <div className="font-light text-center justify-center truncate mx-1">
                    Login with Facebook
                  </div>
                </div>
              </button>
            </div>
            {/* Facebook button end */}
            {/* Apple button start */}
            <div className="py-3">
              <button className="min-w-full border rounded-xl border-gray-300 flex-row justify-center bg-white text-black">
                <div className="flex h-8 items-center">
                  <div className="flex m-3">
                    <svg
                      viewBox="0 0 256 315"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                      className="w-5 h-5"
                    >
                      <path
                        d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                        fill="#000000"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-light text-center justify-center truncate mx-1">
                    Login with Apple
                  </div>
                </div>
              </button>
            </div>
            {/* Apple button end */}
            {/* or start */}
            <div className="flex items-center justify-center w-full">
              <div className="my-1 border-b-2 border-gray-300 border-1 w-full" />
              <div className="px-2">Or</div>
              <div className="my-1 border-b-2 border-gray-300 border-1 w-full" />
            </div>
            {/* or end */}
            {/* email form start */}
            <div className="w-full">
              <form>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  Email address
                </label>
                <input
                  className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                  id="email"
                  required
                />
                <label
                  htmlFor="password"
                  className="text-base font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  className="flex h-8 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Password"
                  id="password"
                  required
                />
                <div className="flex w-full justify-center">
                  <button
                    type="submit"
                    className="items-center py-1 px-3.5 text-black bg-gray-400 rounded-md mx-4 my-2"
                  >
                    {/*      font-semibold leading-7  hover:bg-primary/80*/}
                    Login
                  </button>
                </div>
              </form>
            </div>
            {/* email form end */}
          </div>
        </div>
        {/* signup form end */}
      </div>
    </main>
  );
}
