import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

const TeamPage = () => {
  return (
    <div className="h-full w-full grid grid-rows-[20%_80%] overflow-hidden p-10">
            <div className="p-3 px-8 flex items-center justify-center">
        <Image src="/images/whitespace-logo.png" width={65} height={65} alt="Logo" />
        <h1 className="bg-gradient-to-b from-gray-100 to-neutral-400 inline-block text-transparent bg-clip-text font-bold text-5xl ml-3">WhiteSpace</h1>
      </div>
      <div className="grid grid-cols-[25%_25%_25%_25%]">
        <Card className="w-full">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>Agnij Dutta</CardTitle>
              <div className="h-2 w-2 rounded-full bg-yellow-200" />
            </div>
            <CardDescription>ML Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/agnij-pfp.jpg"
              alt="Agnij Dutta"
              width={100}
              height={100}
              className="rounded-full aspect-square w-2/3 object-cover"
            />
          </CardContent>
          <CardFooter className="flex justify-left gap-5">
            <Button variant="outline">
              <a href="https://github.com/agnij-dutta" className="inline-flex items-center">
                GitHub
              </a>
            </Button>
            <Button variant="outline">
              <a href="https://www.linkedin.com/in/agnij-dutta-718060309/" className="inline-flex items-center">
                LinkedIn
              </a>
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Mohikshit Ghorai</CardTitle>
            <CardDescription>Web Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/mohikshit-pfp.jpg"
              alt="Mohikshit Ghorai"
              width={100}
              height={100}
              className="rounded-full aspect-square w-2/3 object-cover"
            />
          </CardContent>
          <CardFooter className="flex justify-left gap-5">
            <Button variant="outline">
              <a href="https://github.com/psycocodes" className="inline-flex items-center">
                GitHub
              </a>
            </Button>
            <Button variant="outline">
              <a href="https://www.linkedin.com/in/mohikshit-ghorai-9612b4322/" className="inline-flex items-center">
                LinkedIn
              </a>
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Mainak Dasgupta</CardTitle>
            <CardDescription>ML Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/mainak-pfp.jpg"
              alt="Mainak Dasgupta"
              width={100}
              height={100}
              className="rounded-full aspect-square w-2/3 object-cover"
            />
          </CardContent>
          <CardFooter className="flex justify-left gap-5">
            <Button variant="outline">
              <a href="https://github.com/googleboy-byte" className="inline-flex items-center">
                GitHub
              </a>
            </Button>
            <Button variant="outline">
              <a href="https://www.linkedin.com/in/mainak-dasgupta-b989a6241/" className="inline-flex items-center">
                LinkedIn
              </a>
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Suparno Saha</CardTitle>
            <CardDescription>Backend Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/images/suparno-pfp.jpg"
              alt="Suparno Saha"
              width={100}
              height={100}
              className="rounded-full aspect-square w-2/3 object-cover"
            />
          </CardContent>
          <CardFooter className="flex justify-left gap-5">
            <Button variant="outline">
              <a href="https://github.com/letsbecool9792" className="inline-flex items-center">
                GitHub
              </a>
            </Button>
            <Button variant="outline">
              <a href="https://www.linkedin.com/in/letsbecool9792/" className="inline-flex items-center">
                LinkedIn
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default TeamPage;



