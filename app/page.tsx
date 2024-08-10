import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { GlobeIcon, ZapIcon, BrainCogIcon, EyeIcon, ServerCogIcon, MonitorSmartphoneIcon } from "lucide-react"; // Assuming you are using lucide-react icons

const features = [
  {
    name: "Store Your PDF Documents",
    description: "Store your important PDFs securely and access them easily, anywhere, anytime, on-the-go.",
    icon: GlobeIcon,
  },
  {
    name: "Fast Responses",
    description: "Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorization",
    description: "Our intelligent chatbot remembers interactions, providing a seamless and personalized experience.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description: "Engage with your PDFs like never before using our intuitive and interactive viewer.",
    icon: EyeIcon,
  },
  {
    name: "Cloud Backup",
    description: "Rest assured knowing your documents are safely backed up on the cloud, protected from loss or damage.",
    icon: ServerCogIcon,
  },
  {
    name: "Responsive Across Devices",
    description: "Access and chat with your PDFs seamlessly on any device, whether it's your desktop, tablet, or smartphone.",
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-red-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h1 className="text-base font-semibold leading-7 text-indigo-900">
              Chat with Your PDFs
            </h1>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-6xl">
              Transform the way you interact with your documents.
            </p>
            <h1 className="text-base font-semibold leading-7 text-indigo-900">
              Upload, ask, and get instant answers.
            </h1>
            <p>
              Introducing{" "}
              <span className="font-bold text-indigo-800">Chat With Your PDF</span>
              <br /> Upload your document, and our chatbot will answer your questions, Summarize content.
              PDF companion for everyone,{" "}
              <span className="text-indigo-800">Chat With PDF</span>{" "}
              turns static documents into{" "}
              <span className="font-bold">dynamic conversations</span>, enabling 10x in productivity.
            </p>
          </div>
          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>

        <div className="relative overflow-hidden scroll-pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="App screenshot"
              src="https://i.imgur.com/VciRSTI.jpeg"
              width={2432}
              height={2432}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl p-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                </dt>
                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
