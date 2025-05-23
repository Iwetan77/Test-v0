"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowDownUp, ChevronDown, ChevronRight, Moon, RotateCw, Settings, Sun } from "lucide-react"
import Link from "next/link"
import { TokenSelectDialog } from "./components/token-select-dialog"

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [tokenDialogOpen, setTokenDialogOpen] = useState(false)
  const [selectedToken, setSelectedToken] = useState<{ symbol: string; logo: string } | null>(null)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDarkMode ? "bg-[#0B0E13]" : "bg-[#F7F9FC]"
      } font-montserrat`}
    >
      {/* Navigation */}
      <nav
        className={`flex items-center justify-between px-6 py-4 border-b ${
          isDarkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="flex items-center gap-8">
          <span className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>TITAN</span>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-blue-500 font-medium">
              Trade
            </Link>
            <Link href="#" className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} hover:text-blue-500`}>
              Stake
            </Link>
            <Link href="#" className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} hover:text-blue-500`}>
              Earn
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={isDarkMode ? "text-gray-400" : "text-gray-600"}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Button variant="ghost" size="icon" className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
            <Settings className="w-5 h-5" />
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 font-medium">
            Connect Wallet
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[440px] mx-auto pt-8 px-4">
        {/* Swap Navigation */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" className={`${isDarkMode ? "text-white" : "text-gray-900"} hover:text-blue-500 px-0`}>
            <ChevronRight className="w-5 h-5 rotate-180" />
            Graph
          </Button>
          <div className="flex items-center gap-4 px-4">
            <span className={isDarkMode ? "text-white" : "text-gray-900"}>Swap</span>
            <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>DCA</span>
            <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>Bridge</span>
          </div>
          <Button variant="ghost" size="icon" className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Swap Interface */}
        <div className="space-y-3">
          {/* Pay Section */}
          <div
            className={`${
              isDarkMode ? "bg-[#141720]" : "bg-white"
            } rounded-2xl p-4 space-y-4 shadow-lg backdrop-blur-xl border ${
              isDarkMode ? "border-[#1a2c44]" : "border-gray-200"
            }`}
          >
            <div className={isDarkMode ? "text-gray-400" : "text-gray-600"}>Pay</div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className={`${
                  isDarkMode ? "bg-[#1C1F2A] hover:bg-[#252935]" : "bg-gray-100 hover:bg-gray-200"
                } text-inherit h-10 px-3 rounded-full`}
                onClick={() => setTokenDialogOpen(true)}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4AA3CF] to-[#3B82F6] flex items-center justify-center text-white font-medium mr-2">
                  M
                </div>
                MONAD
                <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
              </Button>
              <Input
                type="text"
                placeholder="0"
                className={`bg-transparent border-0 text-4xl text-right focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-600 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              />
            </div>
            <div className={`text-right text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>$0</div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center -my-1.5">
            <Button
              variant="ghost"
              className={`rounded-full ${
                isDarkMode ? "bg-[#1C1F2A] hover:bg-[#252935]" : "bg-gray-100 hover:bg-gray-200"
              } h-8 w-8 p-0 z-10`}
            >
              <ArrowDownUp className="w-4 h-4 text-blue-500" />
            </Button>
          </div>

          {/* Receive Section */}
          <div
            className={`${
              isDarkMode ? "bg-[#141720]" : "bg-white"
            } rounded-2xl p-4 space-y-4 shadow-lg backdrop-blur-xl border ${
              isDarkMode ? "border-[#1a2c44]" : "border-gray-200"
            }`}
          >
            <div className={isDarkMode ? "text-gray-400" : "text-gray-600"}>Receive</div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className={`${
                  isDarkMode ? "bg-[#1C1F2A] hover:bg-[#252935]" : "bg-gray-100 hover:bg-gray-200"
                } text-inherit h-10 px-3 rounded-full`}
                onClick={() => setTokenDialogOpen(true)}
              >
                <div
                  className={`w-8 h-8 rounded-full ${
                    isDarkMode ? "bg-[#1C1F2A] border border-gray-700" : "bg-gray-200"
                  } flex items-center justify-center mr-2`}
                >
                  T
                </div>
                Select Token
                <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
              </Button>
              <Input
                type="text"
                placeholder="0"
                className={`bg-transparent border-0 text-4xl text-right focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-600 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              />
            </div>
            <div className={`text-right text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>$0</div>
          </div>

          {/* Action Button */}
          <Button className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl font-medium mt-4">
            Connect Wallet
          </Button>

          {/* Transaction History */}
          <div
            className={`mt-6 ${isDarkMode ? "bg-[#141720]" : "bg-white"} rounded-2xl p-4 border ${
              isDarkMode ? "border-[#1a2c44]" : "border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={isDarkMode ? "text-white" : "text-gray-900"}>Transaction history</span>
              <Button variant="ghost" size="icon" className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                <RotateCw className="w-4 h-4" />
              </Button>
            </div>
            <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} text-center py-8`}>
              Your transactions will appear here
            </div>
          </div>
        </div>
      </main>

      <TokenSelectDialog
        open={tokenDialogOpen}
        onOpenChange={setTokenDialogOpen}
        onSelect={(token) => {
          setSelectedToken(token)
          setTokenDialogOpen(false)
        }}
      />
    </div>
  )
}

