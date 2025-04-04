import { motion } from "framer-motion"; // Importa Framer Motion para animaciones

import { styles } from "../styles";

const Hero = () => {
  return (
    // Sección principal del Hero
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Contenedor principal del contenido */}
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>

        {/* Columna izquierda: Línea decorativa y punto */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#fefefe]' /> {/*915EFF */}
          <div className='w-1 sm:h-80 h-40 white-gradient' />
        </div>

        {/* Columna derecha: Texto del Hero */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#ce75e4]'>José</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            FullStack Developer <br className='sm:block hidden' />
            {/*with a university base <br className='sm:block hidden' />*/}
          </p>
        </div>
      </div>

      {/* Contenedor de la flecha animada en la parte inferior */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        {/* Enlace a la sección "about" */}
        <a href='#study'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
