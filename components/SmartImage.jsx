"use client";
import Image from "next/image";

export default function SmartImage({ src, alt, className = "", priority = false, fill = true, sizes }) {
  const finalSizes = sizes || "(max-width:768px) 100vw, (max-width:1280px) 75vw, 1200px";
  return (
    <div className={`relative ${fill ? "" : "w-full h-full"}`}>
      <Image
        src={src} alt={alt} fill={fill} priority={priority}
        sizes={finalSizes} className={`object-cover ${className}`}
      />
    </div>
  );
}
