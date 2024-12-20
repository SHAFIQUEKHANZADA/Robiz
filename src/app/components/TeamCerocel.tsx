"use client"
import { useState } from 'react';
import Image from 'next/image';
import { CiTwitter } from 'react-icons/ci';
import { PiInstagramLogoLight } from 'react-icons/pi';
import { RiLinkedinLine } from 'react-icons/ri';
import Link from 'next/link';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}

interface TeamCarouselProps {
  teamMembers: TeamMember[]; 
}

const TeamCarousel = ({ teamMembers }: TeamCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToDisplay = teamMembers.slice(currentIndex, currentIndex + 3);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-[630px]">
      <div className="flex overflow-hidden justify-center">
        {itemsToDisplay.map((member, index) => (
          <div key={index} className="sm:mx-2 mx-4">
            <div className='sm:w-[370px] w-[330px] h-[564px] flex flex-col justify-between'>
              <Image src={member.image} alt={member.name} width={370} height={430} className='w-[370px] h-[430px] object-scale-down' />
              <div>
                <h1 className='sm:text-[32px] text-[28px]'>{member.name}</h1>
                <p className='text-[16px]'>{member.title}</p>
                <div className='flex gap-4 mt-2'>
                  <Link href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <CiTwitter className='w-[24px] h-[24px]' />
                  </Link>
                  <Link href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <PiInstagramLogoLight className='w-[24px] h-[24px]' />
                  </Link>
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <RiLinkedinLine className='w-[24px] h-[24px]' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/3 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
      >
        &#60;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/3 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
      >
        &#62;
      </button>

      <div className="absolute sm:bottom-1 bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {teamMembers.slice(0, Math.ceil(teamMembers.length / 1)).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;
