import { useState } from "react";
import * as authUtils from "./utils/auth-utils";
import * as validationUtils from "./utils/validation-utils";
import type { FieldStateProps } from "./utils/validation-utils";

type State = {
  email: FieldStateProps;
  password: FieldStateProps;
  isLoggedIn?: boolean;
  authErrorMessage?: string;
  userName?: string;
};

const DEFAULT_STATE: State = {
  email: {
    value: ""
  },
  password: {
    value: ""
  },
};

export default function App() {
  const [state, setState] = useState<State>(DEFAULT_STATE);

  function onTextChange(e: any) {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: { value }
    });
  };

  function onSubmit() {
    if (validateForm()) {
      const user = authUtils.loginUser(state.email.value, state.password.value);
      if (user) {
        setState({
          ...DEFAULT_STATE,
          isLoggedIn: true,
          userName: user.name
        });
      } else {
        setState({
          ...state,
          authErrorMessage: "Invalid email or password."
        });
      }
    }
  }

  function validateForm(): boolean {
    const emailValidation = validationUtils.validateEmail(state.email.value);
    const passwordValidation = validationUtils.validatePassword(state.password.value);
    if (emailValidation.isInvalid || passwordValidation.isInvalid) {
      setState({
        email: emailValidation,
        password: {
          ...passwordValidation,
        }
      });
      return false;
    }
    return true;
  }

  return !state.isLoggedIn ? (
      <div className="flex min-h-full flex-col bg-white md:bg-gray-100 pt-[70px]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-center text-3xl/9 text-indigo-600 font-bold tracking-tight">
            Solum Clinic
          </h1>
        </div>

        <div className="md:mt-10 sm:mx-auto sm:w-full sm:max-w-md md:shadow-lg px-10 pt-10 pb-[60px] rounded-md bg-white">
          <h2 className="mb-8 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          {state.authErrorMessage && <div className="p-4 mb-4 text-sm text-red-700 rounded-md bg-red-100" role="alert">
            <span className="font-medium">Oops!</span> {state.authErrorMessage}
          </div>}
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={state.email.value}
                  onChange={onTextChange}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <p v-if={state.email.isInvalid} className="mt-2.5 text-sm text-red-500">{ state.email.errorMessage }</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={state.password.value}
                  onChange={onTextChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {state.password.isInvalid && <p className="mt-2.5 text-sm text-red-500">{ state.password.errorMessage }</p>}
              </div>
              <div className="text-sm mt-3 flex justify-end">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={onSubmit}
                className="flex w-full justify-center cursor-pointer rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    ): (
      <div className="flex min-h-full flex-col bg-white md:bg-gray-100 pt-[70px]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-center text-3xl/9 text-indigo-600 font-bold tracking-tight">
            Solum Clinic
          </h1>
        </div>

        <div className="md:mt-10 sm:mx-auto sm:w-full sm:max-w-md md:shadow-lg px-10 pt-10 pb-[60px] rounded-md bg-white">
          <h2 className="mb-8 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Welcome {state.userName}, you are logged in!
          </h2>
          <button
            onClick={() => setState(DEFAULT_STATE)}
            className="flex w-full justify-center cursor-pointer rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Logout
          </button>
        </div>
      </div>
    )
}