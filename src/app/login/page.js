'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login =()=>{
    const router =useRouter();
    const navigation=(name)=>{
        return router.push('login/'+name);
    }
    return (
        <>
        <h1>hello from login page</h1>
        <button onClick={()=>navigation("faculty")}>Faculty</button>
        <br/>
        <button onClick={()=>navigation("student")}>Student</button>
        <br/>
        <Link href="/">go to home</Link>
        </>
    )
}
export default Login;