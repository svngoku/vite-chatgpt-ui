import React, {useEffect} from 'react'
import { Brain, Lamp, PlaneTakeoff, ChartCandlestick } from 'lucide-react';
import { Transition } from '@headlessui/react';

const ChatCard = ({
    icon,
    prompt,
    color,
    message,
    setMessage
}) => {

    const handleShareMessage = () => {
        setMessage(prompt);
    }

    return (
        <button className={`border-token-border-light shadow-xxs enabled:hover:bg-token-main-surface-secondary relative flex w-40 flex-col gap-2 rounded-2xl border hover:border-${color} px-3 pb-4 pt-3 text-start align-top text-[15px] transition disabled:cursor-not-allowed`} onClick={handleShareMessage}>
            {icon}
            <div className="break-word line-clamp-3 max-w-full text-balance text-gray-600 dark:text-gray-500">
                {prompt}
            </div>
        </button>
    )
}

export default function NewChat({
    message,
    setMessage
}) {
  const [isNewChat, isNewChatSet] = React.useState(false);
  const [chatPrompts, setChatPrompts] = React.useState([{
    icon: <Brain className="h-4 w-4 transition duration-300 ease-in data-[closed]:opacity-0 text-green-400" />,
    prompt: "Think a strory on a brain Washing for the stars.",
    color: "green-300"
  }, {
    icon: <Lamp className="h-4 w-4 transition duration-300 ease-in data-[closed]:opacity-0 text-blue-400" />,
    prompt: "Write a poem about a sunset.",
    color: "blue-200"
  }, {
    icon: <PlaneTakeoff className="h-4 w-4 transition duration-300 ease-in data-[closed]:opacity-0 text-orange-300" />,
    prompt: "A road trip to Texas with my daughter.",
    color: "orange-300"
  }, {
    icon: <ChartCandlestick className="h-4 w-4 transition duration-300 ease-in data-[closed]:opacity-0 text-red-400" />,
    prompt: "A financial report for a startup",
    color: "red-300"
  }]);
  
  return (
    <div className="flex-1 overflow-hidden">
        <div className="relative h-full">
            <div className="text-token-text-primary flex h-full flex-col items-center justify-center">
                <Transition show={isNewChat}>
                    <Brain className="h-16 w-16 transition duration-300 ease-in data-[closed]:opacity-0" />
                </Transition>
                {/* <button onClick={() => isNewChatSet((isNewChat) => !isNewChat)}>Toggle</button> */}
                <div style={{ opacity: "1" }}>
                    <div className="mx-3 mt-12 flex max-w-3xl flex-wrap items-stretch justify-center gap-4">
                        <div className="flex max-w-3xl flex-wrap items-stretch justify-center gap-4">
                            {
                                chatPrompts.map((chatPrompt, index) => (
                                    <ChatCard
                                        key={index}
                                        icon={chatPrompt.icon}
                                        prompt={chatPrompt.prompt}
                                        color={chatPrompt.color}
                                        message={message}
                                        setMessage={setMessage}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
  )
}
