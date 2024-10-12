import Button from "./ui/siginButton"
export default function Topbar(){

    return(
        <>
            <div className="w-screen  flex justify-between p-100  border-b-[0.5px] border-red-300 h-full items-center ">
            <h1 className="font-medium text-4xl">MAKERS</h1>
            <div className="gap-2 flex">
                <Button variant="signin" size="large"  onClick={()=>alert("hello you cliked me")}>
                    SIGNIN
                </Button >
                <Button variant="primary" size="large" onClick={() => alert("hello you cliked UP")}>
                        SIGNUP
                </Button>
            </div>
        </div>
        </>
    )
}