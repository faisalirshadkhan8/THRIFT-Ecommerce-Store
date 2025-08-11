import './App.css'
import './animations.css'
import bg1 from './assets/bg1.jpg'
import bg2 from './assets/bg2.jpg'
import brandStory from './assets/brand story.jpg'
import blacktexture from './assets/black-texture.jpg'
import logo from './assets/logo.png'
import product2 from './assets/products/product 2.png'
import product3 from './assets/products/product 3.png'
import product4 from './assets/products/product 4.png'
import product5 from './assets/products/prdt 5.png'
import product6 from './assets/products/product 6.png'
import snkr1 from './assets/products/snkr1.png'
import SneakerHeroSection from './components/SneakerHeroSection'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

function App() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const navRef = useRef<HTMLElement>(null)
  
  // Latest Items State
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  
  // Latest Items Data
  const latestItems = [
    {
      image: product2,
      title: "ORDINARY DAY",
      price: "$45",
      originalPrice: "$69",
      description: "A comfortable and stylish piece perfect for everyday wear. Made with premium materials that ensure durability and comfort throughout the day.",
      material: "100% Cotton",
      sizes: "S, M, L, XL",
      color: "Red"
    },
    {
      image: product3,
      title: "SCREAMING HEAD",
      price: "$29",
      originalPrice: "$55",
      description: "Bold and expressive design that makes a statement. Perfect for those who want to stand out with unique graphic elements.",
      material: "Cotton Blend",
      sizes: "S, M, L, XL, XXL",
      color: "White"
    },
    {
      image: product4,
      title: "PLAIN SHIRT",
      price: "$38",
      originalPrice: "$52",
      description: "Minimalist design with maximum comfort. A versatile piece that pairs well with any outfit for a clean, modern look.",
      material: "Organic Cotton",
      sizes: "XS, S, M, L, XL",
      color: "Black"
    },
    {
      image: product5,
      title: "FOXY DAYS",
      price: "SOLD OUT",
      originalPrice: "$65",
      description: "Retro-inspired design with a modern twist. Unfortunately sold out due to high demand, but worth the wait for restocking.",
      material: "Cotton-Poly Blend",
      sizes: "S, M, L",
      color: "Beige"
    },
    {
      image: product6,
      title: "RAINY ARMY",
      price: "SOLD OUT",
      originalPrice: "$85",
      description: "Military-inspired outerwear perfect for any weather. Durable construction meets street style in this popular piece.",
      material: "Water-Resistant Canvas",
      sizes: "M, L, XL",
      color: "Army Green"
    },
    {
      image: snkr1,
      title: "GREY JACKET",
      price: "$52",
      originalPrice: "",
      description: "Contemporary streetwear essential with a sleek silhouette. Perfect for layering and adding style to any casual outfit.",
      material: "Premium Cotton",
      sizes: "S, M, L, XL",
      color: "Grey"
    }
  ]
  
  const handlePrevItem = () => {
    setCurrentItemIndex((prev) => (prev === 0 ? latestItems.length - 1 : prev - 1))
  }
  
  const handleNextItem = () => {
    setCurrentItemIndex((prev) => (prev === latestItems.length - 1 ? 0 : prev + 1))
  }
  
  const currentItem = latestItems[currentItemIndex]

  useEffect(() => {
    if (titleRef.current) {
      // Split the text into individual letters and wrap each in a span
      const text = "NEW ARRIVALS"
      const letters = text.split('').map((letter) => {
        const span = document.createElement('span')
        span.textContent = letter === ' ' ? '\u00A0' : letter // Use non-breaking space
        span.style.display = 'inline-block'
        span.classList.add('letter')
        return span
      })

      // Clear the title and add letter spans
      titleRef.current.innerHTML = ''
      letters.forEach(letter => titleRef.current?.appendChild(letter))

      // GSAP Animation Timeline
      const tl = gsap.timeline({ delay: 0.8 })

      // Animate letters appearing with stagger
      tl.fromTo('.letter', 
        {
          opacity: 0,
          y: 100,
          rotationX: -90,
          transformOrigin: "50% 50% -50px"
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: {
            amount: 1.2,
            from: "center"
          }
        }
      )

      // Add a subtle floating animation after the initial animation
      tl.to('.letter', {
        y: -8,
        duration: 2.5,
        ease: "power2.inOut",
        stagger: {
          amount: 0.6,
          repeat: -1,
          yoyo: true
        }
      }, "+=1")
    }

    // Navbar scroll animation
    if (navRef.current) {
      const navbar = navRef.current
      let isScrolled = false

      const handleScroll = () => {
        const scrollY = window.scrollY
        const heroHeight = window.innerHeight

        if (scrollY > heroHeight * 0.1 && !isScrolled) {
          // Navbar becomes sticky with background
          isScrolled = true
          gsap.to(navbar, {
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
            ease: "power2.out"
          })
          
          // Change text colors to dark
          gsap.to(navbar.querySelectorAll('.nav-text'), {
            color: "#111827",
            duration: 0.3
          })
          
          gsap.to(navbar.querySelectorAll('.nav-icon'), {
            stroke: "#111827",
            duration: 0.3
          })
        } else if (scrollY <= heroHeight * 0.1 && isScrolled) {
          // Return to transparent
          isScrolled = false
          gsap.to(navbar, {
            backgroundColor: "transparent",
            backdropFilter: "none",
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out"
          })
          
          // Change text colors back to white
          gsap.to(navbar.querySelectorAll('.nav-text'), {
            color: "#ffffff",
            duration: 0.3
          })
          
          gsap.to(navbar.querySelectorAll('.nav-icon'), {
            stroke: "#ffffff",
            duration: 0.3
          })
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section with Full-Screen Background */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Transparent Navigation */}
        <nav 
          ref={navRef}
          className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-4 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Thrift Logo" 
                className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
              />
              <span className="ml-3 nav-text text-white font-black text-xl tracking-wider uppercase transition-colors duration-300 font-oswald">THRIFT</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Home', 'Pages', 'Shop', 'Lookbook', 'Blog', 'Elements'].map((item) => (
                <button 
                  key={item} 
                  className="nav-text text-white font-black tracking-wide hover:text-gray-300 transition-colors duration-300 text-sm uppercase"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="nav-text text-white hover:text-gray-300 transition-colors duration-300 p-2">
                <svg className="w-5 h-5 nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="nav-text text-white hover:text-gray-300 transition-colors duration-300 p-2 relative">
                <svg className="w-5 h-5 nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="nav-text text-white hover:text-gray-300 transition-colors duration-300 p-2 relative">
                <svg className="w-5 h-5 nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 004 15h3m6 0a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-semibold transition-colors duration-300">2</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden nav-text text-white p-2">
              <svg className="w-6 h-6 nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-40">
          <div className="text-center text-white animate-fade-in-up">
            {/* Price Line */}
            <p className="text-sm md:text-base font-light tracking-widest mb-4 opacity-90 animate-fade-in delay-200">
              FROM $69
            </p>

            {/* Main Heading */}
            <h1 
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 tracking-[0.2em] md:tracking-[0.1em] lg:tracking-[0.2em] whitespace-nowrap font-oswald"
              style={{ perspective: '1000px' }}
            >
              NEW ARRIVALS
            </h1>


            {/* CTA Button */}
            <div className="animate-fade-in delay-600">
              <button className="group relative text-white font-medium tracking-wider text-sm md:text-base uppercase hover:text-gray-300 transition-all duration-300">
                SHOP NOW
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                <svg className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
          <div className="text-white opacity-70">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className="text-xs mt-2 tracking-widest">SCROLL</p>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="relative py-20 lg:py-32">
        {/* Background with bg2 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          {/* Light overlay for better text visibility */}
          <div className="absolute inset-0 bg-white/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-oswald">
              <span className="tracking-wider">POPULAR ITEMS</span>
            </h2>
            <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Product 1 - Ordinary Day */}
            <div className="group cursor-pointer">
              <div className="relative bg-gray-900 overflow-hidden mb-6 aspect-square">
                <img 
                  src={product2} 
                  alt="Ordinary Day Red T-shirt"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Icons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-wide">ORDINARY DAY</h3>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900 font-oswald">$45</span>
                  <span className="text-sm text-gray-500 line-through">$69</span>
                </div>
              </div>
            </div>

            {/* Product 2 - Screaming Head */}
            <div className="group cursor-pointer">
              <div className="relative bg-gray-900  overflow-hidden mb-6 aspect-square">
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                  SALE
                </div>
                <img 
                  src={product3} 
                  alt="Screaming Head White T-shirt"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Icons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-wide">SCREAMING HEAD</h3>
                <div className="relative">
                  <div className="inline-flex items-center bg-red-500 text-white px-3 py-1 rounded-full">
                    <span className="text-xs font-medium mr-1">SALE</span>
                    <span className="text-lg font-bold font-oswald">$29</span>
                  </div>
                  <span className="block text-sm text-gray-500 line-through mt-1">$55</span>
                </div>
              </div>
            </div>

            {/* Product 3 - Youth Style */}
            <div className="group cursor-pointer">
              <div className="relative bg-gray-900 overflow-hidden mb-6 aspect-square">
                <img 
                  src={product4} 
                  alt="Youth Style Black T-shirt"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Icons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-wide">PLAIN SHIRT</h3>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900 font-oswald">$38</span>
                  <span className="text-sm text-gray-500 line-through">$52</span>
                </div>
              </div>
            </div>

            {/* Product 4 - Foxy Days */}
            <div className="group cursor-pointer">
              <div className="relative bg-gray-900  overflow-hidden mb-6 aspect-square">
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                  SOLD
                </div>
                <img 
                  src={product5} 
                  alt="Foxy Days Beige T-shirt"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Icons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-wide">FOXY DAYS</h3>
                <div className="relative">
                  <div className="inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg">
                    <span className="text-xs font-medium mr-2 opacity-75">WAS $65</span>
                    <span className="text-lg font-bold font-oswald">SOLD OUT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 5 - Rainy Army */}
            <div className="group cursor-pointer">
              <div className="relative bg-gray-900 overflow-hidden mb-6 aspect-square">
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                  SOLD
                </div>
                <img 
                  src={product6} 
                  alt="Rainy Army Green Jacket"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Icons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-wide">RAINY ARMY</h3>
                <div className="relative">
                  <div className="inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg">
                    <span className="text-xs font-medium mr-2 opacity-75">WAS $85</span>
                    <span className="text-lg font-bold font-oswald">SOLD OUT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 6 - Grey Jacket */}
            <div className="group cursor-pointer">
              <div className="relative bg-gray-900  overflow-hidden mb-6 aspect-square">
                <img 
                  src={snkr1} 
                  alt="Grey Jacket"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Icons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-wide">GREY JACKET</h3>
                <div className="flex items-center justify-center space-x-3">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Starting at</span>
                    <span className="text-2xl font-bold text-gray-900 font-oswald">$52</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Side - Clean image from reference */}
          <div className="relative h-full">
            <img 
              src={brandStory} 
              alt="Curated thrift fashion lifestyle"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Same image with dark overlay and text */}
          <div className="relative h-full">
            {/* Background Image */}
            <img 
              src={blacktexture} 
              alt="Background"
              className="w-full h-full object-cover"
            />
            
            
            {/* Content positioned on left side of right panel like reference */}
            <div className="absolute inset-0 flex items-start justify-start pl-12 md:pl-16 lg:pl-20 pt-32 md:pt-40 lg:pt-48">
              <div className="max-w-md text-white">
                
                {/* Main Heading */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 font-oswald lowercase tracking-wide leading-tight">
                  for the occasion
                </h2>
                
                {/* Decorative Dashed Line */}
                <div className="flex items-center mb-8">
                  <div className="flex space-x-1">
                    <div className="w-4 h-px bg-white"></div>
                    <div className="w-4 h-px bg-white"></div>
                    <div className="w-4 h-px bg-white"></div>
                    <div className="w-4 h-px bg-white"></div>
                    <div className="w-4 h-px bg-white"></div>
                  </div>
                </div>
                
                {/* Description Text */}
                <p className="text-gray-200 leading-relaxed mb-10 text-lg max-w-sm">
                  proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, lorem quis 
                  bibendum auctor, nisi elit consequat ipsum, nec
                </p>
                
                {/* CTA Button */}
                <button className="group relative border border-white text-white font-medium tracking-wider text-sm uppercase px-10 py-5 hover:bg-white hover:text-gray-900 transition-all duration-300 font-oswald">
                  learn more
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Items Section */}
      <section className="relative py-20 lg:py-32">
        {/* Background with bg2 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          {/* Light overlay for better text visibility */}
          <div className="absolute inset-0 bg-white/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-oswald">
              <span className="tracking-wider">OUR LATEST ITEM</span>
            </h2>
            <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.
            </p>
          </div>

          {/* Latest Item Display */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px] gap-0">
              
              {/* Left Side - Product Image with Navigation */}
              <div className="relative group overflow-hidden">
                <img 
                  key={currentItemIndex}
                  src={currentItem.image} 
                  alt={currentItem.title}
                  className="w-full h-full object-cover min-h-[700px] transition-all duration-500 ease-in-out transform hover:scale-105"
                />
                
                {/* Image Overlay for smooth transitions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={handlePrevItem}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={handleNextItem}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Right Side - Item Description */}
              <div className="p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center bg-white/50 backdrop-blur-sm">
                
                {/* Price Badge */}
                <div 
                  key={`price-${currentItemIndex}`}
                  className="bg-neutral-800 text-white px-4 py-2 text-sm inline-block text-center font-oswald mb-8 w-fit animate-fade-in hover-lift"
                >
                  {currentItem.price}
                </div>
                
                {/* Product Title */}
                <h3 
                  key={`title-${currentItemIndex}`}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-oswald tracking-wide animate-fade-in-up delay-200"
                >
                  {currentItem.title}
                </h3>
                
                {/* Short Description */}
                <p 
                  key={`desc-${currentItemIndex}`}
                  className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg animate-fade-in-up delay-400"
                >
                  {currentItem.description}
                </p>
                
                {/* Product Details */}
                <div 
                  key={`details-${currentItemIndex}`}
                  className="space-y-4 text-sm text-gray-500 animate-fade-in-up delay-600"
                >
                  <div className="flex justify-between border-b border-gray-200 pb-3 hover:border-gray-300 transition-colors duration-300">
                    <span className="font-medium">Material:</span>
                    <span className="text-gray-700 font-medium">{currentItem.material}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3 hover:border-gray-300 transition-colors duration-300">
                    <span className="font-medium">Available Sizes:</span>
                    <span className="text-gray-700 font-medium">{currentItem.sizes}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3 hover:border-gray-300 transition-colors duration-300">
                    <span className="font-medium">Color:</span>
                    <span className="text-gray-700 font-medium">{currentItem.color}</span>
                  </div>
                  {currentItem.originalPrice && (
                    <div className="flex justify-between border-b border-gray-200 pb-3 hover:border-gray-300 transition-colors duration-300">
                      <span className="font-medium">Original Price:</span>
                      <span className="text-gray-500 line-through">{currentItem.originalPrice}</span>
                    </div>
                  )}
                </div>
                
                {/* Item Indicator */}
                <div className="flex items-center space-x-3 mt-12 animate-fade-in delay-800">
                  {latestItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentItemIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 hover-scale ${
                        index === currentItemIndex 
                          ? 'bg-gray-900 scale-125 shadow-lg' 
                          : 'bg-gray-300 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sneaker Hero Section */}
      <SneakerHeroSection />

      {/* Footer Section */}
      <footer className="relative bg-gray-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ backgroundImage: `url(${blacktexture})` }}
          ></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center mb-6">
                  <img 
                    src={logo} 
                    alt="Thrift Logo" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                  />
                  <span className="ml-3 text-white font-black text-2xl tracking-wider uppercase font-oswald">THRIFT</span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Curating the finest selection of thrift fashion for the modern trendsetter. 
                  Quality, style, and sustainability in every piece.
                </p>
                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold font-oswald tracking-wide mb-6 uppercase">Quick Links</h3>
                <ul className="space-y-3">
                  {['About Us', 'Contact', 'Size Guide', 'Shipping Info', 'Returns', 'FAQ'].map((item) => (
                    <li key={item}>
                      <button className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold font-oswald tracking-wide mb-6 uppercase">Categories</h3>
                <ul className="space-y-3">
                  {['Men\'s Fashion', 'Women\'s Fashion', 'Accessories', 'Footwear', 'Vintage', 'Sale Items'].map((item) => (
                    <li key={item}>
                      <button className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold font-oswald tracking-wide mb-6 uppercase">Stay Updated</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Subscribe to our newsletter for the latest fashion trends and exclusive offers.
                </p>
                <div className="space-y-4">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors duration-300"
                    />
                    <button className="px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-r-lg transition-colors duration-300 font-semibold">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-gray-400">
                    By subscribing, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="text-gray-400 text-sm">
                  © 2024 THRIFT. All rights reserved. Curated with love for fashion enthusiasts.
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <button className="text-gray-400 hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors duration-300">
                    Terms of Service
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors duration-300">
                    Cookie Policy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
