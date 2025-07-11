"use client";
import { debounce } from "lodash";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { $Device } from "../../types/global";
const useDeviceType = () => {
  const pathname = usePathname();
  const [deviceType, setDeviceType] = useState<keyof typeof $Device>(
    $Device.Desktop,
  );

  const [info, setInfo] = useState({
    platform: "",
    type: "",
  });

  const detectOS = () => {
    if (typeof window === "undefined") return "unknown";

    const userAgent = navigator.userAgent || navigator.vendor || window?.opera;
    if (/windows phone/i.test(userAgent)) return "Windows Phone";
    if (/android/i.test(userAgent)) return "Android";
    if (/iPad|iPhone|iPod/.test(userAgent) && !window?.MSStream) return "IOS";
    if (/Macintosh/.test(userAgent)) return "MacOS";
    if (/Windows/.test(userAgent)) return "Windows";
    return "unknown";
  };

  const device = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|iphone|ipod|android/.test(userAgent)) return $Device.Mobile;
    if (/tablet|ipad|playbook/.test(userAgent)) return $Device.Tablet;
    return $Device.Desktop;
  };

  const inner = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return width < 768
      ? $Device.Mobile
      : width < 1490 && height < 780
        ? $Device.Tablet
        : $Device.Desktop;
  };

  const updateDeviceType = debounce(() => {
    setDeviceType(inner());
    setInfo({
      platform: detectOS(),
      type: device(),
    });
  }, 50);

  useEffect(() => {
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    window.addEventListener("orientationchange", updateDeviceType);
    window.addEventListener("load", updateDeviceType);
    window.addEventListener("reload", updateDeviceType);
    return () => {
      window.removeEventListener("resize", updateDeviceType);
      window.removeEventListener("orientationchange", updateDeviceType);
      window.removeEventListener("load", updateDeviceType);
      window.removeEventListener("reload", updateDeviceType);
    };
  }, [pathname]);

  return {
    device: deviceType,
    info,
  };
};

export default useDeviceType;
