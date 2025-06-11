import Link from "next/link";

export const SubNav = () => (
  <div className="bg-neutral-900 hidden tb:block">
    <div className="flex justify-between items-center container">
      <ul className="dt:flex hidden items-center">
        {["Cá nhân", "Hợp tác", "Doanh nghiệp"].map((item) => (
          <Link
            href="#"
            key={item}
            className="text-md text-white font-bold px-6 py-3 border-0 border-b-2 border-transparent hover:bg-primary-500 hover:border-primary-300"
          >
            {item}
          </Link>
        ))}
      </ul>
      <p className="dt:block hidden text-md text-white">
        Tận hưởng trọn vẹn.{" "}
        <span className="text-yellow-400 font-bold">Tải ngay My iTel</span>
      </p>
      <div className="flex items-center gap-10">
        <ul className="flex items-center gap-3">
          {["Về iTel", "Tin tức", "Tuyển dụng"].map((item) => (
            <Link href="#" key={item} className="text-md text-white px-4 py-2">
              {item}
            </Link>
          ))}
        </ul>
        <div className="rounded-sm bg-neutral-600 py-1 px-3 cursor-pointer">
          <p className="text-md font-bold text-white">VIE</p>
        </div>
      </div>
    </div>
  </div>
);
