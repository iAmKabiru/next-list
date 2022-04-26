import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1)
            router.push('/')
        }, 3000)
    }, [])

    return ( 
        <>
        <Head>
        <title>page not found</title>
      </Head> 
    
    <div>
        <h1>Page not found</h1>
    </div> 
    </>
    );
}
 
export default NotFound;