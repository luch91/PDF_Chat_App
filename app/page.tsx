import { GlobeIcon } from "@radix-ui/react-icons";
import {
  BrainCogIcon,
  EyeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";

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
    <main className="bg-gradient-to-bl from via-orange-50 to to-blue-600">
      <div>
        <div>Welcome to Pdf Chat</div>
      </div>
    </main>
  );
}
