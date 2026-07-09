import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "10123456789"
    if (charAllow) str += "!@#$%^&*()_-+=[]{}`"

    for ( let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

      setPassword(pass)
    }
  }, [length, numAllow, charAllow, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordGenerator()}, [length, numAllow, charAllow, passwordGenerator])

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-black flex items-center justify-center px-4">
    <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">
          🔐 Password Generator
        </h1>
        <p className="text-gray-300 mt-2 text-sm">
          Generate secure and random passwords instantly.
        </p>
      </div>

      {/* Password Box */}
      <div className="flex overflow-hidden rounded-2xl shadow-lg mb-8 border border-gray-600">
        <input
          type="text"
          value={password}
          placeholder="Your Password"
          readOnly
          ref={passwordRef}
          className="w-full bg-gray-900 text-green-400 font-mono text-lg px-4 py-4 outline-none"
        />

        <button
          onClick={copyPasswordToClipboard}
          className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all duration-200 text-white px-6 font-semibold"
        >
          Copy
        </button>
      </div>

      {/* Controls */}
      <div className="space-y-6">

        {/* Length */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white font-medium">
              Password Length
            </span>

            <span className="text-indigo-400 font-bold">
              {length}
            </span>
          </div>

          <input
            type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full accent-indigo-500 cursor-pointer"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex justify-between">

          <label className="flex items-center gap-2 cursor-pointer text-white">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              onChange={() => setNumAllow((prev) => !prev)}
              className="w-5 h-5 accent-indigo-500"
            />
            Numbers
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-white">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              onChange={() => setCharAllow((prev) => !prev)}
              className="w-5 h-5 accent-indigo-500"
            />
            Symbols
          </label>

        </div>

      </div>
    </div>
  </div>
)}

export default App
