import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDownUp, ArrowRight, Bell, ChevronDown, Rocket, RotateCcw, Zap } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#0B0F16] text-white p-4 flex justify-center items-start">
      <div className="w-full max-w-lg space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <div className="flex items-center bg-[#1C2127] rounded-lg p-3 gap-3">
            <ArrowRight className="w-5 h-5 text-gray-500 rotate-45" />
            <input
              type="text"
              placeholder="Search the trenches or paste CA"
              className="bg-transparent border-none outline-none flex-1 text-gray-300 placeholder:text-gray-500"
            />
            <div className="text-gray-500">⌘/</div>
          </div>

          {/* Trending Tokens */}
          <div className="flex items-center gap-4 mt-2 text-sm">
            <div className="flex items-center gap-2 text-[#4A9C6D]">
              <Zap className="w-4 h-4" />
              <span>Trenching</span>
            </div>
            {["IMG", "YzY", "JUP", "DogeD", "YEPE"].map((token) => (
              <span key={token} className="text-gray-500">
                {token}
              </span>
            ))}
            <Button className="ml-auto bg-[#4A9C6D] hover:bg-[#3d8159] rounded-full px-4 py-1">
              DIG IN <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Trading Panel */}
        <div className="bg-[#1C2127] rounded-xl p-4 space-y-4">
          {/* Trade Type Tabs */}
          <Tabs defaultValue="instant" className="w-full">
            <TabsList className="grid grid-cols-3 bg-transparent gap-2">
              <TabsTrigger
                value="instant"
                className="data-[state=active]:bg-[#1C2127] data-[state=active]:text-[#4A9C6D] flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                Instant
              </TabsTrigger>
              <TabsTrigger value="trigger" className="data-[state=active]:bg-[#1C2127] flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Trigger
              </TabsTrigger>
              <TabsTrigger value="recurring" className="data-[state=active]:bg-[#1C2127] flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Recurring
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Mode Selector */}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-bold">ULTRA</span>
            <div className="bg-[#4A9C6D] rounded-full p-1">
              <Zap className="w-4 h-4" />
            </div>
            <div className="bg-gray-800 rounded-full p-1">
              <span className="text-xs">X</span>
            </div>
            <span className="text-gray-500">MANUAL</span>
            <RotateCcw className="w-4 h-4 ml-auto text-gray-500" />
          </div>

          {/* Selling Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Selling</span>
              <span className="text-gray-500">0 USDC</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="bg-[#252A31] border-0 text-white flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">$</div>
                USDC
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Input type="number" placeholder="0.00" className="bg-transparent border-0 text-3xl text-right" />
            </div>
            <div className="text-right text-gray-500">$0</div>
          </div>

          {/* Swap Icon */}
          <div className="flex justify-center">
            <Button variant="ghost" className="rounded-full bg-[#252A31] h-8 w-8 p-0">
              <ArrowDownUp className="w-4 h-4" />
            </Button>
          </div>

          {/* Buying Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Buying</span>
              <span className="text-gray-500">0 SOL</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="bg-[#252A31] border-0 text-white flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#4A9C6D]"></div>
                SOL
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Input type="number" placeholder="0.00" className="bg-transparent border-0 text-3xl text-right" />
            </div>
            <div className="text-right text-gray-500">$0</div>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 text-sm">
            <Zap className="w-4 h-4 text-[#4A9C6D]" />
            <span className="text-gray-500">:</span>
            <div className="bg-[#4A9C6D] bg-opacity-20 text-[#4A9C6D] rounded-full px-3 py-1">OPTIMISED</div>
            <div className="bg-[#6B4A9C] bg-opacity-20 text-[#9C4A9C] rounded-full px-3 py-1">RTSE</div>
          </div>

          {/* Action Button */}
          <Button className="w-full h-14 text-lg bg-gradient-to-r from-[#2D7A9C] to-[#4A9C6D] hover:opacity-90">
            <Rocket className="w-5 h-5 mr-2" />
            Enter an amount
          </Button>
        </div>
      </div>
    </div>
  )
}

