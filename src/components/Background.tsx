const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="absolute top-[-10%] right-[-10%] h-125 w-1256 rounded-full 
        bg-blue-400/20 blur-[100px] 
        dark:bg-blue-500/20 dark:opacity-50" />
      
      <div className="absolute top-[20%] left-[-5%] h-100 w-100 rounded-full 
        bg-purple-400/20 blur-[100px] 
        dark:bg-purple-500/20 dark:opacity-50" />
      
      <div className="absolute bottom-[10%] right-[0%] h-75 w-57 rounded-full 
        bg-cyan-400/20 blur-[80px] 
        dark:bg-cyan-500/20 dark:opacity-50" />

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default Background;