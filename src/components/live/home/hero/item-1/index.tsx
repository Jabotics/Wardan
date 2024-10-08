// import { GoLocation } from "react-icons/go";
// import { BsFillHexagonFill, BsStars } from "react-icons/bs";
// import { IoMailOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Item1 = () => {
  return (
    <div className="content">
      {/* <span className="content__item one">
        <span className="available-now">
        <BsFillHexagonFill className="text-primary icon" size={25} />
        <BsStars color="white" className="icon" size={15} />
        </span>
        <h5>Available Now</h5>
        </span> */}

      {/* <span className="content__item two">
        <GoLocation size={25} />
        <h5 className="h5">PTR SIDING COAL DEPO, HOWRAH</h5>
        </span> */}

      {/* <span className="content__item three">
        <IoMailOutline size={25} />
        <h5 className="h5">wardanspices@gmail.com</h5>
        </span> */}

      <div className="content-image">
        <Image
          src={"/images/ws-spices.png"}
          alt=""
          width={400}
          height={400}
          priority
        />
      </div>

      <Link
        href={"/"}
        className="w-full flex items-center justify-center "
      >
        <h2 className="products-btn">Our Products</h2>
      </Link>
      <h4 className="title">Welcome to Wardan!</h4>
    </div>
  );
};

export default Item1;
