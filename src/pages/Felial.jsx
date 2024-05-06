import React, { useState } from "react";


const Felial = () => {
  const [step , setStep]=useState(1)
  const increment = () => {
    setStep((prev) => prev + 1);
  };
 
  const decrement = () => {
    setStep((prev) => prev - 1);
  };
 
 
 return (
   <div>
     <main>
       <div className="px-20">
         <div className=" flex justify-between  mt-16 ">
           <h2 className=" font-bold text-2xl"> Filiallar</h2>
           <div className=" flex gap-5 pr-40">
             <button
               onClick={decrement}
               className=" font-medium   w-[130px] bg-slate-300 h-10  rounded-3xl hover:bg-purple-700 hover:text-white"
             >
               Ro'yhat
             </button>
             <button
               onClick={increment}
               className=" font-medium w-[130px] bg-slate-300 h-10 rounded-3xl hover:bg-purple-700 hover:text-white"
             >
               Xarita
             </button>
           </div>
         </div>
         {step === 1 && (
           <div>
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY BERUNIY </h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 22:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MMAX WAY ATLAS</h2>
                   <h3>улица Катартал, 28, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 22:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY - DRUJBA</h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 22:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY MEGA PLANET</h2>
                   <h3>улица Ниязбек, 1</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 22:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY AVIASOZLAR </h2>
                   <h3>улица Авиасозлар, 23</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 03:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY RISOVIY</h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 03:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY PARUS </h2>
                   <h3>улица Катартал, 60/5</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 03:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY MAGIC CITY</h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 22:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY SAMARQAND DARVOZA </h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 22:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY PARKENT </h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 03:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY UNIVERSAM </h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 22:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY ROYSON </h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 22:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY NEXT </h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 22:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY MUQUMIY </h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 04:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY GRAND MIR </h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 03:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY SAYRAM </h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 03:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY MAKSIM GORKIY </h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 22:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY SERGELI </h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 03:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY FONTAN </h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 03:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>{" "}
             <div className=" my-10 w-[500px] border h-[180px] bg-white shadow-md">
               <div className="pt-3 px-3 flex w-[490px] justify-between">
                 <div>
                   <h2 className="font-bold">MAX WAY MINOR </h2>
                   <h3>улица Беруни, 47, Ташкент</h3>
                 </div>
                 <h3 className="pr-10 text-green-400"> 03:00 gacha ochiq</h3>
               </div>
               <hr className="mt-4 w-[480px] pl-3 mr-3 text-2xl" />
               <div className="flex justify-between mt-5 px-5">
                 <div>
                   <h2 className="font-light">Ish vaqti:</h2>
                   <h2>Du-Yak: 10:00-22:00</h2>
                 </div>
                 <div>
                   <h2 className="font-light">Telefon:</h2>
                   <h2>+998712005400</h2>
                 </div>
               </div>
             </div>
           </div>
         )}
         {step === 2 && (
           <div className=" mt-10">
             <iframe
               width="1250"
               height="600"
               frameborder="0"
               scrolling="no"
               marginheight="0"
               marginwidth="0"
               src="https://maps.google.com/maps?width=520&amp;height=600&amp;hl=en&amp;q=uzbekistab%20,%20tashkent+(MaxWay)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
             >
               <a href="https://www.gps.ie/">gps vehicle tracker</a>
             </iframe>
           </div>
         )}
       </div>
     </main>
   </div>
 );
};

export default Felial;


