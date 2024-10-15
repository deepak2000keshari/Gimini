import React,{createContext, useState,useEffect} from 'react'
import run from '../components/AI/Api';
export const Context = createContext();

const ContextProvider = (props) => {

    const onSend = async (prompt)=> {
      Setresult('');
      SetLoading('');
      if(input || prompt) {
         const temp = input ? input : prompt;
        // input ? SetprevInput(input) : SetprevInput(prompt);
        SetLoading(true);
        SetShowState(true);
        Setnewchat(false);
        SetprevInput(temp);
        const recentTem = [...recent,input];
        input && setRecent(recentTem);
        Setresult(await run(temp));
        SetInput('');
        console.log(recent);
      } else {
        console.log("Wrong");
      }
    }
    const card = async (prompt) => {
        SetInput(prompt);
        Setmount(true);
    }
    
    const [input,SetInput] = useState('');
    const [prevInput,SetprevInput] = useState('');
    const [recent,setRecent] = useState([]);
    const [send,Setsend] = useState(false);
    const [result,Setresult] = useState('');
    const [loading,SetLoading] = useState(false);
    const [showState,SetShowState] = useState(false);
    const [newChat,Setnewchat] = useState(false);
    const [mount,Setmount] = useState(false);


    const contextValue = {
        onSend,
        input,
        SetInput,
        result,
        Setresult,
        loading,
        SetLoading,
        showState,
        SetShowState,
        send,
        Setsend,
        prevInput,
        recent,
        newChat,
        Setnewchat,
        card,
        mount,
        Setmount
    };
    return (
        <Context.Provider value= {contextValue}>
          {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
