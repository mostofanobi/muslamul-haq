// 'use client';
// import React, { useEffect, useState } from 'react';
// import { BiLoaderCircle } from 'react-icons/bi';
// import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
// import { useTheme } from 'next-themes';
// const ThemeSwitch = () => {
//   const [mounted, setMounted] = useState(false);
//   const { setTheme, resolvedTheme } = useTheme();
//   useEffect(() => setMounted(true), []);
//   const handleThemeSwitch = () => {
//     setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
//   };
//   const renderIcon = (IconComponent, additionalClasses = '') => (
//     <IconComponent
//       className={`absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all ${additionalClasses}`}
//     />
//   );
//   return (
//     <button
//       onClick={handleThemeSwitch}
//       className='group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-dark text-white ring-0 ring-black/20 transition hover:ring-4 dark:bg-white dark:text-dark dark:ring-white/30'
//     >
//       {!mounted ? (
//         <BiLoaderCircle className='animate-spin' />
//       ) : (
//         <>
//           {resolvedTheme === 'light' ? (
//             <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           ) : (
//             <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           )}
//           <div className='absolute left-[-25%] top-[125%] -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-1/2 group-hover:top-1/2'>
//             {resolvedTheme === 'light' ? (
//               <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             ) : (
//               <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             )}
//           </div>
//         </>
//       )}
//     </button>
//   );
// };
// export default ThemeSwitch;
'use client';

import React, { useEffect, useState } from 'react';
import { BiLoaderCircle } from 'react-icons/bi';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useTheme } from 'next-themes';

// 'use client';
// import React, { useEffect, useState } from 'react';
// import { BiLoaderCircle } from 'react-icons/bi';
// import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
// import { useTheme } from 'next-themes';
// const ThemeSwitch = () => {
//   const [mounted, setMounted] = useState(false);
//   const { setTheme, resolvedTheme } = useTheme();
//   useEffect(() => setMounted(true), []);
//   const handleThemeSwitch = () => {
//     setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
//   };
//   const renderIcon = (IconComponent, additionalClasses = '') => (
//     <IconComponent
//       className={`absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all ${additionalClasses}`}
//     />
//   );
//   return (
//     <button
//       onClick={handleThemeSwitch}
//       className='group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-dark text-white ring-0 ring-black/20 transition hover:ring-4 dark:bg-white dark:text-dark dark:ring-white/30'
//     >
//       {!mounted ? (
//         <BiLoaderCircle className='animate-spin' />
//       ) : (
//         <>
//           {resolvedTheme === 'light' ? (
//             <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           ) : (
//             <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           )}
//           <div className='absolute left-[-25%] top-[125%] -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-1/2 group-hover:top-1/2'>
//             {resolvedTheme === 'light' ? (
//               <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             ) : (
//               <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             )}
//           </div>
//         </>
//       )}
//     </button>
//   );
// };
// export default ThemeSwitch;

// 'use client';
// import React, { useEffect, useState } from 'react';
// import { BiLoaderCircle } from 'react-icons/bi';
// import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
// import { useTheme } from 'next-themes';
// const ThemeSwitch = () => {
//   const [mounted, setMounted] = useState(false);
//   const { setTheme, resolvedTheme } = useTheme();
//   useEffect(() => setMounted(true), []);
//   const handleThemeSwitch = () => {
//     setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
//   };
//   const renderIcon = (IconComponent, additionalClasses = '') => (
//     <IconComponent
//       className={`absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all ${additionalClasses}`}
//     />
//   );
//   return (
//     <button
//       onClick={handleThemeSwitch}
//       className='group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-dark text-white ring-0 ring-black/20 transition hover:ring-4 dark:bg-white dark:text-dark dark:ring-white/30'
//     >
//       {!mounted ? (
//         <BiLoaderCircle className='animate-spin' />
//       ) : (
//         <>
//           {resolvedTheme === 'light' ? (
//             <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           ) : (
//             <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           )}
//           <div className='absolute left-[-25%] top-[125%] -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-1/2 group-hover:top-1/2'>
//             {resolvedTheme === 'light' ? (
//               <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             ) : (
//               <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             )}
//           </div>
//         </>
//       )}
//     </button>
//   );
// };
// export default ThemeSwitch;

// 'use client';
// import React, { useEffect, useState } from 'react';
// import { BiLoaderCircle } from 'react-icons/bi';
// import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
// import { useTheme } from 'next-themes';
// const ThemeSwitch = () => {
//   const [mounted, setMounted] = useState(false);
//   const { setTheme, resolvedTheme } = useTheme();
//   useEffect(() => setMounted(true), []);
//   const handleThemeSwitch = () => {
//     setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
//   };
//   const renderIcon = (IconComponent, additionalClasses = '') => (
//     <IconComponent
//       className={`absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all ${additionalClasses}`}
//     />
//   );
//   return (
//     <button
//       onClick={handleThemeSwitch}
//       className='group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-dark text-white ring-0 ring-black/20 transition hover:ring-4 dark:bg-white dark:text-dark dark:ring-white/30'
//     >
//       {!mounted ? (
//         <BiLoaderCircle className='animate-spin' />
//       ) : (
//         <>
//           {resolvedTheme === 'light' ? (
//             <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           ) : (
//             <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           )}
//           <div className='absolute left-[-25%] top-[125%] -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-1/2 group-hover:top-1/2'>
//             {resolvedTheme === 'light' ? (
//               <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             ) : (
//               <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             )}
//           </div>
//         </>
//       )}
//     </button>
//   );
// };
// export default ThemeSwitch;

// 'use client';
// import React, { useEffect, useState } from 'react';
// import { BiLoaderCircle } from 'react-icons/bi';
// import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
// import { useTheme } from 'next-themes';
// const ThemeSwitch = () => {
//   const [mounted, setMounted] = useState(false);
//   const { setTheme, resolvedTheme } = useTheme();
//   useEffect(() => setMounted(true), []);
//   const handleThemeSwitch = () => {
//     setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
//   };
//   const renderIcon = (IconComponent, additionalClasses = '') => (
//     <IconComponent
//       className={`absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all ${additionalClasses}`}
//     />
//   );
//   return (
//     <button
//       onClick={handleThemeSwitch}
//       className='group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-dark text-white ring-0 ring-black/20 transition hover:ring-4 dark:bg-white dark:text-dark dark:ring-white/30'
//     >
//       {!mounted ? (
//         <BiLoaderCircle className='animate-spin' />
//       ) : (
//         <>
//           {resolvedTheme === 'light' ? (
//             <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           ) : (
//             <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           )}
//           <div className='absolute left-[-25%] top-[125%] -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-1/2 group-hover:top-1/2'>
//             {resolvedTheme === 'light' ? (
//               <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             ) : (
//               <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             )}
//           </div>
//         </>
//       )}
//     </button>
//   );
// };
// export default ThemeSwitch;

// 'use client';
// import React, { useEffect, useState } from 'react';
// import { BiLoaderCircle } from 'react-icons/bi';
// import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
// import { useTheme } from 'next-themes';
// const ThemeSwitch = () => {
//   const [mounted, setMounted] = useState(false);
//   const { setTheme, resolvedTheme } = useTheme();
//   useEffect(() => setMounted(true), []);
//   const handleThemeSwitch = () => {
//     setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
//   };
//   const renderIcon = (IconComponent, additionalClasses = '') => (
//     <IconComponent
//       className={`absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all ${additionalClasses}`}
//     />
//   );
//   return (
//     <button
//       onClick={handleThemeSwitch}
//       className='group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-dark text-white ring-0 ring-black/20 transition hover:ring-4 dark:bg-white dark:text-dark dark:ring-white/30'
//     >
//       {!mounted ? (
//         <BiLoaderCircle className='animate-spin' />
//       ) : (
//         <>
//           {resolvedTheme === 'light' ? (
//             <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           ) : (
//             <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           )}
//           <div className='absolute left-[-25%] top-[125%] -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-1/2 group-hover:top-1/2'>
//             {resolvedTheme === 'light' ? (
//               <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             ) : (
//               <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             )}
//           </div>
//         </>
//       )}
//     </button>
//   );
// };
// export default ThemeSwitch;

// 'use client';
// import React, { useEffect, useState } from 'react';
// import { BiLoaderCircle } from 'react-icons/bi';
// import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
// import { useTheme } from 'next-themes';
// const ThemeSwitch = () => {
//   const [mounted, setMounted] = useState(false);
//   const { setTheme, resolvedTheme } = useTheme();
//   useEffect(() => setMounted(true), []);
//   const handleThemeSwitch = () => {
//     setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
//   };
//   const renderIcon = (IconComponent, additionalClasses = '') => (
//     <IconComponent
//       className={`absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all ${additionalClasses}`}
//     />
//   );
//   return (
//     <button
//       onClick={handleThemeSwitch}
//       className='group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-dark text-white ring-0 ring-black/20 transition hover:ring-4 dark:bg-white dark:text-dark dark:ring-white/30'
//     >
//       {!mounted ? (
//         <BiLoaderCircle className='animate-spin' />
//       ) : (
//         <>
//           {resolvedTheme === 'light' ? (
//             <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           ) : (
//             <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           )}
//           <div className='absolute left-[-25%] top-[125%] -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-1/2 group-hover:top-1/2'>
//             {resolvedTheme === 'light' ? (
//               <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             ) : (
//               <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             )}
//           </div>
//         </>
//       )}
//     </button>
//   );
// };
// export default ThemeSwitch;

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { BiLoaderCircle } from 'react-icons/bi';
// import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

// import { useTheme } from 'next-themes';

// const ThemeSwitch = () => {
//   const [mounted, setMounted] = useState(false);
//   const { setTheme, resolvedTheme } = useTheme();

//   useEffect(() => setMounted(true), []);

//   const handleThemeSwitch = () => {
//     setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
//   };

//   const renderIcon = (IconComponent, additionalClasses = '') => (
//     <IconComponent
//       className={`absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all ${additionalClasses}`}
//     />
//   );

//   return (
//     <button
//       onClick={handleThemeSwitch}
//       className='group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-dark text-white ring-0 ring-black/20 transition hover:ring-4 dark:bg-white dark:text-dark dark:ring-white/30'
//     >
//       {!mounted ? (
//         <BiLoaderCircle className='animate-spin' />
//       ) : (
//         <>
//           {resolvedTheme === 'light' ? (
//             <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           ) : (
//             <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
//           )}
//           <div className='absolute left-[-25%] top-[125%] -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-1/2 group-hover:top-1/2'>
//             {resolvedTheme === 'light' ? (
//               <BsMoonStarsFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             ) : (
//               <BsSunFill className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all' />
//             )}
//           </div>
//         </>
//       )}
//     </button>
//   );
// };

// export default ThemeSwitch;

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className='group pointer-events-auto relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-dark text-white ring-0 ring-black/20 transition hover:ring-4 dark:bg-white dark:text-dark dark:ring-white/30'
    >
      {!mounted ? (
        <BiLoaderCircle className='animate-spin' />
      ) : (
        <>
          {resolvedTheme === 'light' ? (
            <FiSun className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
          ) : (
            <FiMoon className='absolute left-1/2 top-1/2 inline-block h-4 w-4 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-[115%] group-hover:top-[-15%]' />
          )}
          <div className='absolute left-[-25%] top-[125%] -translate-x-1/2 -translate-y-1/2 transition-all group-hover:left-1/2 group-hover:top-1/2'>
            {resolvedTheme === 'light' ? (
              <FiMoon className='h-4 w-4' />
            ) : (
              <FiSun className='h-4 w-4' />
            )}
          </div>
        </>
      )}
    </button>
  );
};

export default ThemeSwitch;
