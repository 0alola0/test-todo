import {useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {

  const[savedTasks, setsavedTasks] = useState(()=>{
      try{
          const localTaskValue = window.localStorage.getItem(key)
          return localTaskValue? JSON.parse(localTaskValue) : initialValue
      }
      catch(err){
          console.log(err)
          return initialValue
      }
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(savedTasks))
  }, [key,savedTasks]);

  return [savedTasks, setsavedTasks];
}

export default useLocalStorage;