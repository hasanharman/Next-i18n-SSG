function PersonInfoModal({ setOpenAdd, person }) {
  console.log("heysad", person);
  return (
    <div className="absolute top-[50%] left-[25%] bg-white w-[50vw] shadow-xl rounded-md border-gray-500 border">
      <div className="flex flex-col justify-center items-center gap-1 py-5">
        <div className="flex flex-col px-10 w-full">
          <div className="flex justify-end items-center mb-3">
            <button className="text-black" onClick={() => setOpenAdd(false)}>
              X
            </button>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <div className="flex-1">
              <img
                src={person.photo}
                alt={person.name}
                className="mx-auto mb-4 h-64 w-64 rounded-full object-cover object-top"
              />
            </div>
            <div className="flex-2">
              <h1>{person.name}</h1>
              <p>{person.title}</p>
              <p>{person.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonInfoModal;
