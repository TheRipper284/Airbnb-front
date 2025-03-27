'use client';

import CustomButton from "../forms/CustomButton";

const ConversationDetail = () => {
    return (
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bols text-gray-500">The Ripper</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laudantium, beatae aperiam laborum rerum cupiditate eius iusto nulla voluptates natus impedit dolore molestiae deserunt optio minima cumque exercitationem esse tempora.</p>
                </div>

                <div className="w-[80%] ml-[] py-4 px-6 rounded-xl bg-blue-200">
                    <p className="font-bols text-gray-500">Code With Stein</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laudantium, beatae aperiam laborum rerum cupiditate eius iusto nulla voluptates natus impedit dolore molestiae deserunt optio minima cumque exercitationem esse tempora.</p>
                </div>
            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 sapace-x-4 rounded-xl">
                <input 
                    type="text"
                    placeholder="type your message..."
                    className="w-full p-2 bg-gray-200 rounded-xl"
                />

                <CustomButton 
                    label='Send'
                    onClick={() => console.log('Clicked')}
                    className="w-[100px]"
                />
            </div>
        </>
    )
}

export default ConversationDetail;