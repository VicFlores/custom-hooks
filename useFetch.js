import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {
    
    const isMonted = useRef(true)
    const [state, setstate] = useState({data: null, loading:true, error: null});

    useEffect(() => {

        return () => {
            isMonted.current = false;
        }
    }, [])

    useEffect(() => {
        
        setstate({data: null, loading:true, error: null});

        fetch(url)
            .then(res => res.json())
            .then(data => {

                if (isMonted.current) {

                    setstate({
                        loading: false,
                        error: null,
                        data
                    })
                }else {
                    console.log('SetState no se llamo');
                }   
            })

    }, [url])

    return state;
}
