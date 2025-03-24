import { cn } from '@/utils/cn'
import React from 'react'
import Image from 'next/image'

export function Logo({ className, width=120, height=40 }: { className?: string, width?:number; height?:number }) {
  return (
    <div className={cn("mx-auto flex flex-row items-center justify-center", className )}>
      <Image 
        src="/images/logo.png" 
        alt="HackathonWeekly Logo" 
        width={width} 
        height={height} 
        className="h-auto w-auto object-contain"
        priority
      />
    </div>
  )
}
