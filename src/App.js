import { ExternalLink } from 'lucide-react'
import {
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Palette,
  Users,
  Award,
  ArrowUpRight,
  Play,
  Star,
  Lightbulb,
  Rocket,
  CheckCircle,
  Mail,
} from "lucide-react"
import "./App.css"
import Logo from './imageh.png'
import Footer from './image.png'
import ProjectCard from './components/ProjectCard'

// Button Component
const Button = ({ children, className = "", size = "default", variant = "default", ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  }

  const sizes = {
    default: "h-10 py-2 px-4",
    lg: "h-11 px-8 rounded-md",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Card Components
const Card = ({ children, className = "", ...props }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-30 h-30 bg-gradient-to-br  rounded-lg flex items-center justify-center">
                <a href='#'>
                   <img src={Logo} />
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-slate-600 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-slate-600 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Process
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                About
              </a>
              <a
                href="#project"
                className="text-slate-600 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white hover:scale-105 transition-all duration-300">
                <a href='#contact'>
                  Start Project
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-violet-200 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-emerald-200 rounded-full opacity-60 animate-ping"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-in-left">
                <Star className="w-4 h-4 animate-spin" />
                <span>Award-winning development team</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                <span className="inline-block animate-fade-in-up animation-delay-200">Crafting Elegant Digital Solutions for </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 animate-gradient-x">
                  Visionary
                </span>
                <span className="inline-block animate-fade-in-up animation-delay-400">Brands</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-600">
                Web. Mobile. UI/UX. Tailored to Your Growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <a href='#contact'>
                    Get a Free Quote
                  </a>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent hover:scale-105 transition-all duration-300"
                >
                  <Play className="mr-2 w-5 h-5 animate-pulse" />
                  Watch Demo
                </Button> */}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl animate-float"></div>
                  <div className="h-48 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-2xl animate-float-delayed"></div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl animate-float-slow"></div>
                  <div className="h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl animate-float-reverse"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What we do best</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We specialize in creating digital solutions that drive growth and deliver exceptional user experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-500 group animate-fade-in-up hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <Globe className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Web Development</h3>
                <p className="text-slate-600 mb-6">
                  Custom websites and web applications built with modern frameworks like React, Next.js, and Node.js
                </p>
                <div className="flex items-center text-violet-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span>Learn more</span>
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-500 group animate-fade-in-up animation-delay-200 hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <Smartphone className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Mobile Apps</h3>
                <p className="text-slate-600 mb-6">
                  Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter
                </p>
                <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span>Learn more</span>
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-500 group animate-fade-in-up animation-delay-400 hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <Palette className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">UI/UX Design</h3>
                <p className="text-slate-600 mb-6">
                  Beautiful, intuitive designs that prioritize user experience and drive conversions
                </p>
                <div className="flex items-center text-emerald-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span>Learn more</span>
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-500 group animate-fade-in-up animation-delay-600 hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <Code className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Custom Software</h3>
                <p className="text-slate-600 mb-6">
                  Tailored software solutions and enterprise applications that scale with your business
                </p>
                <div className="flex items-center text-orange-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span>Learn more</span>
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-500 group animate-fade-in-up animation-delay-800 hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Consulting</h3>
                <p className="text-slate-600 mb-6">
                  Strategic technology consulting to help you make informed decisions about your digital roadmap
                </p>
                <div className="flex items-center text-pink-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span>Learn more</span>
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-500 group animate-fade-in-up animation-delay-1000 hover:scale-105 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Maintenance</h3>
                <p className="text-slate-600 mb-6">
                  Ongoing support, updates, and optimization to keep your digital products running smoothly
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span>Learn more</span>
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Process Section */}
      <section id="process" className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full opacity-30 animate-spin-slow"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-30 animate-bounce-slow"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How we work</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our proven process ensures every project is delivered on time, on budget, and exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group animate-fade-in-up">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 animate-pulse">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Discovery</h3>
              <p className="text-slate-600 leading-relaxed">
                We dive deep into understanding your business goals, target audience, and technical requirements to
                create a solid foundation.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up animation-delay-200">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 animate-pulse animation-delay-300">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping animation-delay-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Design & Plan</h3>
              <p className="text-slate-600 leading-relaxed">
                Our team creates detailed wireframes, prototypes, and technical specifications that bring your vision to
                life.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up animation-delay-400">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 animate-pulse animation-delay-600">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full animate-ping animation-delay-600"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Build & Launch</h3>
              <p className="text-slate-600 leading-relaxed">
                We develop, test, and deploy your solution using agile methodologies, ensuring quality at every step.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in-up animation-delay-800 hover:shadow-xl transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Why choose our process?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 animate-slide-in-left">
                    <CheckCircle className="w-6 h-6 text-green-500 animate-bounce" />
                    <span className="text-slate-700">Transparent communication throughout</span>
                  </div>
                  <div className="flex items-center space-x-3 animate-slide-in-left animation-delay-200">
                    <CheckCircle className="w-6 h-6 text-green-500 animate-bounce animation-delay-200" />
                    <span className="text-slate-700">Regular updates and milestone reviews</span>
                  </div>
                  <div className="flex items-center space-x-3 animate-slide-in-left animation-delay-400">
                    <CheckCircle className="w-6 h-6 text-green-500 animate-bounce animation-delay-400" />
                    <span className="text-slate-700">Flexible approach that adapts to your needs</span>
                  </div>
                  <div className="flex items-center space-x-3 animate-slide-in-left animation-delay-600">
                    <CheckCircle className="w-6 h-6 text-green-500 animate-bounce animation-delay-600" />
                    <span className="text-slate-700">Post-launch support and optimization</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-gradient-to-br from-violet-200 to-purple-300 rounded-xl animate-float"></div>
                  <div className="h-24 bg-gradient-to-br from-indigo-200 to-blue-300 rounded-xl animate-float-delayed"></div>
                  <div className="h-24 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-xl animate-float-slow"></div>
                  <div className="h-24 bg-gradient-to-br from-orange-200 to-pink-300 rounded-xl animate-float-reverse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our work */}

      <ProjectCard
        title="Lunaris Consulting"
        type="Business Website"
        tech="React + Tailwind"
        summary="A premium, clean UI for a global consulting brand—focused on trust, elegance, and conversion."
        image="/images/lunaris-site.png"
        liveLink="https://lunaris.fr"
      />



      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold text-slate-900 mb-2 animate-count-up">50+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div className="animate-fade-in-up animation-delay-200 hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold text-slate-900 mb-2 animate-count-up animation-delay-200">100%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
            <div className="animate-fade-in-up animation-delay-400 hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold text-slate-900 mb-2 animate-count-up animation-delay-400">1+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="animate-fade-in-up animation-delay-600 hover:scale-110 transition-all duration-300">
              <div className="text-4xl font-bold text-slate-900 mb-2 animate-count-up animation-delay-600">24/7</div>
              <div className="text-slate-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                We're passionate about creating digital solutions that make a difference
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Founded with the vision of bridging the gap between innovative technology and exceptional user
                experience, NeuroCraft has grown into a trusted partner for businesses looking to thrive in the digital
                age.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our team combines technical expertise with creative thinking to deliver solutions that not only meet
                your requirements but exceed your expectations.
              </p>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Meet our team
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-br from-violet-200 to-purple-300 rounded-2xl animate-float"></div>
                <div className="h-48 bg-gradient-to-br from-indigo-200 to-blue-300 rounded-2xl animate-float-delayed"></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-48 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-2xl animate-float-slow"></div>
                <div className="h-32 bg-gradient-to-br from-orange-200 to-pink-300 rounded-2xl animate-float-reverse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-indigo-900/20 animate-gradient-x"></div>
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-violet-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-indigo-500/10 rounded-full animate-bounce-slow"></div>

        <div className="relative max-w-4xl mx-auto text-center px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to start your project?</h2>
          <p className="text-xl text-slate-300 mb-8">Let's discuss how we can help bring your digital vision to life</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Start a project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 bg-transparent hover:scale-105 transition-all duration-300"
            >
              Schedule a call
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in touch</h2>
            <p className="text-xl text-slate-600">We'd love to hear about your project</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm text-center animate-fade-in-up hover:scale-105 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <Mail className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600">neurocraft.site@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm text-center animate-fade-in-up animation-delay-200 hover:scale-105 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6 animate-bounce animation-delay-200">
                  <Smartphone className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
                <p className="text-slate-600">+92 3210004342</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm text-center animate-fade-in-up animation-delay-400 hover:scale-105 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-6 animate-bounce animation-delay-400">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Office</h3>
                <p className="text-slate-600">Lahore, Pakistan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0 animate-fade-in-left">
              <div>
                <div className="w-30 h-30 bg-gradient-to-br  rounded-lg flex items-center justify-center">
                  <img src={Footer} />
                </div>
              </div>
            </div>
            <div className="text-slate-400 text-center md:text-right animate-fade-in-right">
              <p>&copy; 2025 NeuroCraft. All rights reserved.</p>
              <p className="mt-1">Crafting digital experiences that matter.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
