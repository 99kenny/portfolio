import { useTheme } from 'next-themes'

export default function DarkModeToggleBtn(){
    const { theme, setTheme } = useTheme()
    //theme : 현재 설정 테마
    
    return (
        <>
            <button className="inline-flex items-center 
            bg-black dark:bg-gray-200 
            text-white dark:text-black
            hover:text-gray-500 dark:hover:text-orange-500
            border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 "
            onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? 'Light' : 'Dark'}
            </button>
        </>
    );
 }