import React from "react";
import { motion } from "framer-motion";
import stepOneImage from "../assets/stepOne.jpg";
import stepTwoImage from "../assets/stepTwo.jpg";
import stepThreeImage from "../assets/stepThree.jpg";

const GuideMac = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.5 },
    }),
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: custom * 0.7 },
    }),
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { duration: 0.6, delay: custom * 0.5 },
    }),
  };

  return (
    <div className="min-h-[100vh] relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#725142]"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#ffcdb4]"></div>

      <div className="relative min-w-[100%] min-h-[100vh] py-12 px-6 flex items-center justify-center flex-col gap-8 z-10">
        <div className="flex flex-col items-center gap-2">
          <motion.h1
            className="text-3xl text-center leading-[2.8rem] font-semibold text-white"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            custom={0}
          >
            شكرًا لك على تحميل تطبيق مستقيم, نتمنى لك أوقاتًا مليئة بالسكينة
          </motion.h1>

          <motion.p
            className="text-white text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            custom={0.5}
          >
            تم تثبيت التطبيق تلقائيًا. إذا لم يتم التحميل بنجاح، يمكنك تحميله
            يدويًا{" "}
            <a
              href="https://github.com/Mostaqem/mostaqem_desktop/releases/latest/download/mostaqem-macos.dmg"
              className="text-[#ee8664] font-bold border-b-2 border-[#ee8664] pb-1 cursor-pointer"
            >
              من هنا.
            </a>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 p-4">
          <motion.div
            className="bg-white overflow-hidden min-h-[22rem] shadow-md rounded-lg flex flex-col items-center justify-start w-[19rem] max-sm:w-[18rem]"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            custom={0}
            viewport={{ once: true }}
          >
            <div className="min-h-[50%] min-w-[100%]">
              <img
                src={stepOneImage}
                className="min-w-full min-h-full object-fill object-center"
              />
            </div>
            <div className="min-h-[50%] min-w-[100%] p-4 flex flex-col gap-4 items-center justify-start">
              <motion.h6
                className="bg-[#725142] text-[#ffff] py-3 p-4 rounded-lg border-solid border-[1px] border-[#ffcdb4]"
                variants={numberVariants}
                custom={0}
              >
                1
              </motion.h6>
              <p className="text-center text-[#00000]">
                اضغط علي ايقون ابل <br /> و اضغط علي System settings
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white overflow-hidden min-h-[22rem] shadow-md rounded-lg flex flex-col items-center justify-start w-[19rem] max-sm:w-[18rem]"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            custom={1}
            viewport={{ once: true }}
          >
            <div className="min-h-[50%] min-w-[100%]">
              <img
                src={stepTwoImage}
                className="min-w-full min-h-full object-fill object-center"
              />
            </div>
            <div className="min-h-[50%] min-w-[100%] p-4 flex flex-col gap-4 items-center justify-start">
              <motion.h6
                className="bg-[#725142] text-[#ffff] py-3 p-4 rounded-lg border-solid border-[1px] border-[#ffcdb4]"
                variants={numberVariants}
                custom={1}
              >
                2
              </motion.h6>
              <p className="text-center text-[#00000]">
                انزل تحت ليغايت ما تلاقي <br /> Privacy & Security
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white overflow-hidden min-h-[22rem] shadow-md rounded-lg flex flex-col items-center justify-start w-[19rem] max-sm:w-[18rem]"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            custom={2}
            viewport={{ once: true }}
          >
            <div className="min-h-[50%] min-w-[100%]">
              <img
                src={stepThreeImage}
                className="min-w-full min-h-full object-fill object-center"
              />
            </div>
            <div className="min-h-[50%] min-w-[100%] p-4 flex flex-col gap-4 items-center justify-start">
              <motion.h6
                className="bg-[#725142] text-[#ffff] py-3 p-4 rounded-lg border-solid border-[1px] border-[#ffcdb4]"
                variants={numberVariants}
                custom={2}
              >
                3
              </motion.h6>
              <p className="text-center text-[#00000]">
                الضعظ علي Open Anyway <br />
                هيظهرلك dialog تاني , اضغط علي Open للتأكيد
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GuideMac;
