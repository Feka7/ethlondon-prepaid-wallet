"use client";
import { DynamicWidget, useDynamicContext } from "@/lib/dynamic";

export default function ButtonLoginDynamic() {
  const { isAuthenticated, sdkHasLoaded } = useDynamicContext();
  if (isAuthenticated) return <div className="btn">Logging...</div>;
  if (!sdkHasLoaded) return <div className="skeleton w-20 h-10"></div>;
  return (
    <DynamicWidget
      innerButtonComponent={
        <button className="btn bg-red-500">Try app</button>
      }
    />
  );
}
