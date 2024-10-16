import React from 'react';

const Nav = ({ search, setSearch }) => {
  return (
    <div>
      <div className='bg-slate-500 w-[100%] h-30 grid grid-cols-2 justify-normal gap-7 items-center  ml-2'>
        <div className="w-[500px] mt-3 ml-32">
          <input
            type='text'
            placeholder='Search for products...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-[300px] h-[40px]  rounded-lg px-4  border-0'
          />
        </div>

        <div className="w-[400px] h-16 text-fuchsia-200 ml-auto">
          <p className="mt-5">Home | Shop | Categories | Sale | Accessories | About</p>
        </div>

</div>
    </div>
  );
}

export default Nav;
