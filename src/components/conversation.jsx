import React from 'react'
import { Brain } from 'lucide-react';
import AIWriter from "react-aiwriter";


export default function Conversation({
    conversation
}) {
  return (
        <div className="flex-3 overflow-x-hidden no-scrollbar" key={conversation?.id}>
            <div className="fixed group flex mt-0 z-40 cursor-pointer items-center gap-1 rounded-lg py-1.5 mx-2 px-3 text-lg font-semibold  radix-state-open:bg-token-main-surface-secondary text-token-text-secondary overflow-hidden whitespace-nowrap w-[77.5%] backdrop-blur-sm">
                <div className="text-token-text-secondary">{conversation?.title}</div>
            </div>
            <div className="h-full mt-4">
                <div className="h-[799px]">
                   {
                    conversation?.messages?.map((message, index) => (
                        <div className="react-scroll-to-bottom--css-prgpv-1n7m0yu" key={message.id}>
                            <div className="flex flex-col text-sm md:pb-9">
                                <div className="h-1.5" />
                                <div className="text-token-text-primary w-full">
                                    <div className="m-auto px-3 py-[18px] text-base md:px-5 lg:px-1 xl:px-5">
                                        <div className="mx-auto flex flex-1 gap-4 text-base md:max-w-3xl md:gap-5 lg:max-w-[40rem] lg:gap-6 xl:max-w-[48rem]">
                                            <div className="group/conversation-turn relative flex w-full min-w-0 flex-col">
                                            <div className="flex-col gap-1 md:gap-3">
                                                <div className="flex max-w-full flex-grow flex-col">
                                                <div data-message-author-role="user" data-message-id="aaa2bd58-3596-4f42-9a69-6ecb6dfb81e7" dir="auto" className="text-message [.text-message+&]:mt-5 flex min-h-[20px] w-full flex-col items-end gap-2 overflow-x-auto whitespace-pre-wrap break-words">
                                                    <div className="flex w-full flex-col items-end gap-1 empty:hidden rtl:items-start">
                                                    <div className="dark:bg-token-main-surface-secondary relative max-w-[70%] rounded-3xl bg-[#f4f4f4] px-5 py-2.5">
                                                        <div>{message.message}</div>
                                                        <div className="[.group\/conversation-turn:hover_&]:block absolute bottom-0 right-full top-0 -mr-3.5 hidden pr-5 pt-1">
                                                        <span className data-state="closed"><button aria-label="Edit message" className="text-token-text-secondary hover:bg-token-main-surface-tertiary flex h-9 w-9 items-center justify-center rounded-full transition">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon-md"><path fill="currentColor" fillRule="evenodd" d="M13.293 4.293a4.536 4.536 0 1 1 6.414 6.414l-1 1-7.094 7.094A5 5 0 0 1 8.9 20.197l-4.736.79a1 1 0 0 1-1.15-1.151l.789-4.736a5 5 0 0 1 1.396-2.713zM13 7.414l-6.386 6.387a3 3 0 0 0-.838 1.628l-.56 3.355 3.355-.56a3 3 0 0 0 1.628-.837L16.586 11zm5 2.172L14.414 6l.293-.293a2.536 2.536 0 0 1 3.586 3.586z" clipRule="evenodd" /></svg></button></span>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="text-token-text-primary w-full" dir="auto" data-testid="conversation-turn-3">
                                <div className="m-auto px-3 py-[18px] text-base md:px-5 lg:px-1 xl:px-5">
                                    <div className="mx-auto flex flex-1 gap-4 text-base md:max-w-3xl md:gap-5 lg:max-w-[40rem] lg:gap-6 xl:max-w-[48rem]">
                                        <div className="relative flex flex-shrink-0 flex-col items-end">
                                            <div>
                                                <div className="pt-0">
                                                        <div className="bg-token-main-surface-primary text-token-text-primary relative flex h-8 w-8 items-center justify-center rounded-sm p-1">
                                                            <Brain className="h-4 w-4" />
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group/conversation-turn agent-turn relative flex w-full min-w-0 flex-col">
                                            <div className="flex-col gap-1 md:gap-3">
                                                <div className="flex max-w-full flex-grow flex-col">
                                                    <div data-message-author-role="assistant" data-message-id="7777f6db-4456-4e97-9ff1-ef7ad8503728" dir="auto" className="text-message [.text-message+&]:mt-5 flex min-h-[20px] w-full flex-col items-end gap-2 overflow-x-auto whitespace-pre-wrap break-words">
                                                        <div className="flex w-full flex-col gap-1 first:pt-[3px] empty:hidden">
                                                            <div className="markdown prose dark:prose-invert light w-full break-words">
                                                                <p style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                                                                    {message.aiMessage}
                                                                </p>
                                                            </div>  
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="-ml-2 mt-1 flex gap-3 empty:hidden">
                                                <div className="bg-token-main-surface-primary md:border-token-border-light z-10 -mt-1 items-center justify-start rounded-xl p-1 md:absolute md:hidden md:border">
                                                    <div className="flex items-center">
                                                    <span className data-state="closed"><button className="text-token-text-secondary hover:bg-token-main-surface-secondary rounded-lg">
                                                        <span className="flex h-[30px] w-[30px] items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon-md-heavy"><path fill="currentColor" fillRule="evenodd" d="M11 4.91a.5.5 0 0 0-.838-.369L6.676 7.737A1 1 0 0 1 6 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 1 .676.263l3.486 3.196A.5.5 0 0 0 11 19.09zM8.81 3.067C10.415 1.597 13 2.735 13 4.91v14.18c0 2.175-2.586 3.313-4.19 1.843L5.612 18H4a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1.611zm11.507 3.29a1 1 0 0 1 1.355.401A10.96 10.96 0 0 1 23 12c0 1.85-.458 3.597-1.268 5.13a1 1 0 1 1-1.768-.934A8.96 8.96 0 0 0 21 12a8.96 8.96 0 0 0-1.085-4.287 1 1 0 0 1 .402-1.356M15.799 7.9a1 1 0 0 1 1.4.2 6.48 6.48 0 0 1 1.3 3.9c0 1.313-.39 2.537-1.06 3.56a1 1 0 0 1-1.673-1.096A4.47 4.47 0 0 0 16.5 12a4.47 4.47 0 0 0-.9-2.7 1 1 0 0 1 .2-1.4" clipRule="evenodd" /></svg></span></button></span><span className data-state="closed"><button className="text-token-text-secondary hover:bg-token-main-surface-secondary rounded-lg">
                                                        <span className="flex h-[30px] w-[30px] items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon-md-heavy"><path fill="currentColor" fillRule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clipRule="evenodd" /></svg></span></button></span>
                                                    <div className="flex">
                                                        <span className data-state="closed"><button className="text-token-text-secondary hover:bg-token-main-surface-secondary rounded-lg">
                                                            <span className="flex h-[30px] w-[30px] items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon-md-heavy"><path fill="currentColor" fillRule="evenodd" d="M11.873 21.496a1 1 0 0 1-.992.496l-.454-.056A4 4 0 0 1 7.1 16.79L7.65 15h-.718c-2.637 0-4.553-2.508-3.859-5.052l1.364-5A4 4 0 0 1 8.296 2h9.709a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-2c-.26 0-.5.14-.628.364zM14.005 4h-5.71a2 2 0 0 0-1.929 1.474l-1.363 5A2 2 0 0 0 6.933 13h2.072a1 1 0 0 1 .955 1.294l-.949 3.084a2 2 0 0 0 1.462 2.537l3.167-5.543a2.72 2.72 0 0 1 1.364-1.182V5a1 1 0 0 0-1-1m3 9V5c0-.35-.06-.687-.171-1h1.17a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z" clipRule="evenodd" /></svg></span></button></span>
                                                    </div>
                                                    <span className data-state="closed"><button type="button" id="radix-:r4v:" aria-haspopup="menu" aria-expanded="false" data-state="closed" className="text-token-text-secondary hover:bg-token-main-surface-secondary h-[30px] cursor-pointer rounded-md px-1">
                                                        <div className="flex items-center pb-0">
                                                            <div className="[&_svg]:h-full [&_svg]:w-full icon-md h-4 w-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                                                <path fill="currentColor" d="M19.898.855a.4.4 0 0 0-.795 0c-.123 1.064-.44 1.802-.943 2.305-.503.503-1.241.82-2.306.943a.4.4 0 0 0 .001.794c1.047.119 1.801.436 2.317.942.512.504.836 1.241.93 2.296a.4.4 0 0 0 .796 0c.09-1.038.413-1.792.93-2.308.515-.516 1.269-.839 2.306-.928a.4.4 0 0 0 .001-.797c-1.055-.094-1.792-.418-2.296-.93-.506-.516-.823-1.27-.941-2.317Z" />
                                                                <path fill="currentColor" d="M12.001 1.5a1 1 0 0 1 .993.887c.313 2.77 1.153 4.775 2.5 6.146 1.34 1.366 3.3 2.223 6.095 2.47a1 1 0 0 1-.003 1.993c-2.747.238-4.75 1.094-6.123 2.467-1.373 1.374-2.229 3.376-2.467 6.123a1 1 0 0 1-1.992.003c-.248-2.795-1.105-4.754-2.47-6.095-1.372-1.347-3.376-2.187-6.147-2.5a1 1 0 0 1-.002-1.987c2.818-.325 4.779-1.165 6.118-2.504 1.339-1.34 2.179-3.3 2.504-6.118A1 1 0 0 1 12 1.5ZM6.725 11.998c1.234.503 2.309 1.184 3.21 2.069.877.861 1.56 1.888 2.063 3.076.5-1.187 1.18-2.223 2.051-3.094.871-.87 1.907-1.55 3.094-2.05-1.188-.503-2.215-1.187-3.076-2.064-.885-.901-1.566-1.976-2.069-3.21-.505 1.235-1.19 2.3-2.081 3.192-.891.89-1.957 1.576-3.192 2.082Z" />
                                                            </svg>
                                                            </div>
                                                            <span className="overflow-hidden text-clip whitespace-nowrap text-sm" style={{"opacity":"0","paddingLeft":"0px","width":"0px"}}>4o</span><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon-sm text-token-text-quaternary"><path fill="currentColor" fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414" clipRule="evenodd" /></svg>
                                                        </div></button></span>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="pr-2 lg:pr-0" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <button className="text-token-text-secondary border-token-border-light bg-token-main-surface-primary absolute bottom-5 right-1/2 z-10 flex h-8 w-8 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border bg-clip-padding">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon-md text-token-text-primary"><path fill="currentColor" fillRule="evenodd" d="M12 21a1 1 0 0 1-.707-.293l-7-7a1 1 0 1 1 1.414-1.414L11 17.586V4a1 1 0 1 1 2 0v13.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-7 7A1 1 0 0 1 12 21" clipRule="evenodd" /></svg>
                            </button> */}
                            </div>
                        </div>
                    ))
                   }
                </div>
            </div>
        </div>
  )
}
