import laptop from "./assets/image/laptop.jpg"
import React, { useState } from 'react'
 import axios from 'axios';
 import Illustration from './assets/image/3968581.jpg';
 import Header from "./views/header";
import { GifIcon, GiftIcon, KeyIcon, MapIcon } from '@heroicons/react/24/outline';

function App() {


  return (
    <>
       <Header />
      <div className="w-full flex justify-center gap-x-40 my-10">
        <img src={Illustration} alt="icon" className='h-80  w-96'/>
        <div className='w-[460px] flex flex-col justify-center gap-y-3 text-center'>
          <h1 className='text-green-500 text-4xl w-full'>Engagé pour l'excellence ​</h1>
          <h3 className='text-2xl'>dans l'éducation numérique.</h3>
          <p className='text-sm'>Avec nos cadres pédagogiques, nous vous fournirons des cours numériques de soutien qui</p>
          <p className='text-sm'>s’engagent à respecter les normes de qualité convenues au sein de notre plate-forme ederassa.</p>
          <div className='flex justify-center my-1 gap-2'>
            <button className='text-xl text-white rounded-full px-2 bg-gray-500 py-2 hover:cursor-pointer hover:bg-transparent hover:text-black hover:border-gray-600'>
              Decouvrer nos certificat
            </button>
            <button className="text-xl hover:text-green-500">
              Commencer a apprendre 
            </button>
          </div>
          
        </div>
      </div>
      <div className="w-full flex justify-center sm:gap-[300px] bg-green-200 h-62  shadow-md">
        <div className="comtainer flex items-center">
            <KeyIcon className='w-20 h-20 mr-2'/>
            <p className='font-bold'>the keyword</p>
        </div>
        <div className="comtainer flex items-center">
            <GiftIcon className='w-20 h-20'/>
            <p className='font-bold'>the gift</p>
        </div>
        <div className="comtainer flex items-center">
            <MapIcon className='w-20 h-20'/>
            <p className='font-bold text-md'>the map</p>
        </div>

      </div>
      
      <div className="w-full my-12  flex justify-center sm:gap-8">
        <img src={laptop} alt="LAPTOP" className="w-96 h-62" />
        <div className="w-96">
          <h3 className="font-bold text-lg">Ederessa</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit a animi, expedita eum doloribus fugiat quis deserunt sit error soluta ut exercitationem eaque consectetur inventore iure. Repellendus, est dignissimos. Reiciendis.Lorem Ad nemo maxime ducimus sunt facere, rem, ab voluptatum non repudiandae voluptate, totam minus blanditiis soluta accusamus ratione perferendis natus! Voluptatem, facilis!</p>
        </div>
      </div>
    </>
  )
}

export default App
