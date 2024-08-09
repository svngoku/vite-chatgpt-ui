import React, { Component, useEffect} from 'react';
import { Sparkles, FilePenLine, PanelRightClose, PanelRightOpen } from 'lucide-react';
import { Transition } from '@headlessui/react';
import Conversation from './conversation';
import NewChat from './new-chat';



const ChatInterface = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [isNewChat, setIsNewChat] = React.useState(true);
  
  const [message, setMessage] = React.useState('')
  const [aiMessage, setAiMessage] = React.useState('Initializing...')
  const [isTyping, setIsTyping] = React.useState(false)
  
  const [conversations, setConversations] = React.useState([{
    id: 1,
    title: "Social Media Strategy Guide",
    messages: [
      {
        id: 1,
        message: "Hi, I'm interested in your social media strategy. Can you provide me with some details on how you plan to use social media to build awareness and trust?",
        aiMessage: "I'd like to help you brother !",
      },
      {
        id: 2,
        message: "I'm a social media expert and I'm here to help. I'm always looking to improve my social media strategy and I'm always ready to share my thoughts and advice.",
        aiMessage: "Awesome! I'm always here to help. I'm always ready to share my thoughts and advice",
      },
    ]
  }, {
    id: 2,
    title: "Medical Bot Assistant",
    messages: [
      {
        id: 1,
        message: "Hi, I want to build a medical assistant with code base and logic.",
        aiMessage: "I'm your medical assistant and ready to serve you with"
      }
    ]
  }])

  const [conversation, setConversation] = React.useState(conversations[0]);

  const [currentConversation, setCurrentConversation] = React.useState(null);

  /**
   * Handles changes to the message input field.
   *
   * @param {object} e - The event object triggered by the input field change.
   * @return {void}
   */
  const onChangeMsg = (e) => {
    setMessage(e.target.value);
    if(message.length > 0) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }

  const hideSideBar = isSidebarOpen === true ? 'lg:flex' : '';

  const refreshPage = () => {
    window.location.reload();
  }

  const NavigeToConversation = (conv_id) => {
    setIsNewChat(false);
    const conversation = conversations.find(conversation => conversation.id === conv_id);
    if (conversation) {
      console.log(conversation);
      setCurrentConversation(conversation);
    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const addNewConversation = () => {

    // Create a new conversation array with a new id  
    const newConversation = {
      id: conversations.length + 1,
      title: `New Conversation ${conversations.length + 1}`,
      messages: [{
        id: 1,
        message: message,
        aiMessage: aiMessage
      }]
    };
    console.log("Add the current conversation")
    setConversations([...conversations, newConversation]);
    return newConversation
  }

  const handleSubmitMessage = (formData) => {
    try {
      setIsNewChat(false)
      let create = addNewConversation();
      setCurrentConversation(create);
    } catch (error) {
      console.error("Cannot create the conversation")
    }
  }

  useEffect(() => {
    console.log(conversations)
  }, [conversations, currentConversation]);

  return (
    <React.Fragment>
      <div className="relative z-0 flex h-full w-full">
        {
          isSidebarOpen === true ? (
            <Transition show={isSidebarOpen}>
              <div className={`border-1 relative mx-4 mt-4 ${hideSideBar} h-[95%] max-w-[18%] hidden flex-1 flex-col overflow-hidden rounded-xl border`}>
                <nav className="flex h-full w-full flex-col px-3">
                  <div className="flex justify-between h-14 items-center">
                      <span className="flex">
                        <button aria-label="Close sidebar" className="h-10 rounded-lg px-2 text-token-text-secondary focus-visible:outline-0 hover:bg-token-sidebar-surface-secondary focus-visible:bg-token-sidebar-surface-secondary" onClick={toggleSidebar}>
                          <PanelRightClose className="w-5 h-5" />
                        </button>
                      </span>
                      <span className="flex">
                        <button className="h-10 rounded-lg px-2 text-token-text-secondary focus-visible:outline-0 hover:bg-token-sidebar-surface-secondary focus-visible:bg-token-sidebar-surface-secondary" onClick={refreshPage}>
                          <FilePenLine className="w-5 h-5" />
                      </button>
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 pb-2 text-token-text-primary text-sm mt-2">
                    <div className="relative mt-5 first:mt-0 last:mb-5 h-auto opacity-1">
                      <div className="sticky top-0 z-20  rounded-lg">
                        <span className="flex h-9 items-center">
                          <h3 className="pb-2 pt-3 px-2 text-xs font-semibold text-ellipsis overflow-hidden break-all  bg-transparent">Recent Conversations</h3>
                        </span>
                      </div>
                      <ol>
                        {
                          conversations.map((conv, index) => (
                            <li className="relative z-[15] hover:cursor-pointer" style={{"opacity":"1","height":"auto"}} key={index}>
                              <div className="group relative rounded-lg active:opacity-90 hover:bg-token-sidebar-surface-secondary">
                                <div className="flex items-center gap-2 p-2" onClick={() => NavigeToConversation(conv.id)}>
                                  <div className="relative grow overflow-hidden whitespace-nowrap" dir="auto">
                                      {conv.title}
                                      <div className="from-token-sidebar-surface-secondary absolute bottom-0 top-0 w-10 from-60% to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r" />
                                    </div>
                                  </div>
                                <div className="absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0">
                                </div>
                              </div>
                            </li>
                          ))
                        }
                      </ol>
                    </div>
                  </div>
                  {/* <div className="flex flex-col py-2 empty:hidden dark:border-white/20 mt-[604px]">
                    <a href="#" className="group flex gap-2 p-2.5 text-sm cursor-pointer focus:ring-0 radix-disabled:pointer-events-none radix-disabled:opacity-50 group items-center hover:bg-token-sidebar-surface-secondary m-0 rounded-lg px-2">
                    <span className="flex w-full flex-row flex-wrap-reverse justify-between"
                        ><div className="flex items-center gap-2">
                          <span className="border-token-border-light flex h-7 w-7 items-center justify-center rounded-full border"
                            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon-sm shrink-0"><path fill="currentColor" d="M6.394 4.444c.188-.592 1.024-.592 1.212 0C8.4 8.9 9.1 9.6 13.556 10.394c.592.188.592 1.024 0 1.212C9.1 12.4 8.4 13.1 7.606 17.556c-.188.592-1.024.592-1.212 0C5.6 13.1 4.9 12.4.444 11.606c-.592-.188-.592-1.024 0-1.212C4.9 9.6 5.6 8.9 6.394 4.444m8.716 9.841a.41.41 0 0 1 .78 0c.51 2.865.96 3.315 3.825 3.826.38.12.38.658 0 .778-2.865.511-3.315.961-3.826 3.826a.408.408 0 0 1-.778 0c-.511-2.865-.961-3.315-3.826-3.826a.408.408 0 0 1 0-.778c2.865-.511 3.315-.961 3.826-3.826Zm2.457-12.968a.454.454 0 0 1 .866 0C19 4.5 19.5 5 22.683 5.567a.454.454 0 0 1 0 .866C19.5 7 19 7.5 18.433 10.683a.454.454 0 0 1-.866 0C17 7.5 16.5 7 13.317 6.433a.454.454 0 0 1 0-.866C16.5 5 17 4.5 17.567 1.317"></path></svg
                          ></span>
                          <div className="flex flex-col"><span>Add Team workspace</span><span className="text-token-text-tertiary line-clamp-1 text-xs">Collaborate on a Team plan</span></div>
                        </div></span>
                    </a>
                  </div> */}
                </nav>
              </div>
            </Transition>
          ) : (
            <span className="sm:flex hidden mt-6 mx-2">
              <button className="h-10 rounded-lg px-2 text-token-text-secondary focus-visible:outline-0 hover:bg-token-sidebar-surface-secondary focus-visible:bg-token-sidebar-surface-secondary" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <PanelRightOpen className="w-6 h-6" />
              </button>
            </span>
          )
        }
        <div className="border-1 relative mx-3 mt-4 flex h-[95%] max-w-full flex-1 flex-col overflow-hidden rounded-xl border">
            <main className="transition-width relative h-full w-full flex-1 overflow-auto">
              <div
                role="presentation"
                className="flex h-full flex-col focus-visible:outline-0"
                tabIndex={0}
              >
                {
                  isNewChat === true ? (
                     <NewChat
                        message={message}
                        setMessage={setMessage}
                      />
                  ) : (
                    <Conversation 
                      conversation={currentConversation}
                    />
                  )
                }
                <div className="md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent w-full">
                  <div className="w-full md:border-transparent md:pt-0 dark:border-white/20 md:dark:border-transparent">
                    <div className="m-auto px-3 text-base md:px-4 lg:px-1 xl:px-5">
                      <div className="mx-auto flex flex-1 gap-4 text-base md:max-w-3xl md:gap-5 lg:max-w-[40rem] lg:gap-6 xl:max-w-[48rem]">
                        <form
                          className="w-full"
                        >
                          <div className="relative flex h-full max-w-full flex-1 flex-col">
                            <div className="absolute bottom-full left-0 right-0 z-20">
                              <div className="relative h-full w-full">
                                <div className="flex flex-col gap-3.5 pb-3.5 pt-2" />
                              </div>
                            </div>
                            <div className="flex w-full items-center">
                              <div className="dark:bg-token-main-surface-secondary flex w-full flex-col gap-1.5 rounded-xl bg-[#f4f4f4] p-1.5 transition-colors">
                                <div className="flex items-end gap-1.5 md:gap-2">
                                  <div>
                                    <div className="flex flex-col">
                                      <input
                                        multiple
                                        type="file"
                                        tabIndex={-1}
                                        className="hidden"
                                        style={{ display: "none" }}
                                      />
                                      <button
                                        type="button"
                                        id="radix-:r46:"
                                        aria-haspopup="menu"
                                        aria-expanded="false"
                                        data-state="closed"
                                        className="text-token-text-primary dark:transparent hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-state-active:text-token-text-secondary radix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent m-0 inline-flex h-0 w-0 cursor-pointer items-center justify-center gap-1 rounded-lg border border-none border-transparent bg-transparent p-0 text-sm leading-none outline-none dark:bg-transparent"
                                      />
                                      <button
                                        className="text-token-text-primary mb-1 ml-1.5 flex h-8 w-8 items-center justify-center rounded-full focus-visible:outline-black dark:text-white dark:focus-visible:outline-white"
                                        aria-disabled="false"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          fill="none"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            fillRule="evenodd"
                                            d="M9 7a5 5 0 0 1 10 0v8a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v6a5 5 0 0 0 10 0V7a3 3 0 1 0-6 0v8a1 1 0 1 0 2 0V9a1 1 0 1 1 2 0v6a3 3 0 1 1-6 0z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </button>
                                      <div
                                      />
                                    </div>
                                  </div>
                                  <div className="flex min-w-0 flex-1 flex-col">
                                    <textarea
                                      id="prompt-textarea"
                                      tabIndex={0}
                                      data-id="root"
                                      dir="auto"
                                      rows={1}
                                      placeholder="Type a message..."
                                      className="text-token-text-primary m-0 max-h-52 sm:max-h-[25dvh] resize-none border-0 bg-transparent px-0 focus:ring-0 focus-visible:ring-0"
                                      style={{
                                        height: "40px",
                                        "overflowY": "hidden",
                                      }}
                                      defaultValue={message}
                                      onChange={onChangeMsg}
                                    />
                                  </div>
                                  <button
                                    className="disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary mb-1 me-1 flex h-8 w-8 items-center justify-center rounded-xl bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:bg-[#D7D7D7] disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white"
                                    type="button"
                                    onClick={handleSubmitMessage}
                                  >
                                    <Sparkles className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="text-token-text-secondary relative px-2 py-2 text-center text-xs md:px-[60px]">
                      <span>AI models are not smart as human are 🫡</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group absolute bottom-2 end-2 z-10 hidden gap-1 md:flex lg:bottom-3 lg:end-3">
                <button
                  className="border-token-border-light text-token-text-secondary flex h-6 w-6 items-center justify-center rounded-full border text-xs"
                  type="button"
                  id="radix-:r5:"
                >
                  ?
                </button>
              </div>
            </main>
          </div>
        </div>
    </React.Fragment>
  );
};


export default ChatInterface;