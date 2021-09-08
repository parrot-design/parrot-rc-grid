
import React ,{ useEffect, useState } from 'react'; 
import responsiveObserve , { ScreenMap  } from '../util/responsiveObserve';

const useBreakpoint=()=>{

    const [screens,setScreens]=useState<ScreenMap>({})

    useEffect(()=>{
        const subscribeId=responsiveObserve.subscribe((screen)=>{ 
            setScreens(screen)
        }) 
        return ()=>{
            responsiveObserve.unsubscribe(subscribeId);
        }
    },[]);

    return screens;
}

export default useBreakpoint;