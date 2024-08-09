import { Button } from "@/components/ui/button";
import { GlobeIcon } from "@radix-ui/react-icons";
import {
  BrainCogIcon,
  EyeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    name:"Store Your PDF Documents",
    description : "Store your important PDFs securely and access them easily, anywhere, anytime, on-the-go.",
    icon: GlobeIcon,

  },
  {
    name:"Fast Responses",
    description : "Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.",
    icon: ZapIcon,

  },
  {
    name:"Chat Memorization",
    description : "Our intelligent chatbot remembers interactions, providing a seamless and personalized experience.",
    icon: BrainCogIcon,
  },
  {
    name:"Interactive PDF Viewer",
    description : "Engage with your PDFs like never before using our intuitive and interactive viewer.",
    icon: EyeIcon,
  },
  {
    name:"Cloud Backup",
    description : "rest assured knowing your documents are safely backed up on the cloud, protected from loss or damage.",
    icon: ServerCogIcon,
  },
  {
    name:"Responsive Across Devices",
    description : "Access and chat with your PDFs seamlessly on any devive, whether it's your desktop, tablet, or smartphone",
    icon: MonitorSmartphoneIcon,
  }
]

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to to-red-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto
        max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h1 className="text-base font-semibold leading-7
            text-indigo-900">
              Chat with Your PDFs
            </h1>
            <p className="mt-2 text-3xl font-bold tracking-tight
            text-gray-800 sm:text-6xl">
               Transform the way you interact with your documents.
            </p>
            <h1 className="text-base font-semibold leading-7
            text-indigo-900">
              Upload, ask, and get instant answers.
            </h1>
            <p>
              Introducing{" "}
              <span className="font-bold text-indigo-800">Chat With Your PDF</span>
              <br /> Upload your document, and our chatbot will answer your questions, Summarize content.
               PDF companion for everyone, <span className="text-indigo-800">
                Chat With PDF
               </span>{" "}
               turns static documents into{" "}
               <span className="font-bold">dynamic conversations</span>,
               enabling 10x in productivity.
            </p>
          </div>
          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
