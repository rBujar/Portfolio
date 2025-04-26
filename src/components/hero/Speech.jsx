import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
    return (
        <motion.div
            className="bubbleContainer"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
        >
            <div className="bubble">
                <TypeAnimation
                    sequence={[
                        1000,
                        "Hi friend, happy to see you here.",
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        "Close your eyes bro.",
                        1000,
                        "What do you see?",
                        1000,
                        "That`s my world without you bro.",
                        1000,
                    ]}
                    wrapper="span"
                    speed={40}
                    deletionSpeed={60}
                    repeat={Infinity}
                />
            </div>
            <img src="/hero.png" alt="" />
        </motion.div>
    );
};

export default Speech;
