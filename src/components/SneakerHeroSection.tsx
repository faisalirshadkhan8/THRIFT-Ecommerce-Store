import React from 'react'
import newsnkr from '../assets/products/snkr1.png'
import blackTexture from '../assets/black-texture.jpg'

const SneakerHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden">
      {/* Black textured background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${blackTexture})` }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Large irregular dark splash in center-left */}
        <div className="absolute top-1/4 left-0 w-1/2 h-3/4 transform -rotate-12">
          <div className="w-full h-full bg-gradient-radial from-gray-900/50 via-black/80 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        {/* Cracked effect lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-32 h-px bg-gray-700/30 transform rotate-45"></div>
          <div className="absolute top-2/3 left-1/6 w-24 h-px bg-gray-600/20 transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-px bg-gray-700/25 transform rotate-75"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[50vh] md:min-h-[60vh]">
          
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight font-sans">
              <span className="block">black sneakers,</span>
              <span className="block">so classy!</span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans">
              Discover the perfect blend of style and comfort with our premium black sneaker collection. 
              Crafted for the modern trendsetter who values both aesthetics and performance.
            </p>
            
            {/* Pre-order Button */}
            <div className="pt-4">
              <button className="group relative px-8 py-4 md:px-10 md:py-5 border-2 border-white text-white font-semibold text-sm md:text-base uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-black font-sans">
                <span className="relative z-10">PRE-ORDER NOW</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>

          {/* Right side - Sneaker image */}
          <div className="relative flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-2xl lg:max-w-3xl xl:max-w-5xl">
              
              {/* Single sneaker - extra large size with tilt effect */}
              <div className="relative z-20 transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <img 
                  src={newsnkr} 
                  alt="Black Sneaker" 
                  className="w-80 md:w-96 lg:w-[32rem] xl:w-[40rem] 2xl:w-[48rem] h-auto object-contain filter drop-shadow-2xl hover:scale-105 transition-all duration-300"
                />
              </div>
              
              {/* Enhanced glow effect behind sneaker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 md:w-[32rem] lg:w-[40rem] xl:w-[48rem] 2xl:w-[56rem] h-96 md:h-[32rem] lg:h-[40rem] xl:h-[48rem] 2xl:h-[56rem] bg-white/8 rounded-full blur-3xl"></div>
              
              {/* Additional subtle glow layers */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 lg:w-96 xl:w-[32rem] 2xl:w-[40rem] h-64 md:h-80 lg:h-96 xl:h-[32rem] 2xl:h-[40rem] bg-gray-400/5 rounded-full blur-2xl"></div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default SneakerHeroSection
