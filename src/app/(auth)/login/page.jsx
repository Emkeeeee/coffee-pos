import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LoginPic from "@/assets/images/loginpic.jpg";
import Coffee from "@/assets/images/coffee.gif";

export default function Login() {
  return (
    <div className="flex h-screen justify-center items-center overflow-hidden">
      <Card className="w-2xl h-min flex flex-row">
        <div className="flex flex-col gap-5 justify-center items-center ml-auto w-3xs h-screen lg:p-8 lg:h-min">
          <Image src={Coffee} alt="☕" width={50} height={50} />
          <h1 className="flex flex-row font-bold text-3xl">Hi!</h1>
          <h2 className="italic">Login to sell some coffee.</h2>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Login</Button>
        </div>
        <div className="ml-auto">
          <Image
            className="w-xs rounded-xl shadow-sm hidden lg:inline"
            src={LoginPic}
            alt="Login Picture"
          />
        </div>
      </Card>
    </div>
  );
}
