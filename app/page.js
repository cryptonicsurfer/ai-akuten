'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  AcademicCapIcon, 
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
  ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/react/20/solid'
import Chat from '@/components/chat';
import Modal from '@/components/modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';


import image1 from '@/images/photos/image-1.png'
import image2 from '@/images/photos/image-2.png'
import image3 from '@/images/photos/image-3.png'
import image4 from '@/images/photos/image-4.png'
import image5 from '@/images/photos/image-5.gif'
import imageFrej from '@/images/photos/frej.png'
import imagePalle from '@/images/photos/palle.png'
import imageLogo from '@/public/image-3_alt2.png'




const navigation = [
  { name: 'Kontakt', href: '#kontakt' },
  // { name: 'Features', href: '#' },
  // { name: 'Marketplace', href: '#' },
  // { name: 'Company', href: '#' },
]
// const stats = [
//   { label: 'Initiativet togs', value: '2023' },
//   { label: 'Vi nördar, så ni slipper', value: '4+' },
//   { label: 'Besökare AI-event 2023', value: '150+' },
//   { label: 'Pledge: kunskapsdelning', value: 'alla' },
// ]
const values = [
  {
    name: 'Hoppa på Framtidståget!',
    description: 'Upptäck hur du kan göra dina uppgifter snabbare och effektivare än någonsin. Kliv ombord nu för att accelerera din framgång!',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Var en Digital Förändringsledare.',
    description: 'Använd teknikens kraft för att göra en positiv skillnad. Ta ansvar och sätt människan i centrum – börja idag!',
    icon: HandRaisedIcon,
  },
  {
    name: 'Bli Hjärtat i Vårt Nätverk',
    description: 'Gå med i vår community och stärk nätverket genom aktivt kunskapsutbyte. Din insats räknas – anslut dig nu!',
    icon: UserGroupIcon,
  },
  {
    name: 'Skapa Din Lärande Resa.',
    description: 'Utveckla dina anställdas färdigheter på ett skräddarsytt och kostnadseffektivt sätt. Starta din resa mot kontinuerlig utveckling nu!',
    icon: AcademicCapIcon,
  },
  {
    name: 'Stärk Oss Genom Delning.',
    description: 'Dela dina framgångar och utmaningar för att stärka vårt system. När vi delar, växer vi alla – dela din story idag!',
    icon: SparklesIcon,
  },
  {
    name: 'Frigör Tid med AI.',
    description: 'Låt AI ta hand om repetitiva uppgifter och ge dina anställda mer värdefull tid. Upptäck hur AI kan revolutionera din verksamhet!',
    icon: SunIcon,
  },
  
]
const team = [
  {
    name: 'Frej Andreassen',
    role: 'Näringslivsutvecklare',
    imageComponent: <Image src={imageFrej} alt="Frej Andreassen" style={{ borderRadius: '10px' }}/>, // Using Image component,
    email: 'frej.andreassen@falkenberg.se',
    location: 'Falkenberg, Sweden',
  },
  {
    name: 'Paul Klinteby',
    role: 'Näringslivsutvecklare',
    imageComponent: <Image src={imagePalle} alt="Paul Klinteby" style={{ borderRadius: '10px' }}/>, // Using Image component,
    email: 'paul.klinteby@falkenberg.se',
    location: 'Falkenberg, Sweden',
  },
  // More people...
]
const benefits = [
  'Produktiva lösningar på komplexa problem',
  'Ni behöver inte kunna det för att dra nytta"',
  'Olika prismodeller, men som alla ger värde > kostnaden',
  'Anpassat efter behov (som ni kanske inte visste ni hade)',
  'Nyttan kommer att vara omedelbar',
  'God affärsförståelse',
]


function Photos() {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const calculateRotationStyle = (index) => {
    // Example calculation: Adjust as needed
    const rotationDegree = (scrollY / 10) % 360 +4;
    const direction = index % 2 === 0 ? 1 : -1;
    return { transform: `rotate(${direction * rotationDegree}deg)` };
  };
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            style={calculateRotationStyle(imageIndex)}
            className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
    <div className="bg-gray-900">
      <Modal open={modalOpen} setOpen={setModalOpen} content={<Chat />} />
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="p-1.5 flex space-x-2">
              <img
                className="h-24 w-auto"
                src="/logo.png"
                // https://ideogram.ai/api/images/direct/GP9Scs0PRfG0Wd-_uq38Gg.jpg
                alt=""
              />
              <span className="text-white text-xl my-auto font-bold font-bungee-hairline" >AI<span className="text-pink-600 animate-pulse">+</span>akuten</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>

        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">AI-akuten</span>
                <img
                  className="h-8 w-auto"
                  src="logo.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={()=>setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="relative isolate">
        {/* Background */}
        <div
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>

        {/* Header section */}
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            {/* <h2 className="text-6xl font-bold tracking-tight text-white sm:text-6xl my-4">AI<span className="text-pink-600 animate-pulse">+</span>akuten </h2> */}

            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl my-4 font-bungee-hairline">
              AI<span className="text-pink-600 animate-pulse">+</span>akuten
            </h1>
            {/* <h3   className="text-2xl font-bold tracking-tight text-white sm:text-2xl" style={{ fontFamily: "'Bungee Hairline', sans-serif" }}>
              Minska din AI-ångest: Låt oss göra tekniken enkel och lönsam för dig 
            </h3> */}



            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="flex mx-auto mt-6 rounded-md bg-pink-600 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {/* <FontAwesomeIcon icon={faRobot} />  */}
              Starta chat
              <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 animate-bounce ml-2" />
            </button>
            <p className="text-sm leading-8 text-gray-400"> Din AI-vägledare väntar. Ställ din fråga </p>
            <h3 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-2xl">Minska din AI-ångest: Låt oss göra tekniken enkel och lönsam för dig </h3>
          </div>
        </div>

        <Photos/> 



        <section className="bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                <img className="h-12 self-start" src="/ng_logo.png" alt="" />
                <figure className="mt-10 flex flex-auto flex-col justify-between">
                  <blockquote className="text-lg leading-8 text-white">
                    <p>
                      “De förstod tidigt våra behov, och redan samma dag hittade de den perfekta (och kostnadsfria) AI-lösningen för oss . Vi är väldigt nöjda med Frej & Palle och deras arbete.  ”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <img
                      className="h-14 w-14 rounded-full bg-gray-800"
                      src="/Carl Pfeiff.jpeg"
                      alt=""
                    />
                    <div className="text-base">
                      <div className="font-semibold text-white">Carl Pfeiff</div>
                      <div className="mt-1 text-gray-400">CEO of Nordic Gamekeeper</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                <img className="h-12 self-start" src="/nfbg_logo.png" alt="" />
                <figure className="mt-10 flex flex-auto flex-col justify-between">
                  <blockquote className="text-lg leading-8 text-white">
                    <p>
                      “Deras förmåga att tillgängliggöra ny och svår teknik som vi kan dela med oss till våra medlemsföretag betyder oerhört mycket i en tid med snabb teknisk omställning.”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <img
                      className="h-14 w-14 rounded-full bg-gray-800"
                      src="/Marinette_Ndag-kvadrat-560x560.jpg"
                      alt=""
                    />
                    <div className="text-base">
                      <div className="font-semibold text-white">Marinette Larsson</div>
                      <div className="mt-1 text-gray-400">Verksamhetsledare</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className='mt-6 mb-10 animate-pulse text-5xl text-pink-600 text-center font-bold font-bungee-hairline'> Tekniken är här - ta steget med oss </h2>
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                Välkomna till AI-akuten, Falkenbergs guide inom artificiell intelligens. Hastigheten av utvecklingen manade till en resurs som samlat kan ta till sig kunskap, för att dela med sig till dig.
                </p>
                <p className="mt-8">
                Vår process är enkel. Vi börjar med lågt hängande frukt, där enkel implementation och lättnavigerad teknik får stor bäring för resultat och verksamhet.
                </p>
              </div>
              <div>
                <p>
                Med hjälp av AI, kan arbetsmoment automatiseras och frigöra tid för era anställda så de kan fokusera på sånt som gör störst nytta. 
                </p>
                <p className="mt-8">
                Med AI-akuten, blir AI-resan klarare och enklare. Vi stödjer er att utforska och tillämpa AI’s potential. Ta steget mot innovation med oss.
                </p>
                <p className="mt-8">
                  <a href="/book" target="_blank" className="text-sm font-semibold leading-6 text-pink-600 flex">
                    <span className="relative flex h-3 w-3 my-auto mr-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-600"></span>
                    </span>
                    Boka ett möte <span aria-hidden="true">&rarr;</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="/fbgsommardel3-31-1920x1080.jpg"
            alt=""
            className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ett stort steg är bara ett prompt bort.. </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              AI är en teknik som utvecklas väldigt snabbt, och i och med lanseringen av ChatGPT och andra generativa språkmodeller kommer utvecklingen bara gå snabbare. 
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <value.icon className="absolute left-1 top-1 h-5 w-5 text-pink-600" aria-hidden="true" />
                  {value.name}
                </dt>{' '}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Vårt team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Vårt team är dedikerat att ständigt lära sig nya saker för att ta sig an nya problem. Vår passion är att hitta lösningar till problem vi inte stött på tidigare, och som adderar värde för de vi arbetar med och för.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {team.map((person) => (
              <li key={person.name}>
                {person.imageComponent}
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-300">{person.role}</p>
                <p className="text-sm leading-6 text-gray-300">{person.location}</p>
                <a href={`mailto:${person.email}`} className="text-sm leading-7 text-emerald-300">{person.email}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA section */}
        <div id="kontakt" className="relative isolate -z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src="/image-3_alt2.png"
                alt=""
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Hör av dig till oss</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Ditt problem är vår utmaning. Lösningen är ditt resultat.
                </p>
                <div className="flex flex-col-reverse lg:flex-col">
                  <ul
                    role="list"
                    className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                  >
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-x-3">
                        <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex">
                  
                    <a href="/book" target="_blank" className="text-sm font-semibold leading-6 text-pink-600 flex">
                      <span className="relative flex h-4 w-4 my-auto mr-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-600"></span>
                      </span>
                      Boka ett möte <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
        </div>
      </main>

      
    </div>
    </>
  );
}
