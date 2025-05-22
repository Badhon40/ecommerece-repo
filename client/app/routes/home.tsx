import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "E-commerece " },
    { name: "E-commerece", content: "Welcome to Website!" },
  ];
}

export default function Home() {
  return(
        <h1 className="text-3xl font-bold underline">
          Hello world!
       </h1>

  )
}
