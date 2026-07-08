import React from 'react'

function Card({username = "Yash"}) {
    return (
        <div className="w-60 h-60 rounded-xl p-10 m-10">
          <img
            src="https://images.pexels.com/photos/3661695/pexels-photo-3661695.jpeg"
            alt="Giphy"
            className="rounded-t-xl"
          />
          <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10 p-10">
            <h1 className="font-bold  font-mono  text-xl p-5">{username}</h1>
          </div>
        </div>
    )
}

export default Card
