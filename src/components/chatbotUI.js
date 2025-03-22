
export default function ChatbotUI({messages}){

    return (
        <>
            <div className={"flex flex-col h-100 w-80 bg-dark-500 shadow rounded-lg"}>
                <div className={"flex p-2 items-center bg-dark-700 h-15  border-b-0 rounded-t-lg "}>
                    <span className={"text-white font-bold"}>Ben-Bot</span>
                </div>
                <div className={"flex flex-col p-2 items-center h-70 overflow-y-scroll no-scrollbar"}>
                    {
                        messages.map((message, index) => {
                            return (
                                <div className={"w-full"} key={index}><MessageBox message={message.text}
                                                                                  role={message.role}/></div>
                            )
                        })
                    }
                </div>
                <div className={"flex p-2 items-center  h-15  border-b-0 rounded-b-lg "}>
                    <input placeholder={"enter message"}
                           className={"p-2 bg-dark-700 focus:border-0 focus:outline-0 rounded-lg w-full h-10"}/>
                </div>

            </div>

        </>
    )
}


const MessageBox = ({message, role}) => {

    return (
        <div className={`my-2  w-full h-10 rounded-lg p-2 ${role === "model" ? "bg-dark-700" : "bg-primary-4/20"}`}>
            <span className={"text-sm"}>{message}</span>
        </div>

    )
}