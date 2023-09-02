
const About = () => {
    
    return(
        <>
        <div className='w-full mx-auto items-center text-center text-xl font-bold space-y-3 mt-12 max-w-sm md:max-w-4xl md:mt-36 md:text-4xl'>
                    <h1>
                    Welcome to a World of Tailored Suggestions
                    Revolutionize Your Choices with Recom-Zen-Guide
                    The Ultimate Recommendation Tool</h1>
                </div>
                
                <div className='mt-8 flex flex-col gap-6 p-6  items-center md:mt-24'>
                <h1 className='text-xl text-center text-black block font-bold md:text-4xl'>Our Mission Statement</h1>
                <div className='flex flex-col gap-6 justify-center items-center w-full md:flex-row'>

                    <div className='w-full flex flex-col gap-3 rounded-lg bg-off-white shadow-xl p-3 md:w-72'>
                        <h1 className='text-black text-xl font-bold'>What We Do</h1>
                        <p className='text-black text-sm font-medium'>
                            We curate tailored recommendations for you, leveraging
                            advanced algorithms and your preferences, to simplify
                            decision-making and enhance your everyday experiences.
                        </p>
                    </div>
                    <div className='w-full flex flex-col gap-3 ounded-lg bg-off-white shadow-xl p-3 md:w-72'>
                        <h1 className='text-black text-xl font-bold'>Why Use Us ?</h1>
                        <p className='text-black text-sm font-medium'>
                            We deliver tailored recommendations, save you time
                            and help you discover the best options in various domains,
                            making decision-making effortless and enjoyable.
                        </p>
                    </div>
                    <div className='w-full flex flex-col gap-3 ounded-lg bg-off-white shadow-xl p-3 md:w-72'>
                        <h1 className='text-black text-xl font-bold'>Our Mission</h1>
                        <p className='text-black text-sm font-medium'>
                            Our mission is to make your life easier. We use cutting-edge
                            technology to provide personalized recommendations for a wide
                            range of needs, ensuring you always make the best choices.
                        </p>
                    </div>
                   
                </div>
                </div>
        </>
    )
}

export default About