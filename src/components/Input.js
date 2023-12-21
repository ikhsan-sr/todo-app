import { useState } from 'react';

const Input = ({ refetch }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  }

  const handleAdd = () => {
    let payload = new FormData();

    payload.append('name', value);
    payload.append('due_date', '1999-9-9');

    fetch(`${process.env.apiURL}/api/task`, { method: 'POST', body: payload })
      .then(res => {
        refetch();
        setValue('');
      })
  }

  return (
    <>
      <input 
        value={value}
        onChange={handleChange}
        placeholder="What do you need to do..."
        className="w-10/12 my-5 px-5 py-2 outline-none rounded-xl"
      />
      <button 
        onClick={handleAdd}
        className="w-2/12 justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-xl outline-none transition duration-100 px-5 py-2 ml-[-20px]"
      >
          Add
      </button>
    </>
  )
}

export default Input