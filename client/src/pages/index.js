import { Inter } from "next/font/google";
import { Switch } from "@nextui-org/react";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <Switch
          isSelected={isSelected}
          onValueChange={setIsSelected}
          color="secondary"
        >
          <p className="text-white"> Airplane mode</p>
        </Switch>
      </div>
    </main>
  );
}
