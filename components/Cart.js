import Image from "next/image";
import img1 from "@/public/assets/img1.png";
import img2 from "@/public/assets/img2.png";
import SelectButton from "@/components/SelectButton";

function Cart() {
  return (
    <>
      <div className="cartMain flex flex-wrap gap-[1.25rem] max-h-[25rem] pb-[7.625rem] px-[1.75rem] overflow-y-auto">
        <div
          className="cart w-[28%] border-[1px] flex flex-col justify-between items-center bg-white  border-light rounded-[10px] text-center pt-[1.813rem] pb-[12px]
         px-[1.563rem] ease-in-out 	duration-300 hover:bg-primary_light"
        >
          <div>
            <div className="imgContainer">
              <Image
                src={img1}
                width={54}
                height={110}
                alt="home icon"
                className="mx-auto"
              />
            </div>
            <h3 className="text-md font-normal text-secondary_light font-sans mt-[14px] mb-[6px]">
              IPhone 6S
            </h3>
            <p className="text-light_secondary w-[133px]">
              A14 Bionic chip 256 GB ROM
            </p>
          </div>
          <div className="btnSelect w-full mt-[1rem]">
            <SelectButton />
          </div>
        </div>
        <div
          className="cart w-[28%] border-[1px] flex flex-col justify-between items-center bg-white  border-light rounded-[10px] text-center pt-[1.813rem] pb-[12px]
         px-[1.563rem] ease-in-out 	duration-300 hover:bg-primary_light"
        >
          <div>
            <div className="imgContainer">
              <Image
                src={img1}
                width={54}
                height={110}
                alt="home icon"
                className="mx-auto"
              />
            </div>
            <h3 className="text-md font-normal text-secondary_light font-sans mt-[14px] mb-[6px]">
              IPhone 6S
            </h3>
            <p className="text-light_secondary w-[133px]">
              A14 Bionic chip 256 GB ROM
            </p>
          </div>
          <div className="btnSelect w-full mt-[1rem]">
            <SelectButton />
          </div>
        </div>
        <div
          className="cart w-[28%] border-[1px] flex flex-col justify-between items-center bg-white  border-light rounded-[10px] text-center pt-[1.813rem] pb-[12px]
         px-[1.563rem] ease-in-out 	duration-300 hover:bg-primary_light"
        >
          <div>
            <div className="imgContainer">
              <Image
                src={img1}
                width={54}
                height={110}
                alt="home icon"
                className="mx-auto"
              />
            </div>
            <h3 className="text-md font-normal text-secondary_light font-sans mt-[14px] mb-[6px]">
              IPhone 6S
            </h3>
            <p className="text-light_secondary w-[133px]">
              A14 Bionic chip 256 GB ROM
            </p>
          </div>
          <div className="btnSelect w-full mt-[1rem]">
            <SelectButton />
          </div>
        </div>
        <div
          className="cart w-[28%] border-[1px] flex flex-col  items-center justify-between bg-white  border-light rounded-[10px] text-center pt-[1.813rem] pb-[12px]
         px-[1.563rem] ease-in-out 	duration-300 hover:bg-primary_light"
        >
          <div>
            <div className="imgContainer">
              <Image
                src={img2}
                width={54}
                height={110}
                alt="home icon"
                className="mx-auto"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
              />
            </div>
            <h3 className="text-md font-normal text-secondary_light font-sans mt-[14px] mb-[6px]">
              IPhone 6S
            </h3>
            <p className="text-light_secondary w-[133px]">
              A14 Bionic chip 256 GB ROM
            </p>
          </div>
          <div className="btnSelect  w-full mt-[1rem]">
            <SelectButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
