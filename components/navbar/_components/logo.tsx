import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src={"/images/logo.jpeg"}
          alt="logo"
          width={45}
          height={45}
        //   className="w-40"
        />
      </Link>
    </div>
  );
};

export default Logo;
